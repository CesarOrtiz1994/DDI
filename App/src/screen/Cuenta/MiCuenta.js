import { View, Text, ScrollView, StyleSheet, Alert, ImageBackground } from "react-native";
import React from "react";
import { Avatar, Button } from "react-native-paper";
import { useAuth } from "../../hooks/useAuth";
import Menu from "../../components/Menu/Menu";

export default function MiCuenta() {
  const { user, logout } = useAuth();

  const logoutAlert = () => {
    Alert.alert(
      "Cerrar sesión",
      "¿Estas seguro de cerrar sesión?",
      [
        {
          text: "Cerrar sesion",
          onPress: () => logout(),
        },
        {
          text: "Cancelar",
          style: "cancel",
        },
      ],
      { cancelable: false }
    );
  }

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../assets/img/fondo.jpg")}
        style={styles.fondo}
      >
      <View style={styles.header}>
        <Text style={styles.title}>Bievenido</Text>
        <Text style={styles.title1}>
          {user.firstname && user.lastname
            ? `${user.firstname} ${user.lastname}`
            : user.email}
        </Text>
      </View>

      <View style={styles.mainContainer}>
        <Menu />
        <Button icon="logout" mode="contained" onPress={logoutAlert}>Cerrar sesión</Button>
      </View>
      </ImageBackground>

      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  fondo: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 30,
  },
  header: {
    flexDirectio: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
  },
  mainContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  footer: {
    flexDirection: "row",
    padding: 10,
    backgroundColor: "blue",
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#70d208",
    textAlign: "center",
    marginTop: 40,
    marginBottom: 10,
  },
  title1: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#70d208",
    textAlign: "center",
  },
});
