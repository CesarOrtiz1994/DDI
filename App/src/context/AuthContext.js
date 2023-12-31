import React, { createContext, useState, useEffect, useCallback } from "react";
import { storageController } from "../api/token";
import { usersController } from "../api/users";
import { tokenExpired } from "../util/tokenExpired";

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
    } catch (error) {
      console.log(error);
    }
  };

  const getSession = async () => {
    const token = await storageController.getToken();
    if (!token) {
      logout();
      setLoading(false);
      return;
    }
    tokenExpired(token) ? logout() : login(token);
  };

  useEffect(() => {
    getSession();
  }, []);

  const logout = async () => {
    try {
      await storageController.removeToken();
      setUser(null);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const updateUser = useCallback((key, value) => {
    setUser((prevUser) => ({ ...prevUser, [key]: value }));
  }, []);
  const data = {
    user,
    login,
    logout,
    updateUser
  };

  if (loading) return null;
  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
};
