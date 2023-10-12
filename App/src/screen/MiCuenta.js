
import { View, Text, ScrollView, StyleSheet } from 'react-native'
import React from 'react'
import { Avatar, Button } from 'react-native-paper';
import { useAuth } from '../hooks/useAuth';

export default function MiCuenta() {
    const { user, logout } = useAuth();
    console.log(user);
  return (
    <View style={styles.container}>
        <View style={styles.header}>
        </View>
        <ScrollView>
            <View style={styles.mainContainer}>
                <Avatar.Image size={100} source={require('../assets/img/person1.jpeg')} />       
                <Text> {user.username}</Text>      
                <Text> {user.email}</Text>
                <Button onPress={logout} > 
                    Cerrar sesión
                </Button>   
            </View>
        </ScrollView>
        
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