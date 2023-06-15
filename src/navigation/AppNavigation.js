import { Icon } from "@rneui/themed";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import RankingtStack from "./RankingStacks";
import { screen } from "../utils/screenName";
import RestaurantsStack from "./RestaurantsStack";
import FavoritesStack from "./FavoriteStacks";
import AccountStack from "./AccountStacks";
import SearchStack from "./SearchStacks";
// crear una instancia

const Tab = createBottomTabNavigator();

export const AppNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown : false,
        tabBarActiveTintColor: "#02FFCF",
        tabBarInactiveTintColor: "#DA6509",
        tabBarIcon: ({ color, size }) => screenOptions(route, color, size),
      })}
    >
      <Tab.Screen
        name={screen.restaurants.tab}
        component={RestaurantsStack}
        options={{ title: "Restaurantes",}}
      />
      <Tab.Screen
        name={screen.favorites.tab}
        component={FavoritesStack}
        options={{ title: "Favorites",  }}
      />
      <Tab.Screen
        name={screen.ranking.tab}
        component={RankingtStack}
        options={{ title: "Ranking",  }}
      />
      <Tab.Screen
        name={screen.search.tab}
        component={SearchStack}
        options={{ title: "Buscar",  }}
      />
      <Tab.Screen
        name={screen.account.tab}
        component={AccountStack}
        options={{ title: "Usuarios", }}
      />
    </Tab.Navigator>
  );
};

const screenOptions = (route, color, size) => {
  let iconName;

  if (route.name == screen.restaurants.tab) {
    iconName = "compass-outline";
  }
  if (route.name == screen.favorites.tab) {
    iconName = "heart-outline";
  }
  if (route.name == screen.ranking.tab) {
    iconName = "star-outline";
  }

  if (route.name == screen.search.tab) {
    iconName = "magnify";
  }
  if (route.name == screen.account.tab) {
    iconName = "home-outline";
  }
  return (
    <Icon type="material-community" name={iconName} color={color} size={size} />
  );
};
