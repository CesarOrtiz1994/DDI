import { View, Text } from "react-native"
import React from "react"
import { getFavoriteApi } from "../api/favorito"
import { Button } from "react-native-paper"

export default function FavoritesScreen() {
  const checkFavorite = async () => {
    const response = await getFavoriteApi()
    console.log(response)
  }
  return (
    <View>
      <Button
        mode="contained"
        onPress={checkFavorite}
      >
        Obtener favoritos
      </Button>
    </View>
  )
}