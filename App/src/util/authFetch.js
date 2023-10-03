import { storageController } from "../api/token";
import { tokenExpired } from "./tokenExpired";

export const authFetch = async (url, params) => {
    const token = await storageController.getToken();
    
    const logout = () => {
        storageController.removeToken();
    }
    if(!token) {
        logout();
    } else {
        if (tokenExpired(token)) {
            logout();
        } else {
            const paramsTemp = {
                ...params,
                headers: {
                    ...params?.headers,
                    Authorization: `Bearer ${token}`
                }
            }
            try {
                return await fetch(url, paramsTemp);
            } catch (error) {
                console.log(error);
            }
        }
    }

}