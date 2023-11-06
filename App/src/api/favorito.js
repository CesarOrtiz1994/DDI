import AsyncStorage from "@react-native-async-storage/async-storage";
import { ENV } from "../util/constants";
import { includes, pull } from "lodash";
import { useAuth } from "../hooks/useAuth";

// Función para traer favoritos por usuario
export const getFavoriteApi = async (userId) => {
  try {
    const response = await AsyncStorage.getItem(`${ENV.STORAGE.FAVORITE}_${userId}`);
    return JSON.parse(response || "[]");
  } catch (error) {
    console.log("error1", error);
    return [];
  }
};

// Función para añadir a favoritos por usuario
export const addFavoritosApi = async (userId, id) => {
  try {
    const favorites = await getFavoriteApi(userId);
    favorites.push(id);
    favorites.sort((a, b) => a - b);
    await AsyncStorage.setItem(`${ENV.STORAGE.FAVORITE}_${userId}`, JSON.stringify(favorites));
  } catch (err) {
    console.log("error at addFavoritosApi: ", err);
  }
};

export const isFavoriteApi = async (userId, id) => {
  try {
    const favorites = await getFavoriteApi(userId);
    return includes(favorites, id);
  } catch (error) {
    console.log("error in isFavoriteApi ", error);
    return false;
  }
};

export const removeFavoritosApi = async (userId, id) => {
  console.log("remove favoritos");

  try {
    const favorites = await getFavoriteApi(userId);
    const newFavorites = pull(favorites, id);
    await AsyncStorage.setItem(`${ENV.STORAGE.FAVORITE}_${userId}`, JSON.stringify(newFavorites));
  } catch (error) {
    console.log("error in removeFavoritosApi ", error);
  }
};

export const storageController = {
  addFavoritosApi,
  getFavoriteApi,
  isFavoriteApi,
  removeFavoritosApi,
};
