const BASH_URL = import.meta.env.VITE_REACT_APP_BASE_URL;
import axios from "axios";


export const getCars = async () => {
    try {
        const response = await axios.get(`${BASH_URL}`);
        return response
    } catch (error) {
        return error;
    }
}

export const getCategoires = async () => {
    try {
        const response = await axios.get(`${BASH_URL}`);
        return response.data.category
    } catch (error) {
        return error;
    }
}