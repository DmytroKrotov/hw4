import ReactDOM from "react-dom";
import { useState } from "react";
import "./ModalForm.css"

// eslint-disable-next-line react/prop-types
export default function ModalForm({ onClose,onCreate}){
    const [isOpen, setIsOpen] = useState(true);
    const [newTitle, setNewTitle]=useState("");
    const [titleErrorMessage, setTitleErrorMessage]=useState("the field cannot be empty")
  
    function handlerClose(){
      
      onClose();
      setIsOpen(false);
    }

    function handlerSubmit(e){
        e.preventDefault();        
        onCreate(newTitle);
        setIsOpen(false);
    }

    function handlerTitleChange(e){
        if(e.target.value===""){
            setTitleErrorMessage("the field cannot be empty");

        }
        else{
            setTitleErrorMessage("Correct");
            setNewTitle(e.target.value);
        }
        
        
    }
    if (!isOpen) return null;
  
    return ReactDOM.createPortal(
      <div className="modal">
        <div className="modal-content">
          <button onClick={handlerClose}>Close</button>
          <form className="addForm" onSubmit={handlerSubmit}>
            <div className="formItem">
            <input type="text" name="title" placeholder="Set title" onChange={handlerTitleChange}/>
            <p className="formError">{titleErrorMessage}</p>
            </div>
            
            <button className="createButton" type="submit">Create task</button>
        </form>
          
        </div>
      </div>,
      document.body
    );
  }