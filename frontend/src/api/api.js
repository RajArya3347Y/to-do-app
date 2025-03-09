import axios from "axios";

const api = axios.create({
    baseURL: "/api"
})

async function getTasks() {
    try {
        const response = await api.get("/",);
        const data = response.data.map(task => task.title);
        return data
    } catch (error) {
        console.log(error);
    }
}

async function getIsCompleted(title) {
    try {
        const response = await api.get(`/${title}`)
        const data = response.data[0].isCompleted
        return data
    } catch (error) {
        console.log(error);
    }
}

async function addTask(title) {
    try {
        await api.post(`/${title}`);
    } catch (error) {
        console.log(error);
    }
}

async function editTask(title, updatedTitle, isCompleted) {
    try {
        await api.patch(`/${title}`,{newTitle:updatedTitle,isCompleted:isCompleted})
    } catch (error) {
        console.log(error);
    }
}

async function deleteTask(title) {
    try {
        await api.delete(`/${title}`);
    } catch (error) {
        console.log(error);
    }
}

export { getTasks, deleteTask, editTask, addTask ,getIsCompleted};