import { useState } from 'react'
import Show from './components/Show';
import './App.css'
import AddTask from './components/AddTask';

function App() {
  const [tasks, setTasks] = useState([{id:"2",title:"first",isDone:false},{id:"3",title:"first3",isDone:true},{id:"4",title:"first4",isDone:false}]);


  function getUniqueId(arr){
    let newId=Math.random();
    if(arr.filter((i)=>i.id===newId).length>0){
      return newId=getUniqueId(arr);
    }
    else{
      return newId;
    }
  }

  function handlerNewTaskCreate(newTask){
    let Id=getUniqueId(tasks);
    setTasks((prevTasks)=>{
     return [{id:Id,title: newTask,isDone:false},...prevTasks]
    });
  }

  function handlerDeleteItem(deletedId){
    setTasks((prevTasks) => {
      return prevTasks.filter((i)=>i.id!==deletedId);
    });
  }

  function handlerEditTask(editTask){
    ()=>setTasks((prevTasks) => {
      return prevTasks.filter((i)=>i.id!==editTask.editId);
    });
    ()=>setTasks((prevTasks)=>{
      return [{id:editTask.editId,title: editTask.editTitle, isDone: editTask.editIsDone},...prevTasks]
     });
  }
  

  return (
    <>    
      <AddTask onCreate={handlerNewTaskCreate}/>
      <Show tasks={tasks} onDeleteItem={handlerDeleteItem} onEditTask={handlerEditTask}/>
    </>
  )
}

export default App
