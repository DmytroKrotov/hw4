
import { useState } from "react";
import TaskItem from "./TaskItem";
import "./TaskItem.css";



// eslint-disable-next-line react/prop-types
export default function Show({tasks,onDeleteItem,onEditTask}){

    

    let k=1;
    function handlerDelete(deletedItemId){
        onDeleteItem(deletedItemId)
    }
    function handlerDoneChange(editTask){
        onEditTask(editTask);
        
    }
    // eslint-disable-next-line react/prop-types
    return (
        <div className="mainShowBlock">
           
            <div className="showBlock">
            {tasks.map((i)=><TaskItem  key={++k} id={i.id} title={i.title} isDone={i.isDone} onDelete={handlerDelete} onIsDoneChange={handlerDoneChange}/>)}
            </div>
        </div>)
}