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

const updateUser = async (userId, formData) => {
    try {
        const url = `${ENV.API_URL}/${ENV.ENDPOINTS.USERS}/${userId}`;
        const params = {
            method: 'PUT',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        }
        const res = await authFetch(url, params);
        console.log(url)
        console.log(params)
        
        if (res.statusCode) throw "Error al actualizar usuario"
        let res2 = await res.json();
        console.log(res2)
        return res2
    } catch (error) {
        throw error;
    }
}

export const usersController = {
    getMe,
    update: updateUser,
}