import { View, Text } from "react-native"
import React, {useState} from "react"
import { getFavoriteApi } from "../api/favorito"
import { Button } from "react-native-paper"
import { useFocusEffect } from "@react-navigation/native"
import { ENV } from "../util/constants"
import axios from "axios"
import HomeScreen from "./HomeScreen"

export default function FavoritesScreen() {
  const [personajes, setPersonajes] = useState([])
  const [characters, setCharacters] = useState([])

  useFocusEffect(
    React.useCallback(() => {

      (async () => {
        const response = await getFavoriteApi()
        console.log(response)
        setPersonajes(response)

        try {
          const responseCharacters = await axios.get(ENV.API_URL_RM);
          setCharacters(responseCharacters.data.results);
        } catch (error) {
          console.log(error);
        }
      })();
    }, [])
  )

  return (
    <HomeScreen characters={characters.filter((character) => personajes.includes(character.id))} title={'Favoritos'} />
  )
}