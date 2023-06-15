import { View} from 'react-native'
import { Image } from '@rneui/base'
import React from 'react'
import { styles } from './RegisterScreen.styles'
import RegisterForm from '../../../components/Auth/RegisterForm/RegisterForm'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
const RegisterScreen=()=> {
  return (
    <KeyboardAwareScrollView>
      <Image
    source={require("../../../../assets/img/5-tenedores-letras-icono-logo.png")}
    style={styles.image}
    />
    <View style={styles.content}>
      <RegisterForm/>
    </View>
    </KeyboardAwareScrollView>
  )
}
export default RegisterScreen;