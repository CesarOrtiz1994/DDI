import React, { useState, useEffect } from "react"
import { IconButton } from "react-native-paper"
import { storageController } from "../../api/favorito"
import { useAuth } from "../../hooks/useAuth";


export default function Favoritos(props) {
  const { id } = props
  const [isFavorite, setIsFavorite] = useState(undefined)
  const [reloadFavorite, setReloadFavorite] = useState(false)
  const onReloadFavorite = () => setReloadFavorite(!reloadFavorite)
  const { user } = useAuth()

  useEffect(() => {
    (async () => {
      const response = await storageController.isFavoriteApi(user.id, id)
      if (response) setIsFavorite(true)
      else setIsFavorite(false)
    })()
  }, [id, reloadFavorite])

  const addFavoritos = async () => {
    try {
      await storageController.addFavoritosApi(user.id, id)
      onReloadFavorite()
    } catch (error) {
      console.log("error in addFavoritos", error)
    }
  }

  const removeFavoritos = async () => {
    try {
      await storageController.removeFavoritosApi(user.id, id)
      onReloadFavorite()
    } catch (error) {
      console.log("error in removeFavorites: ", error)
    }
  }

  const iconColor = isFavorite ? "#f00" : "#fff"
  return (
    <IconButton
      icon="heart"
      iconColor={iconColor}
      size={50}
      onPress={isFavorite ? removeFavoritos : addFavoritos}
    />
  )
}