import { useRef, useState } from "react";

function TaskField(props){

    let [taskName,setTaskName] = useState("");

    function onChange(ele){
        setTaskName(ele.target.value);
    }

    function onClick(){
        props.onAddClick(taskName);
        setTaskName((tn) => "");
    }

    return(
        <div className="w-[100%] flex justify-center items-center lg:px-10 md:px-7 sm:px-7 " id="task-field">
            <input className="bg-[#eaedee] lg:text-xl md:text-lg sm:text-sm lg:p-3 md:p-2 sm:p-2 rounded-l-4xl outline-0 w-[80%]" 
                type="text" 
                placeholder="Enter the task"
                value={taskName}  
                onChange={(ele) => onChange(ele)}
            />
            <button className="bg-[#fe633d] rounded-r-4xl lg:text-xl md:text-lg sm:text-sm lg:p-3 md:p-2 sm:p-2 text-white w-[20%]" onClick={onClick}>Add</button>
        </div>
    )
}


export default TaskField;