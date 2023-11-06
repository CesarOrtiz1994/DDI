import React, { useState } from "react";
import { getFavoriteApi } from "../api/favorito";
import { useFocusEffect } from "@react-navigation/native";
import { ENV } from "../util/constants";
import axios from "axios";
import HomeScreen from "./HomeScreen";
import { useAuth } from "../hooks/useAuth";


export default function FavoritesScreen() {
  const [characters, setCharacters] = useState([]);
  const { user } = useAuth();

  useFocusEffect(
    React.useCallback(() => {
      const fetchData = async () => {
        try {
          const favoriteResponse = await getFavoriteApi(user.id);

          const characterDetails = await Promise.all(
            favoriteResponse.map(async (id) => {
              const characterResponse = await axios.get(
                ENV.API_URL_RM + '/' + id
              );
              return characterResponse.data;
            })
          );

          setCharacters(characterDetails);
        } catch (error) {
          console.log(error);
        }
      };

      fetchData();
    }, [])
  );

  const loadMoreData = async () => {
   console.log("caragr datos")
  };

  return (
    <HomeScreen
      characters={characters}
      title={"Favoritos"}
      loadMoreData={loadMoreData}
    />
  );
}
