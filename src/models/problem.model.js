const mongoose = require ('mongoose');

const problemSchema = new mongoose.Schema({
    title: {
        type: String,
        default: [true, 'Title cannot be empty']
    },
    description: {
        type: String,
        default: [true, 'Description cannot be empty']
    },
    difficulty: {
        type: String,
        enum: ['easy','medium','hard'],
        required:[true, 'Difficulty cannot be empty'],
        default: 'easy'
    },
    testCases: [
        {
            input: {
                type: String,
                required: true
            },
            output:{
                type: String,
                required: true
            }
        }
    ],
    editorial: {
        type: String
    }
});

const Problem = mongoose.model('Problem', problemSchema);

module.exports = Problem;