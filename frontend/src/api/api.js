import axios from "axios";

async function getTasks() {
    try {
        const response = await axios.get("/api",);
        const data = response.data.map(task => task.title);
        return data
    } catch (error) {
        console.log(error);
    }
}

async function addTask(title) {
    try {
        await axios.post(`/api/${title}`);
        await getTasks()
    } catch (error) {
        console.log(error);
    }
}

async function editTask(title, isCompleted) {

}

async function deleteTask(title) {
    try {
        await axios.delete(`/api/${title}`);
        await getTasks();
    } catch (error) {
        console.log(error);
    }
}

export { getTasks, deleteTask, editTask, addTask };