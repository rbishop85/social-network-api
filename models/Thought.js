const { Schema, model } = require('mongoose');
const Reaction = require('./Reaction');

// Schema to create Thought model
const thoughtSchema = new Schema(
  {
    thoughtText: {
        type: String,
        required: true,
        minLength: 1,
        maxLength: 280,
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: formatDate,
    },
    username: {
        type: String,
        required: true,
    },
    reactions: [Reaction],
  },

  {
    toJSON: {
      virtuals: true,
      getters: true,
    },
    id: false,
  }
);

// Creates a reactionCount value when data is displayed
thoughtSchema
  .virtual('reactionCount')
  .get(function () {
    return this.reactions.length;
  });

  // When data is pulled, convert created date to readable string
function formatDate(date) {
    return date.toLocaleString();
  }; 

// Initialize our Thought model
const Thought = model('Thought', thoughtSchema);

module.exports = Thought;
