import React, { useState } from "react";


function TodoList() {
    const [tasks,setTasks]=useState([]);
    const [newTasks,setNewTasks]=useState(""); 


    return(
        <div>
            <h1>
                TodoList
            <h1/>
        <div/>

    );
}

export default TodoList;