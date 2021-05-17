import React from "react";
import "./modal.css";

const Modal = (props)=>{//modal window to add new product
    if(!props.show){
        return null
    }
    return (
        <div className="modal" onClick={props.onClose}>
            <div className="modal-content" onClick={event => event.stopPropagation() }>
                <div className="modal-header">
                    <h4 className="modal-title">
                        {props.title}
                    </h4>
                </div>
                <div className="modal-body">
                    {props.children}
                </div>
                <div className="modal-footer">
                    <button className="button" onClick={props.onClose}>Close</button>
                </div>
            </div>
        </div>
    )
}
export default Modal