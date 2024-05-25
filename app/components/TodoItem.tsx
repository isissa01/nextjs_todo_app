'use client'
import React, { useState } from 'react';

function TodoItem({ todo , updateTodo, deleteTodo , toggleTodo}) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(todo.text);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleCancel = () => {
    setIsEditing(false);
    setEditedText(todo.text); // Reset the text to original if cancelled
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateTodo({
      ...todo,
      text: editedText
    });
    setIsEditing(false);
  };

  return (
    <li className="flex justify-between cursor-pointer odd:bg-slate-200 odd:text-black p-3" >

    <form onSubmit={ (e) => { e.preventDefault(); toggleTodo(todo)}}>
        <input type="hidden" name="id" value={todo.id}/>
        <input type="hidden" name="completed" value={todo.completed.toString()}/>
        
        <input
            type="submit"
            value={todo.completed ? "✅" : "⬜"}
            className="cursor-pointer text-2xl"
            
        />
        </form>  
      {isEditing ? (
        <form onSubmit={handleSubmit} className="flex gap-3">
          <input type="text" value={editedText} onChange={(e) => setEditedText(e.target.value)} className="outline-none px-3 py-2 text-black"/>
          <button type="submit"className="cursor-pointer text-white bg-green-500 px-5 py-3 hover:text-white hover:bg-green-700 rounded-md">Update</button>
          <button type="button" onClick={handleCancel} className="cursor-pointer text-red-500 bg-white px-5 py-3 hover:text-white hover:bg-red-500 rounded-md">Cancel</button>
        </form>
      ) : (
        <>
          <span onClick={handleEdit}>{todo.text}</span>
         
        </>
      )}
        <div className='flex gap-3'>
            <button onClick={handleEdit}>✏️</button>
            <button onClick={() => deleteTodo(todo.id)}>❌</button>
        </div>
       
    </li>

  );
}

export default TodoItem;