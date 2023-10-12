import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { styles } from "./Card.styles";
import { Avatar } from "react-native-paper";

export default function Card(props) {
  const { character } = props;
  const goToPersonaje = () => {
    console.log("Conose mas del personaje: ${character.name}");
    console.log(character.image);
  };

  return (
    <TouchableOpacity onPress={goToPersonaje}>
      <View style={styles.cardContainer}>
        <Avatar.Image size={70} source={{ uri: character.image }} />
        <View style={styles.contentext}> 
          <Text style={styles.cardTitle}> {character.name} </Text>
          <Text style={styles.cardText}>Especie: {character.species} </Text>
        </View>
        <Text style={styles.cardTextSecondary}>#0{character.id} </Text>
      </View>
    </TouchableOpacity>
  );
}
