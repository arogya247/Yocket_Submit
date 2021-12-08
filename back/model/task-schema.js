import mongoose from "mongoose";

const taskSchema = mongoose.Schema({
    name: String, 
    deadline: String,
    priority: String,
    status: String
})

const task = mongoose.model('task', taskSchema)

export default task;