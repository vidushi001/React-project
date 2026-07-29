import api from '../../api/axios'

async function createTask(taskData){
    let response = await api.post('/task/save',taskData);
    console.log(response);
    return response
}

async function getTaskList(username){
    let response = await api.post('/task/taskList',{'username':username});
    console.log(response);
    return response?.data || []
}
export {createTask,getTaskList}