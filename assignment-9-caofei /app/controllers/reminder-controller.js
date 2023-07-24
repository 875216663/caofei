//reminder-controller
import { request, response } from 'express';
import { save, get, remove, update, fetch } from './../services/reminder-service.js';


//post function with status code: 201 or 500
export const post = async (request, response) => {
    try {
        const newReminder = request.body;
        if (newReminder.title == null || newReminder.title.length > 50 || newReminder.title.length < 1 || 
            newReminder.description == null || newReminder.description.length > 100 || newReminder.description.length < 10) {
                setErrorValidationResponse(newReminder, response);
                return null;
        }
        const savedReminder = await save(newReminder);
        setSuccessfulPostResponse(savedReminder, response);
    } catch (err) {
        setErrorResponse(err, response);
    }
}

//find function with status code: 200, or 400
export const find = async(request,response) => {
    try{
        const id = request.params.id;
        const reminder = await get(id);
        if (reminder == null) {
            setErrorValidationResponse(reminder, response);
                return null;
        }
        setSuccessfulResponse(reminder,response);
    }catch(err){
            setErrorResponse(err,response);
    }        
}

//delete function with status code: 200, or 400
export const Remove = async(request,response) => {
    try{
        const id = request.params.id;
        const reminder = await remove(id);
        if (reminder == null) {
            setErrorValidationResponse(reminder, response);
                return null;
        }
        setSuccessfulResponse(reminder,response);
    }catch(err){
            setErrorResponse(err,response);
    }        
}

//update function with status code: 200, or 400
export const Update = async(request,response) => {
    try{
        const id = request.params.id;
        const newReminder = request.body;
        if (newReminder.title == null || newReminder.title.length > 50 || newReminder.title.length < 1 || 
            newReminder.description == null || newReminder.description.length > 100 || newReminder.description.length < 10) {
                setErrorValidationResponse(newReminder, response);
                return null;
        }
        const reminder = await update(id, newReminder);
        if (reminder == null) {
            setErrorValidationResponse(reminder, response);
                return null;
        }
        setSuccessfulResponse(reminder,response);
    }catch(err){
            setErrorResponse(err,response);
    }        
}


//fetch function with status code: 200, or 400
export const Fetch = async(request,response) => {
    try{
        const reminder = await fetch();
        setSuccessfulResponse(reminder,response);
    }catch(err){
            setErrorResponse(err,response);
    }        
}

//successful response: 201
const setSuccessfulPostResponse = (obj, response) => {
    response.status(201);
    response.json(obj);
}

//successful response: 200
const setSuccessfulResponse = (obj, response) => {
    response.status(200);
    response.json(obj);
}

//error response: 500
const setErrorResponse = (err, response) => {
    response.status(500);
    response.json({
        error: {
            message: err
        }
    })
}

//error response: 400
const setErrorValidationResponse = (obj, response) => {
    response.status(400);
    response.json({
        error: {
            message: obj
        }
    })
}
