import axios from "axios";

const url = "http://localhost:3000";

export const addUser = async (data) => {
    try{
        await axios.post(`${url}/add`, data);
    } catch (error) {
        console.log("Error while addUser", error.message);
    }
}

export const getUsers = async () => {
    try{
        let res = await axios.get(`${url}/users`);
        return res.data;
    } catch (error) {
        console.log("Error while getUsers", error.message);
    }
}