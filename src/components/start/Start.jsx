import React, { useRef } from 'react'
import './start.css';

export const Start = ({setUserName}) => {
    const inputRef = useRef();
    const handleClick = () =>{
        inputRef.current.value && setUserName(inputRef.current.value)
    }
  return (
    <div className='start'>
        <input 
         placeholder='enter your name'
         type="text" className='startInput'
         ref={inputRef}
         />
        <button className='startButton' onClick={handleClick} >Start</button>
    </div>
  )
}
