import { View, Image, Text, ScrollView, StyleSheet, KeyboardAvoidingView, Platform, ImageBackground } from 'react-native'
import React, { useState } from 'react'
import Login from '../../components/Login/Login';
import Register from '../../components/Register/Register';
import { styles } from './AuthScreen.style'
// import font from '../../constant/font'
// import Color from '../../constant/Color'
// import  ButtonSocial  from '../../components/ButtonSocial'
import  logo from '../../assets/img/pngegg(2).png'



export default function AuthScreen() {

  const [showLogin, setShowLogin] = useState(true)

  return (
    <View style={styles.container}>
      <ImageBackground source={require('../../assets/img/fondo.jpg')} resizeMode="cover" style={styles.fondo}>
        
        <View style={styles.header}>
        <Image source={ logo } style={styles.image} />
        </View>

        <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "heigh"} >
            {showLogin ? <Login setShowLogin={setShowLogin} /> : <Register setShowLogin={setShowLogin}/>}
        </KeyboardAvoidingView>
      </ImageBackground>
    </View>
  )
}