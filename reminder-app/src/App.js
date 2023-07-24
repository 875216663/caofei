import { useEffect, useState } from 'react';
import './App.scss';
import NavBar from './NavBar/NavBar';
import Reminder from './Reminder';
import {ReminderApi} from './api';
import AddForm from './Modal';

function App() {
  //set reminders array state and if show the add form state.
  const [reminders,setReminders] =  useState([]);
  const [show,setShow] =  useState(false);
  
  //get the initial data by calling the back end api.
  useEffect(() => {
    ReminderApi("GET", "http://localhost:9000/reminders", null).then((res)=>{
        setReminders(res);
    });
  }, []);
  
  //if add one new reminder, refresh the reminder array state.
  const handleAddItem = (newItem) => {
    setReminders([...reminders, newItem]);
  };

  //if remove one reminder, call the back end api and refresh the reminder array state.
  const remove = (id) => {  
    ReminderApi("DELETE", "http://localhost:9000/reminders", {},"/"+id).then((res)=>{
      let reminderClone = [...reminders];
      reminderClone = reminderClone.filter(c => c._id!=id);
      setReminders(reminderClone)
    })
}

  //the html structure of main page, and set the functions and parameters in different components. 
  return (
    <div className='main-body'>
      <NavBar setShow={setShow}></NavBar>
      <div className='right'>
            <p className="title">Reminders</p>
            <div className="reminders">
              {reminders.map((reminder) => (
               <Reminder key={reminder._id} id={reminder._id} remove={remove} completed={reminder.completed}  name={reminder.title} details={reminder.description} date={reminder.date.split("T")[0]}></Reminder>
              ))}    
            </div> 
      </div>
      <AddForm show={show} setShow={setShow} handleAddItem={handleAddItem} />
    </div>
  );
}

export default App;
