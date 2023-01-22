import React from 'react'
import './Modal.css'

function Modal(props, {Children}) {
  return (
    <div className={props.className}>{Children}</div>
  )
}

export default Modal