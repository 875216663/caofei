//route index
import reminderRoutes from './reminder-route.js';

const route = (app) => {
    app.use('/reminders', reminderRoutes);
}

export default route;