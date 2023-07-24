import React from 'react'
import "./NavBar.scss"

//NavBar component, the show modal function trigger.
export default function NavBar({setShow}) {
  return (
    <div className='left' onClick={()=>setShow(true)}>+</div>
  )
}
