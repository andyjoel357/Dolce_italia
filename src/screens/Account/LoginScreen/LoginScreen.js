import { View, Text, ScrollView } from "react-native";
import { Image } from "@rneui/base";
import React from "react";
import { styles } from "./LoginScreen.styles";
import { useNavigation } from "@react-navigation/native";
import { screen } from "../../../utils/screenName";
import LoginForm from "../../../components/Auth/LoginForm/LoginForm";
const LoginScreen = () => {
  const navigation = useNavigation();
  const goToLogin = () => {
    navigation.navigate(screen.account.register);
  };
  return (
    <ScrollView>
      <Image
        source={require("../../../../assets/img/5-tenedores-letras-icono-logo.png")}
        style={styles.image}
      />
      <View style={styles.content}>
        <LoginForm/>
        <Text style={styles.textRegister}>
          ¿Aún no tienes una cuenta?{""}
        <Text style={styles.btnregister} onPress={goToLogin} >Regístrarse</Text>
        </Text>
      </View>
    </ScrollView>
  );
};
export default LoginScreen;
