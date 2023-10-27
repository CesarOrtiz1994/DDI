import { View, Text, SafeAreaView, FlatList, ImageBackground } from 'react-native'
import React from 'react'
import Card from '../components/Card/Card';
import { styles } from '../styles/HomeScreen.styles'
import { ActivityIndicator } from 'react-native-paper';


export default function HomeScreen(props) {
  const { characters } = props;
  const { title } = props;
  const { loadMoreData } = props;

  const loadMore = () => {
    loadMoreData();
  }

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
        onEndReached={loadMore}
        onEndReachedThreshold={0.1}
        ListFooterComponent={
          <ActivityIndicator size="large" color='#79B543' />
        }
      />
      {/* el 0.1 es para decirle un antes del final se refiere  que antes de qu ellege al final ya esta renderisando */}
    </SafeAreaView>
    </ImageBackground>
  )
}