const { Schema, Types } = require('mongoose');

console.log(formatDate(Date.now));


const reactionSchema = new Schema(
  {
    reactionId: {
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId(),
    },
    reactionBody: {
        type: String,
        required: true,
        maxLength: 280,
    },
    username: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: formatDate,
    },
  },

  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

function formatDate(date) {
    return date.toLocaleString();
  };

module.exports = reactionSchema;
