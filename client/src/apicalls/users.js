const { default: axiosInstance } = require(".");

export const registerUser = async (payload) => {
    try {
        const response = await axiosInstance.post('https://quizapplication-akd7.onrender.com/api/users/register', payload);
        return response.data;
    } catch (error) {
        return error.response.data;
    }
}

export const loginUser = async (payload) => {
    try {
        const response = await axiosInstance.post('https://quizapplication-akd7.onrender.com/api/users/login', payload);
        return response.data;
    } catch (error) {
        return error.response.data;
    }
}

export const getUserInfo = async () => {
    try {
        const response = await axiosInstance.post('https://quizapplication-akd7.onrender.com/api/users/get-user-info');
        return response.data;
    } catch (error) {
        return error.response.data;
    }
}
