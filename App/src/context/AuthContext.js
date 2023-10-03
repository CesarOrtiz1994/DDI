import React, { createContext, useState, useEffect } from 'react';
import { storageController } from '../api/token';
import { usersController } from '../api/users';

export const AuthContext = createContext();

export const AuthProvider = (props) => {
    const { children } = props;
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const login = async (token) => {
        try {
            await storageController.setToken(token);
            const response = await usersController.getMe();
            setUser(response);
            setLoading(false);
            console.log(response);
            console.log('User -->', response);
        } catch (error) {
            console.log(error);
        }
    }

    const getSession = async () => {
            const token = await storageController.getToken();
            setLoading(false);
    }

    useEffect(() => {
        getSession();
    }, []);

    const data = {
        user,
        login,
        logout: () => console.log('logout'),
        upDateUser: () => console.log('upDateUser')
    };

    if (loading) return null;
    return (
        <AuthContext.Provider value={data}>
            {children}
        </AuthContext.Provider>
    );
}