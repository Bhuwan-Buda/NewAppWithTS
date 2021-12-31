import axios from "axios";

export const getUserList = () => axios.get("https://jsonplaceholder.typicode.com/users")

