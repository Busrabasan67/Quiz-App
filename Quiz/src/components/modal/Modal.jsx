import React from 'react'
import './Modal.css'

const Modal = ({score}) => {
  return (
    <div className='modal'>
      <div className='modal-title'>Score: {score}</div>
      <div onClick={()=>window.location ="/"} className='modal-btn'>Restart Quiz</div>
    </div>
  )
}

export default Modal
