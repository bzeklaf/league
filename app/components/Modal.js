'use client';
import React from 'react'

const Modal = ({id,title,body}) => {
  return (
    <dialog id={id} className="modal">
  <div className="modal-box w-11/12 max-w-5xl">
    <h3 className="font-bold text-lg">{title}</h3>

    <div className="py-4" dangerouslySetInnerHTML={{__html: body}}></div>


    <div className="modal-action">
      <form method="dialog">
        {/* if there is a button, it will close the modal */}
        <button className="btn">Close</button>
      </form>
    </div>
  </div>
</dialog>
  )
}

export default Modal