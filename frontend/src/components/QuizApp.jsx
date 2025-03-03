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
            <hr className="border-gray-400 pb-4"/>
            <TaskField onAddClick={(val) => onAddClick(val)}/>
        </div>
    );
}

export default QuizApp;