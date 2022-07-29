const {
    Schema,
    model
} = require('mongoose');
const moment = require('moment');

const UserSchema = new Schema({
    username: {
        type: String,
        unique: true,
        required: true,
        trim: true
    },
    email: {
        type: String,
        unique: true,
        required: true,
        match: [/.+\@.+\..+/]
    },
    thoughts: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Thought'
        }
    ],
    friends: [
        {
            type: Schema.Types.ObjectId,
            ref: 'User'
        }
    ]
},
{ 
    toJSON: {
        virtuals: true,
        getters: true
    },
    id: false
}
);

// Virtual property friendCount
UserSchema.virtual('friendCount').get(function () {
    return this.friends.length;
});

// Creates User model with Schema
const User = model('User', UserSchema);

// Exports User model
module.exports = User;