import React from 'react'

export const Todo = (props) => {
    const{title,id,status,handleRemove}=props
  return (
    <>
    <h2>{title}</h2>
    <button onClick={()=>handleRemove(id)}>delete</button>
    </>
  )
}
