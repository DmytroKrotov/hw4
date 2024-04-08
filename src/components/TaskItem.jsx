import { useState } from "react";
import "./TaskItem.css"
export default function TaskItem({id,title,isDone,onDelete,onIsDoneChange}){

    const [isDoneProperty,setIsDoneProperty]=useState(isDone);
    console.log(id);
    console.log(isDoneProperty);
    function handlerDeleteClick(){
        onDelete(id);
    }
    function handlerDoneClick(){
        setIsDoneProperty(!isDoneProperty);
        onIsDoneChange({editId:id,editTitle:title,editIsDone:isDoneProperty});
    }


    
   return   <div className="taskItemCard">
            <h2 className="taskProperty">Task #: {id}</h2>
            <p className="taskProperty">Title: {title}</p>
            <div className="doneElement">
            <p className="taskProperty">Done: {isDoneProperty?"Done":"Not done"}</p>
            </div>
            <button className="checkedDoneButton" onClick={handlerDoneClick}>{isDoneProperty?"Not done":"Done"}</button>
            <button className="deleteButton" onClick={handlerDeleteClick}>Delete</button>
            </div>
}