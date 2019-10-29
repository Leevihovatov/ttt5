var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var GameSchema = new Schema({
    turn: {type: String, enum: ["x", "o"], default: "x"},
    xs: { type: Array },
    os: { type: Array }
});

// Export model.
module.exports = mongoose.model("Game", GameSchema);
