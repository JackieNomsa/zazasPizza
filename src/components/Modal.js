import React from 'react';
import { AiOutlineClose } from "react-icons/ai";

function Modal({ open, data, onClose }) {
    if (!open) return null;
  return (
    <div className='modal'>
        <AiOutlineClose className='close-btn' onClick={onClose}/>
    <img src={data}/>
    </div>
  )
}

export default Modal;