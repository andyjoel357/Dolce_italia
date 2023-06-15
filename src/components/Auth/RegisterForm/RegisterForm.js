import { View, Text } from "react-native";
import React, { useState } from "react";
import { Input, Icon, Button } from "@rneui/themed";
import { styles } from "./RegisterForm.styles";
import { useFormik } from "formik";
import { initialValues } from "./RegisterForm.data";
import { validationSchema } from "./RegisterForm.data";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigation } from "@react-navigation/native";
import { screen } from "../../../utils/screenName";
import { Toast } from "react-native-toast-message/lib/src/Toast";
const RegisterForm = () => {
  //
  const [showPasword, setShowPasword] = useState(false);
  const navigation = useNavigation();
  //hook
  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: validationSchema(),
    validateOnChange: false,
    onSubmit: async (formValue) => {
      // console.log("formulario");
      // console.log(formValue);
      try {
        const auth = getAuth();
        await createUserWithEmailAndPassword(
          auth,
          formValue.email,
          formValue.password
        );
        navigation.navigate(screen.account.account)
      } catch (error) {
        // console.log(error);
        Toast.show({
          type:"error",
          position: "bottom",
          text1:"Error al registrarse",
          text2:"Inténtalo de nuevo",
        })
       
      }
      

    },
  });
  const showHiddenPasword = () => {
    setShowPasword(!showPasword);
  };
  return (
    <View style={styles.content}>
      <Input
        placeholder="Correo electronico"
        containerStyle={styles.input}
        rightIcon={
          <Icon type="material-community" name="at" iconStyle={styles.icon} />
        }
        onChangeText={(text) => formik.setFieldValue("email", text)}
        errorMessage={formik.errors.email}
      />
      <Input
        placeholder="Password"
        containerStyle={styles.input}
        secureTextEntry={showPasword ? false : true}
        rightIcon={
          <Icon
            type="material-community"
            name={setShowPasword ? "lock-open-variant" : "lock"}
            iconStyle={styles.icon}
            onPress={showHiddenPasword}
          />
        }
        onChangeText={(text) => formik.setFieldValue("password", text)}
        errorMessage={formik.errors.password}
      />

      <Input
        placeholder="Password Confirm"
        containerStyle={styles.input}
        secureTextEntry={showPasword ? false : true}
        rightIcon={
          <Icon
            type="material-community"
            name={setShowPasword ? "eye-off-outline" : "eye-outline"}
            iconStyle={styles.icon}
            onPress={showHiddenPasword}
          />
        }
        onChangeText={(text) => formik.setFieldValue("confirmPasswor", text)}
        errorMessage={formik.errors.confirmPasswor}
      />
      <Button
        title="Unirse"
        containerStyle={styles.btnContainer}
        buttonStyle={styles.btnRegister}
        onPress={formik.handleSubmit}
        loading={formik.isSubmitting}
      />
    </View>
  );
};
export default RegisterForm;
