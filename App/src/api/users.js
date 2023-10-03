import { ENV } from "../util/constants";
import { authFetch } from "../util/authFetch";

const getMe = async (token) => {
    try {
        const url = `${ENV.API_URL}${ENV.ENDPOINTS.USERS_ME}`;
        const res = await authFetch(url);
        return await res.json();

    } catch (error) {
        console.log(error);
        return null;
    }
}
export const usersController = {
    getMe,
}