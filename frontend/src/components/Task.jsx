import { useEffect, useState } from 'react';

// Font Awesome Imports
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faTrash} from "@fortawesome/free-solid-svg-icons";
import { faEdit } from '@fortawesome/free-solid-svg-icons';

import { editTask, getIsCompleted, getTasks } from '../api/api';


function Task(props) {

    const taskName = props.taskName;

    const [isChecked,setIsChecked] = useState(false);
    const [isEditing,setIsEditing] = useState(false);

    const [editedName,setEditedName] = useState(taskName);

    useEffect(() => {
        (async function() {
            setIsChecked(await getIsCompleted(taskName));  
        })();
    },[])

    // elements
    const taskPara = <p
        className="text-[#001c58] text-xl inline"
        style={{ textDecoration: isChecked ? "line-through" : "none" }}
    >
        {taskName}
    </p>

    const editField = <input
        className='outline-0' 
        type="text" 
        autoFocus={true}
        onKeyDown={(event) => {
            if(event.key === "Enter"){
                onEditClick()
            }
        }}
        value={editedName}
        onChange={(ele) =>
            setEditedName(ele.target.value)
        } 
    />

    function changeTaskCompleted(){
        setIsChecked((iC) => !iC);
        editTask(taskName, editedName, !isChecked)
    }

    function onEditClick(){
        setIsEditing((ie) => !ie);
        props.getEditedName(taskName,editedName,isChecked);
    }




    return (
        <li className="task pb-3">
            <div className="flex items-center justify-between">
                <div id="task">
                    <input className="mr-4 rounded-3xl w-4 h-4" 
                        type="checkbox" 
                        onChange={changeTaskCompleted} 
                        name="task-completed" 
                        id="task-check" 
                        checked={isChecked}
                    />
                    {isEditing ? editField : taskPara}
                    
                </div>
                <div id="actions">
                    <FontAwesomeIcon
                        className='w-10 h-10 px-5' 
                        size='lg' 
                        icon={faTrash} 
                        color='#001c58' 
                        onClick={(ele) => isEditing? null: props.onDelete(ele,taskName)}
                    />
                    <FontAwesomeIcon 
                        icon={faEdit} 
                        size='lg' 
                        color='#001c58'
                        onClick={onEditClick}
                    />
                </div>
            </div>
        </li>
    )
}

export default Task;