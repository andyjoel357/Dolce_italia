import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { screen } from "../utils/screenName";
import FavoritesScreen from "../screens/FavoritesScreen";

const Stack =createNativeStackNavigator();

const FavoritesStack=()=>{
    return(
        <Stack.Navigator>
            <Stack.Screen
            name={screen.favorites.favorites}
            component={FavoritesScreen}
            options={{title:"Favorites:"}}/>
        </Stack.Navigator>
    );
}
export default FavoritesStack;