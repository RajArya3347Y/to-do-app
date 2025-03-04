import { useState } from "react";
import Task from "./Task";
import TaskField from "./TaskField";


function QuizApp(){

    const [tasks,setTasks] = useState([]);

    function onTaskAdd(val){
        setTasks((t) => [...t,val])
    }

    function onTaskDelete(ele,name){
        setTasks((t) => t.filter((val,i) => val !== name));
    }

    function getEditedName(taskName,editedName){
        setTasks((t) => t.map((task) => (task === taskName ? editedName : task)))
    }

    return(
        <div className="bg-white h-[60%] w-[55%] rounded-xl p-3" id="quiz-container">
            <h1 className="text-[#0a2b5f] lg:text-3xl md:text-2xl sm:text-1xl font-bold lg:py-4 md:py-3 sm:py-2">To-Do App✏️</h1>
            <TaskField onTaskAdd={(val) => onTaskAdd(val)}/>
            <hr className="border-gray-400 m-4 border-[1px]" />
            <ul className="py-3 px-11" id="taskList">
                {tasks.map((task,index) => (
                    <Task 
                        taskName={task} 
                        key={index}
                        onDelete={(ele,name) => onTaskDelete(ele,name)}
                        getEditedName={(taskName,editedName) => getEditedName(taskName,editedName)}
                    />
                ))}
            </ul>
        </div>
    );
}

export default QuizApp;