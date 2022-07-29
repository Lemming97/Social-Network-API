const {
    Schema,
    model
} = require('mongoose');

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
        // match a valid email address
        match: [/.+@.+\..+/, 'Please enter a valid e-mail address']
    },
    // sub-document for thoughts 
    thoughts: [{
        type: Schema.Types.ObjectId,
        // referring to the thought document model 
        ref: 'Thought'
    }],
    friends: [{
        type: Schema.Types.ObjectId,
        // referring to the user document model 
        ref: 'User'
    }]
}, {
    toJSON: {
        virtuals: true,
        getters: true
    },
    id: false
});

//Create a virtual called friendCount that retrieves the length of the user's friends array field on query.
UserSchema.virtual('friendCount').get(function () {
    return this.friends.length;
});

const User = model('User', UserSchema);

module.exports = User;