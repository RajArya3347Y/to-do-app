import Task from "./Task";
import TaskField from "./TaskField";


function QuizApp(){

    function onTaskFieldChange(ele){
        console.log(ele);
    }

    function onAddClick(val){
        console.log(val);
    }

    return(
        <div className="bg-white h-[60%] w-[55%] rounded-xl p-3" id="quiz-container">
            <h1 className="text-[#0a2b5f] lg:text-3xl md:text-2xl sm:text-1xl font-bold lg:py-4 md:py-3 sm:py-2">To-Do App✏️</h1>
            <TaskField onAddClick={(val) => onAddClick(val)}/>
            <hr className="border-gray-400 m-4 border-[1px]" />
            <ul className="py-3 px-11" id="taskList">
                <Task taskName="Hello world"/>
                <Task taskName="World"/>
            </ul>
        </div>
    );
}

export default QuizApp;