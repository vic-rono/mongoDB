const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const TestSchema = new Schema({
    name: String,
    email: varchar
})

const Test = mongoose.model("test", TestSchema);

module.exports = Test;