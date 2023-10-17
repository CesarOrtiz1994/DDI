import AsyncStorage from "@react-native-async-storage/async-storage";

import { ENV } from "../util/constants"
import { includes, pull } from "lodash"

// función para traer favoritos
export const getFavoriteApi = async () => {
  try {
    const response = await AsyncStorage.getItem(ENV.STORAGE.FAVORITE)
    console.log("response1", response)
    return JSON.parse(response || [])
  } catch (error) {
    console.log("error1", error)
    const response = await AsyncStorage.getItem(ENV.STORAGE.FAVORITE)
    console.log("response", response)
  }
}

// función para añadir a favoritos
export const addFavoritosApi = async (id) => {
  try {
    console.log("añadir favoritos")
    const favorites = await getFavoriteApi()
    favorites.push(id)
    console.log("favoritos", favorites)
    await AsyncStorage.setItem(ENV.STORAGE.FAVORITE, JSON.stringify(favorites))
  } catch (err) {
    console.log("error at addFavoritosApi: ", err)
  }
}
export const isFavoriteApi = async (id) => {
  try {
    const favorites = await getFavoriteApi()
    return includes(favorites, id)
  } catch (error) {
    console.log("error in isFavoriteApi ", error)
    return false
  }
}

export const removeFavoritosApi = async (id) => {
  console.log("remove favoritos")

  try {
    const favorites = await getFavoriteApi()
    const newFavorites = pull(favorites, id)
    await AsyncStorage.setItem(
      ENV.STORAGE.FAVORITE,
      JSON.stringify(newFavorites)
    )
  } catch (error) {
    console.log("error in removeFavoritosApi ", error)
  }
}

export const storageController = {
  addFavoritosApi,
  getFavoriteApi,
  isFavoriteApi,
  removeFavoritosApi,
}