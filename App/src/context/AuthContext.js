import React, { createContext, useState, useEffect } from 'react';
import { storageController } from '../api/token';
import { usersController } from '../api/users';

export const AuthContext = createContext();

export const AuthProvider = (props) => {
    const { children } = props;

    const getSession = async () => {
        try {
            const token = await storageController.getToken();
                console.log('Token -->', token);
        } catch (error) {
            console.log(error);
        }
    }

    const login = async (token) => {
        try {
            console.log('Obteniendo token', token)
            await storageController.setToken(token);
            const user = await usersController.getMe(token);
            console.log('User -->', user);
        } catch (error) {
            console.log(error);
        }
    }

    const data = {
        user: null,
        login,
        logout: () => console.log('logout'),
        upDateUser: () => console.log('upDateUser')
    };

    useEffect(() => {
        getSession();
    }, []);

    return (
        <AuthContext.Provider value={data}>
            {children}
        </AuthContext.Provider>
    );
}