import React, { useState } from 'react'
import "./addform.scss"
import {ReminderApi} from '../api';

//add form component, received three parameters for the page state handle.
export default function AddForm({show,setShow,handleAddItem}) {

  //new reminder state, control the form data.
  const [newReminder,setNewReminder] = useState({title:"",description:"",date:""});

  //close add form function, clear the form and close the modal and form.
  const handleClose = ()=>{
    setShow(false);
    setNewReminder({title:"",description:"",date:""});
  }

  const handleSubmit = ()=>{
    
    //add one new reminder to back end, trigger the api and render the response data to page.
      ReminderApi("POST", "http://localhost:9000/reminders", newReminder).then((res)=>{
         if(res.error){
           throw new Error(res.error.message);
         }
         handleAddItem(res);
         handleClose();
       }).catch(error => {
        alert(error.message);
      });
  }

  //handle the input data in box.
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewReminder({ ...newReminder, [name]: value });
  };

  //the html structure of add form.  show controlled by user click the navbar + component.
  return (
    <div style={show ? { visibility: "visible",opacity: 1}:{visibility: "hidden",opacity: 0}}>
     <div className="backdrop" ></div>
      <div className="add-form" >
          <div>
              <p>Event Name:</p>
              <input type="text" required name='title' value={newReminder.title} onChange={handleInputChange}/>
          </div>
          <div>
              <p>Details:</p>
              <textarea id="details" required name='description' value={newReminder.description} onChange={handleInputChange}></textarea>
          </div>
          <div>
          <p>Date:</p>
            <input type="date" required id="date"  name='date'  value={newReminder.date} onChange={handleInputChange}/>
          </div>
          <div>
              <button id="submit" className="operator"  onClick={handleSubmit}>submit</button>
              <button id="close"  className="operator" onClick={handleClose}>close</button>
          </div>
    </div>
    </div>
    
  )
}
