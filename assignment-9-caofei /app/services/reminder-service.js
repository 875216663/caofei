//reminder-services function
import Reminder from './../models/reminder.js';

export const save = async (newReminder) => {
    const reminder = new Reminder(newReminder);
    return reminder.save();
}

export const update = async (id, updatedReminder) => {
    const reminder = Reminder.findByIdAndUpdate(id, {...updatedReminder, lastModifiedDate: new Date()}).exec();
    return updatedReminder;
}

export const get = async (id) => {
    const reminder = Reminder.findById(id).exec();
    return reminder;
}

export const fetch = async () => {
    const reminder = Reminder.find().exec();
    return reminder;
}

export const remove = async (id) => {
    const reminder = Reminder.findByIdAndDelete(id).exec();
    return reminder;
}