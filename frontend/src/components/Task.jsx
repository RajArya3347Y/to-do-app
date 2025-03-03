import { useState } from 'react';

// Font Awesome Imports
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faTrash} from "@fortawesome/free-solid-svg-icons";
import { faEdit } from '@fortawesome/free-solid-svg-icons';


function Task(props) {

    const [isChecked,changeIsChecked] = useState(false);

    function changeTaskCompleted(ele){
        changeIsChecked((iC) => !iC);
    }

    return (
        <li className="task pb-3">
            <div className="flex items-center justify-between">
                <div id="task">
                    <input className="mr-4 rounded-3xl w-4 h-4" 
                        type="checkbox" 
                        onChange={(ele) => changeTaskCompleted(ele)} 
                        name="task-completed" 
                        id="task-check" 
                    />
                    <p 
                        className="text-[#001c58] text-xl inline"
                        style={{textDecoration: isChecked ? "line-through" : "none"}   }
                    >
                        {props.taskName}
                    </p>
                </div>
                <div id="actions">
                    <FontAwesomeIcon className='w-10 h-10 px-5' size='lg' icon={faTrash} color='#001c58' />
                    <FontAwesomeIcon icon={faEdit} size='lg' color='#001c58'/>
                </div>
            </div>
        </li>
    )
}

export default Task;