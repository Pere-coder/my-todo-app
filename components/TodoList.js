import React from "react";



const TodoList = ({ todos, deleteTodo }) => {
    return ( <div className="mt-10"><ul>

                {todos.map((todo) =>(<li  key={todo.id}>
                <span className="bg-red-400 hover:bg-red-600 rounded p-2 text-white">{todo.text}</span>
                <button onClick={() => deleteTodo(todo.id)} className="ml-10 bg-cyan-500 hover:bg-cyan-600  rounded p-2 text-white mt-5">Delete</button>
                </li>
                    
                    ))}



            </ul>
            </div> );
}
 
export default TodoList;