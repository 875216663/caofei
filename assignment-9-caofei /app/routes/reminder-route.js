//route restful
import express from 'express';
import * as reminderController from './../controllers/reminder-controller.js';

const router = express.Router();

router.route('/')
    .post(reminderController.post)
    .get(reminderController.Fetch);

router.route('/:id')
    .get(reminderController.find)
    .put(reminderController.Update)
    .delete(reminderController.Remove);

export default router;