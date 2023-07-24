import React, { useState } from 'react'
import "./reminder.scss"
import {ReminderApi} from '../api.js';

export default function Reminder({name,date,completed,details,id,remove}) {
  console.log(name)
  //hidden detail state, reminder completed state
  const [hidden,setHidden] = useState(true);
  const [isCompleted,setIsCompleted] = useState(completed);

  //update the status of the reminder, api trigger the back end and change the complete ui.
  const handleCheckboxChange = () => {  
        const updateOne = {"_id":id,"title":name,"description":details,"completed":!isCompleted};
        console.log(updateOne);
        ReminderApi("PUT", "http://localhost:9000/reminders", updateOne).then((res)=>{
            setIsCompleted(!isCompleted);
        })
  }

  //the html structure of reminder 
  return (
    <div className='reminder'> 
        <p id={`name_${id}`} onClick={()=>{setHidden(!hidden)}}>{name}</p>
        <p id={`detail_${id}`} style={hidden ? { display:"none" }:{ display:"block" }}>{details}</p>
        <p>{date}</p>
        <input type="checkbox" id={`status_${id}`} name="completed" value="completed" checked={isCompleted} onChange={() => handleCheckboxChange()}/> <span>completed</span>
        <button  className='remove_btn' onClick={()=>remove(id)}>delete</button>
    </div>
  )
}
