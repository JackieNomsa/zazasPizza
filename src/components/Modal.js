import React from 'react';
import { AiOutlineClose } from "react-icons/ai";

function Modal({ open, data, onClose }) {
    if (!open) return null;
  return (
    <div className='modal'>
        <AiOutlineClose onClick={onClose}/>
    <p>{data}</p>
    </div>
  )
}

export default Modal;