import React, { useState} from "react";
import TodoList from "@/components/TodoList";
import TodoForm from "@/components/TodoForm";



const TodoPage = () => {
    const [todos, setTodos] = useState([]);

    const addTodo = (text) => {
        setTodos([...todos, {id: todos.length + 1, text}])
    };

    const deleteTodo = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id));
        };

        return (
            <div className="flex justify-center items-center  mt-10 ">
                <div className=" text-center bg-blue-100 p-5 rounded w-[32rem]">
                <TodoForm  addTodo={addTodo}/>
                <TodoList  todos={todos} deleteTodo={deleteTodo}/>
                </div>
                </div>
        );


};

export default TodoPage;