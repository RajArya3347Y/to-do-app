import { useRef, useState } from "react";

function TaskField(props){

    let [taskName,setTaskName] = useState("");

    function onChange(ele){
        setTaskName(ele.target.value);
    }

    function onClick(){
        if(taskName.trim() !== ""){
            props.onTaskAdd(taskName.trim());
            setTaskName((tn) => "");
        }
    }

    function onEnterKeyDown(event){
        if(taskName.trim() !== ""){
            if(event.key === "Enter"){
            props.onTaskAdd(taskName.trim());
                setTaskName((tn) => "");
            }
        }
    }

    return(
        <div className="w-[100%] flex my-2 justify-center items-center px-7 md:px-10 " id="task-field">
            <input className="bg-[#eaedee] text-xl p-2 md:p-3 rounded-l-4xl outline-0 w-[87%]" 
                type="text" 
                placeholder="Enter the task"
                value={taskName}  
                onChange={(ele) => onChange(ele)}
                onKeyDown={(e) => onEnterKeyDown(e)}
            />
            <button className="bg-[#fe633d] rounded-r-4xl text-xl p-2 md:p-3 text-white w-[20%] md:w-[13%]" onClick={onClick}>Add</button>
        </div>
    )
}


export default TaskField;