//main app
import express from "express";
import mongoose from "mongoose";
import models from './models/index.js';
import cors from 'cors';
import route from './routes/index.js';

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded());
route(app);

mongoose.connect('mongodb://127.0.0.1/reminderdb');

export default app;