import { View, ImageBackground, StyleSheet, Text } from "react-native";
import React from "react";
import { TextInput, Button } from "react-native-paper";
import { useFormik } from "formik";
import { useNavigation } from "@react-navigation/native";
import Toast from "react-native-root-toast";
import { globalStyles } from "../../../styles";
import { useAuth } from "../../../hooks/useAuth";
import { initialValues, validationSchema } from "./ChangeUsernameValidate";
import { usersController } from "../../../api/users";

export default function ChangeUsername(props) {
  const { user, updateUser } = useAuth();
  const navigation = useNavigation();
  
  // console.log(user)

  const formik = useFormik({
    initialValues: initialValues(user.username),
    validationSchema: validationSchema(),
    validateOnChange: false,
    onSubmit: async (formData) => {
      // console.log(formData);
      try {
        await usersController.update(user.id, formData);
        updateUser("username", formData.username);
        navigation.goBack();
        Toast.show("Email actualizado correctamente", {
          position: Toast.positions.TOP,
        });
      } catch (error) {
        console.log(error);
        Toast.show("Error al actualizar el nombre o apellido", {
          position: Toast.positions.TOP,
        });
      }
    },
  });

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../../assets/img/fondo.jpg")}
        style={styles.fondo}
      >
        <View>
          <TextInput
            label={"Username"}
            style={globalStyles.form.input}
            onChangeText={(text) => formik.setFieldValue("username", text)}
            value={formik.values.username}
            error={formik.errors.username}
          />
          <Button
            mode="contained"
            style={globalStyles.form.btnSucces}
            onPress={formik.handleSubmit}
          >
            Guardar
          </Button>
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

  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#70d208",
    textAlign: "center",
    marginTop: 40,
    marginBottom: 10,
  },
});
