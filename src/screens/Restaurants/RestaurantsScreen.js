import React from "react";
import {View, Text} from  "react-native";
import { Button } from '@rneui/base';
import {screen} from "../../utils/screenName";
const RestaurantsScreen=(props) => {
    const{navigation} =props;
    const goToAddRestaurant=()=>{
        // console.log("Ir a creacion de restaurante");
        navigation.navigate(screen.restaurants.addRestaurant);
        //navigarion.navigate(screen.acount.tab, {screen:screen.account. account});
    };
    return(
        <View>
            <Text style ={{
      textAlign:'center',
      fontSize: 25 ,
      color:"#FA4727",
      top: -9
    }}>Estamos en la screen de Restaurantes</Text>
            <Button
            title="Crear Restaurante" 
            onPress={goToAddRestaurant}/>      
        </View>
    );
};

export default RestaurantsScreen;