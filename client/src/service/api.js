import axios from "axios";

const url = "http://localhost:3000";

export const addUser = async (data) => {
    try{
        await axios.post(`${url}/add`, data);
    } catch (error) {
        console.log("Error while addUser api", error.message);
    }
}

export const getUsers = async () => {
    try{
        let res = await axios.get(`${url}/users`);
        return res.data;
    } catch (error) {
        console.log("Error while getUsers api", error.message);
    }
}

export const setConversation = async (data) => {
    try{
        await axios.post(`${url}/conversation/add`, data);
    } catch (error) {
        console.log("Error while setConversation api", error.message);
    }
}

export const getConversation = async (data) => {
    try{
        let res = await axios.post(`${url}/conversation/get`, data);
        return res.data;
    } catch (error) {
        console.log("Error while getConversation api", error.message);
    }
}

export const newMessage = async (data) => {
    try {
        await axios.post(`${url}/message/add`, data);
    } catch (error) {
        console.log("Error while calling newMessage api", error.message);
    }
}

export const getMessage = async (id) => {
    try{
        let response = await axios.get(`${url}/message/get/${id}`);
        return response.data;
    } catch(err) {
        console.log("Error while calling getMessage api", err.message);
    }
}