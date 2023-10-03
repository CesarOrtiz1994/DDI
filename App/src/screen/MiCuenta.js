
import { View, Text, ScrollView, StyleSheet } from 'react-native'
import React from 'react'
import { Avatar } from 'react-native-paper';

export default function MiCuenta() {
  return (
    <View style={styles.container}>
        <View style={styles.header}>
          <Text>hOLA</Text>
          <Avatar.Image size={50} source={require('../assets/img/person1.jpeg')} />
        </View>
        <ScrollView>
            <View style={styles.mainContainer}>
                <Text>AccountScreen</Text>
                
            </View>
        </ScrollView>
        <View style={styles.footer}>

        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header : {
        flexDirectio: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        backgroundColor: 'red',
    },
    mainContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    footer: {
        flexDirection: 'row',
        padding: 10,
        backgroundColor: 'blue'
    }
});