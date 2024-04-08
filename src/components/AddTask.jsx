import { useState } from "react";
import ModalForm from "./ModalForm";

// eslint-disable-next-line react/prop-types
export default function AddTask({onCreate}){
    const [isModalOpen, setIsModalOpen] = useState(false);
  
    function handleOpenModal(){
      setIsModalOpen(true);
    }

    function handlerCreate(newTask){
        onCreate(newTask);
        setIsModalOpen(false);
    }

    function handlerClose(){
        setIsModalOpen(false);
    }
  
    return (
      <>
        <button onClick={handleOpenModal}>Add task</button>
        {isModalOpen && (
          <ModalForm onClose={handlerClose} onCreate={handlerCreate}/>
        )}
        
      </>
    );
  }