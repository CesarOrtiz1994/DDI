import { View, Text } from "react-native"
import React from "react"
import { styles } from "./CharacterDetail.styles"
import { Avatar, IconButton } from "react-native-paper"
import Favoritos from "../../components/Favoritos/Favoritos"

export default function CharacterDetail(props) {
  const {
    navigation,
    route: { params },
  } = props

  return (
    <View style={styles.container}>

      <IconButton
        icon="arrow-left"
        color="#70d208"
        size={30}
        onPress={() => navigation.goBack()}
        style={styles.back}
      />


      <Avatar.Image
        size={250}
        source={{ uri: params.image }}
        style={styles.image}
      />
      <Text style={styles.title}> {params.name}</Text>
      <Text style={styles.title}> {params.species}</Text>
      <Text style={styles.title}> {params.status}</Text>
      <Text style={styles.title}> {params.type}</Text>
      <Text style={styles.title}> {params.gender}</Text>
      <Text style={styles.title}> {params.origin}</Text>
      <Favoritos id={params.id} />
    </View>
  )
}