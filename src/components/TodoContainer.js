import React, {useEffect, useState} from 'react';
import axios from 'axios';

const TodoContainer = () => {
    const [todos, setTodos] = useState([]);
    useEffect(
        () => {
            axios.get("https://jsonplaceholder.typicode.com/todos")
                 .then(response => {
                        console.log(response);
                        setTodos(response.data);
                  }).catch(console.log)
        }, []
    );

    return (
        <div>
            {todos.map(val => {
                return <h1>{val.title}</h1>;
            })}
        </div>
    );
};

export default TodoContainer