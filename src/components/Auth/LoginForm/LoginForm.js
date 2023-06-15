import { View, Text } from "react-native";
import React, { useState } from "react";
import { Input, Icon, Button } from "@rneui/themed";
import { styles } from "./LoginForm.styles";
import { useNavigation } from "@react-navigation/native";
import { useFormik } from "formik";
import { initialValues } from "./LoginForm.data";
import { validationSchema } from "./LoginForm.data";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { Toast } from "react-native-toast-message";
import{screen} from "../../../utils/screenName";

const LoginForm = () => {
  const navigation = useNavigation();
  const [showPasword, setShowPasword] = useState(false);
  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: validationSchema(),
    validateOnChange: false,
    onSubmit: async (formValue) => {
      // console.log(formValue);
      try{
        const auth=getAuth();
        await signInWithEmailAndPassword(
        auth,
        formValue.email,
        formValue.password
        );
        navigation.navigate(screen.account.account)
      }catch(error){
        Toast.show({
          type:"error",
          postion:"bottom",
          text1:"Usuario o contraseña incorrecta",
          text2:"Intentelo de nuevo"
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
        placeholder="Correo electrónico"
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
            name={showPasword ? "eye-off-outline" : "eye-outline"}
            iconStyle={styles.icon}
            onPress={showHiddenPasword}
          />
        }
        onChangeText={(text) => formik.setFieldValue("password", text)}
        errorMessage={formik.errors.password}
      />

      <Button title="Iniciar sesión"
      containerStyle={styles.btnContainer}
      buttonStyle={styles.btnLogin}
      onPress={formik.handleSubmit}
      loading={formik.isSubmitting} />
      
    </View>
  );
};

export default LoginForm;