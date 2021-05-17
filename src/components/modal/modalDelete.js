import React from "react";
import "./modal.css";

const ModalDelete = (props)=>{//modal window to delete product
    if(!props.show){
        return null
    }
    const handleClick = (e, id) => {
        // debugger
        console.log(id)
        console.log(e)
        e.preventDefault()
        props.deleteProduct(id)
        console.log(id)
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
                    Удалить продукт?
                </div>
                <div className="modal-footer">
                    <button className="button" onClick={(e)=> {
                        handleClick(e,props.id)
                    }}>Delete</button>
                    <button className="button" onClick={props.onClose}>Close</button>
                </div>
            </div>
        </div>
    )
}
export default ModalDelete