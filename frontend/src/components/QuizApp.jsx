import { useEffect, useState } from "react";
import Task from "./Task";
import TaskField from "./TaskField";

import { getTasks,addTask,deleteTask,editTask } from "../api/api";

function QuizApp() {

    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        (async function(){
            setTasks(await getTasks())
        })();
    },[]);

    function onTaskAdd(val) {
        setTasks((t) => [...t, val])
        addTask(val);
    }

    async function onTaskDelete(_ele,name) {
        await deleteTask(name)
        setTasks(await getTasks());
    }

    function getEditedName(taskName, editedName,isChecked) {
        setTasks((t) => t.map((task) => (task === taskName ? editedName : task)))
        editTask(taskName,editedName);
    }

    return (
        <div className="bg-white w-screen h-screen md:h-[60%] md:w-[55%] md:rounded-xl p-3 " id="quiz-container">
            <h1 className="text-[#0a2b5f] text-3xl font-bold py-4">To-Do App✏️</h1>
            <TaskField onTaskAdd={(val) => onTaskAdd(val)} />
            <hr className="border-gray-400 md:m-4 mt-5 md:mt-0 border-[1px]" />
            <ul className="py-3 px-5 md:px-11 max-h-[55%] overflow-auto" id="taskList">
                {tasks.map((task, index) => (
                    <Task
                        taskName={task}
                        key={index}
                        onDelete={(ele, name) => onTaskDelete(ele, name)}
                        getEditedName={(taskName, editedName,isChecked) => 
                            getEditedName(taskName, editedName,isChecked)
                        }
                    />
                ))}
            </ul>
        </div>
    );
}

export default QuizApp;