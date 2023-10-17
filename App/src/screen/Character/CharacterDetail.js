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
  // console.log(params.id, params.name)

  return (
    <View style={styles.container}>
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