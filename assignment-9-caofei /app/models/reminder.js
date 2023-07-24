//reminder schema
import mongoose from "mongoose";

const reminderSchema = new mongoose.Schema({
    id: Number,
    title: String,
    description: String,
    date: Date,
    active: Boolean
});

const Reminder = mongoose.model('Reminder', reminderSchema);

export default Reminder;