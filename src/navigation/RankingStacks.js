import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { screen } from "../utils/screenName";
import RankingScreen from "../screens/RakingScreen";
const Stack = createNativeStackNavigator();

const RankingtStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={screen.ranking.ranking}
        component={RankingScreen}
        options={{ title: "Ranking" }}
      />
    </Stack.Navigator>
  );
};
export default RankingtStack;
