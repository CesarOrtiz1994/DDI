import { View, Text, SafeAreaView, FlatList, ImageBackground } from 'react-native'
import React from 'react'
import Card from '../components/Card/Card';
import { styles } from '../styles/HomeScreen.styles'


export default function HomeScreen(props) {
  const { characters } = props;
  const { title } = props;

  return (
    <ImageBackground source={require('../assets/img/fondo.jpg')} resizeMode="cover" style={styles.fondo}>
    <SafeAreaView>
    <Text style={styles.title}>
        {title}
    </Text>

      <FlatList
        data={characters}
        showsVerticalScrollIndicator={false}
        keyExtractor={(characters) => String(characters.id)}
        renderItem={({ item }) => (
          <Card character={item} />
        )}
      />
    </SafeAreaView>
    </ImageBackground>
  )
}