import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { styles } from "./Card.styles";
import { Avatar } from "react-native-paper";
import { useNavigation } from "@react-navigation/native"

export default function Card(props) {
  const { character } = props;
  const navigation = useNavigation()
  const goToPersonaje = () => {
    navigation.navigate("Detail", {
      id: character.id,
      name: character.name,
      status: character.status,
      species: character.species,
      type: character.type,
      image: character.image,
      gender: character.gender,
      origin: character.origin.name,
    })
  }

  return (
    <TouchableOpacity onPress={goToPersonaje}>
      <View style={styles.cardContainer}>
        <Avatar.Image size={70} source={{ uri: character.image }} />
        <View style={styles.contentext}> 
          <Text style={styles.cardTitle}>{character.name}</Text>
          <Text style={styles.cardText}>Especie: {character.species} </Text>
        </View>
        <Text style={styles.cardTextSecondary}>#0{character.id} </Text>
      </View>
    </TouchableOpacity>
  );
}
