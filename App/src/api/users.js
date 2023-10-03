import { ENV } from "../util/constants";

const getMe = async (token) => {
    try {
        const res = await fetch(`${ENV.API_URL}/${ENV.ENDPOINTS.USERS_ME}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`
            }
        });
        const result = await res.json();
        return result;
    } catch (error) {
        console.log(error);
        return null;
    }
}
export const usersController = {
    getMe
}