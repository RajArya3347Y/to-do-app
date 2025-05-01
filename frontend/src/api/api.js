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

async function getIsCompleted(title) {
    try {
        const response = await axios.get(`/api/${title}`)
        const data = response.data[0].isCompleted
        return data
    } catch (error) {
        console.log(error);
    }
}

async function addTask(title) {
    try {
        await axios.post(`/api/${title}`);
        return getTasks
    } catch (error) {
        console.log(error);
    }
}

async function editTask(title, updatedTitle, isCompleted) {
    try {
        await axios.patch(`/api/${title}`,{newTitle:updatedTitle,isCompleted:isCompleted})
        return getTasks;
    } catch (error) {
        console.log(error);
    }
}

async function deleteTask(title) {
    try {
        await axios.delete(`/api/${title}`);
        return getTasks;
    } catch (error) {
        console.log(error);
    }
}

export { getTasks, deleteTask, editTask, addTask ,getIsCompleted};