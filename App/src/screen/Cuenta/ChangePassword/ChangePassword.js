import { View, ImageBackground, StyleSheet, Text } from "react-native";
import React from "react";
import { TextInput, Button } from "react-native-paper";
import { useFormik } from "formik";
import { useNavigation } from "@react-navigation/native";
import Toast from "react-native-root-toast";
import { globalStyles } from "../../../styles";
import { useAuth } from "../../../hooks/useAuth";
import { initialValues, validationSchema } from "./ChangePasswordValidate";
import { usersController } from "../../../api/users";

export default function ChangePassword(props) {
  const { user, updateUser } = useAuth();
  const navigation = useNavigation();

  // console.log(user)

  const formik = useFormik({
    initialValues: initialValues(user.password),
    validationSchema: validationSchema(),
    validateOnChange: false,
    onSubmit: async (formData) => {
      // console.log(formData);
      try {
        await usersController.update(user.id, formData);
        updateUser("password", formData.password);
        navigation.goBack();
        Toast.show("Contraseña actualizada correctamente", {
          position: Toast.positions.TOP,
        });
      } catch (error) {
        console.log(error);
        Toast.show("Error al actualizar la contraseña", {
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
            label="Contraseña"
            style={globalStyles.form.input}
            autoCapitalize="none"
            onChangeText={(text) => formik.setFieldValue("password", text)}
            value={formik.values.password}
            error={formik.errors.password}
          />
          <TextInput
            label="Confirmar contraseña"
            style={globalStyles.form.input}
            autoCapitalize="none"
            onChangeText={(text) =>
              formik.setFieldValue("confirmPassword", text)
            }
            value={formik.values.confirmPassword}
            error={formik.errors.confirmPassword}
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
