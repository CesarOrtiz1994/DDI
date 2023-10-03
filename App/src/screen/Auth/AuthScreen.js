import { View, Image, Text, ScrollView, StyleSheet, KeyboardAvoidingView, Platform } from 'react-native'
import React, { useState } from 'react'
import Login from '../../components/Login/Login';
import Register from '../../components/Register/Register';
import { styles } from './AuthScreen.style'
// import font from '../../constant/font'
// import Color from '../../constant/Color'
// import  ButtonSocial  from '../../components/ButtonSocial'
import  logo from '../../assets/img/images.jpeg'



export default function AuthScreen() {

  const [showLogin, setShowLogin] = useState(false)

  return (
    <View style={styles.container}>
        
        <Image source={ logo } style={styles.image} />

        <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "heigh"} >
            {showLogin ? <Login setShowLogin={setShowLogin} /> : <Register setShowLogin={setShowLogin}/>}
        </KeyboardAvoidingView>
    </View>
  )
}