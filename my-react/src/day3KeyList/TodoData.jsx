import React from 'react'
import { useState } from 'react';
import { nanoid } from 'nanoid';
import{Todo} from './Todo'

export const TodoData = () => {
    const[task,setTask]=useState("");
    const[todo,setTodo]=useState([]);
    const handleChange = (event) => {
        setTask(event.target.value);
    }
    const handleClick = () => {
        const taskobj={
            id:nanoid(),
            title:task,
            status:false
        }
        setTodo ([...todo,taskobj]);
    }

    const handleDelete = (id) =>{
        console.log("delete")
        let newTodo = todo.filter(item=>item.id !=id)
        setTodo(newTodo)
    }

  return (
    <>
     <input type={"text"} value={task} placeholder="Enter Task Name" onChange={handleChange}></input>
     <button onClick={handleClick}>Add todo</button>
     {todo.map(item=>{
        return <Todo key= {item.id} {...item} handleRemove={handleDelete}/>
     })}
    </>
  )
}
