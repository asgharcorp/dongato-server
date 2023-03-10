const {Schema, model} = require('mongoose');

const teamSchema = new Schema({
    _id: {
        type: String
    },
    name: {
        type: String,
    },
    teamID: {
        type: String,
        unique: true,
        index: true
    },
    members: {
        type: [
            {
                user: {
                    type: String,
                    ref: "User",
                    required: true
                },
                rule: {
                    type: String,
                    required: true
                }
            }
        ],
        default: []
    },
    owner: {
        type: String,
        ref: "User",
        required: true
    },
    profile: {
        type: String,
        default: ''
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
});

module.exports = model("Team", teamSchema);