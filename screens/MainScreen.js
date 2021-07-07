import { getFocusedRouteNameFromRoute, NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react"
import { StyleSheet } from "react-native"
import Colors from "../constants/Colors"
import FavoriteScreen from "./MainScreen/FavoriteScreen"
import HomeScreen from "./MainScreen/HomeScreen";
import UserScreen from "./MainScreen/UserScreen"
import Icons from "react-native-vector-icons/Ionicons";

const MainScreen = () => {
  const AppStack = createStackNavigator();
  const MainTab = createBottomTabNavigator();

  function getHeaderTitle(route) {
    const routeName = getFocusedRouteNameFromRoute(route) ?? "Home";

    switch (routeName) {
      case "Home":
        return "Inicio";
      case "Favs":
        return "Favoritos";
      case "User":
        return "Usuario";;
    }
  }

  const AppStackNavigator = () => {
    return (
      <AppStack.Navigator
        initialRouteName="MainTab"
        screenOptions={({ route }) => ({
          headerTitle: getHeaderTitle(route),
          headerStyle: {
            backgroundColor:
              Platform.OS === "android" ? Colors.primary.dark : "",
          },
          headerTitleStyle: {
            fontFamily: "comfortaa",
          },
          headerTintColor:
            Platform.OS === "android" ? "white" : Colors.primary.dark,
        })}
      >
        <AppStack.Screen
          name="MainTab"
          options={{ title: "Proyecto CoderHouse" }}
          component={MainTabNavigator}
        />
      </AppStack.Navigator>
    );
  }

  const MainTabNavigator = () => {
    return (
      <MainTab.Navigator
        initialRouteName="Home"
        tabBarOptions={{
          activeTintColor: "white",
          inactiveTintColor: "white",
          tabStyle: {
            backgroundColor: Colors.primary.dark,
          },
          labelStyle: {
            fontFamily: "comfortaa",
          },
        }}
      >
        <MainTab.Screen
          name="Favs"
          options={{
            title: "Favoritos",
            tabBarIcon: ({ color, size, focused }) => (
              <Icons
                name={focused ? "heart" : "heart-outline"}
                size={size}
                color={color}
              />
            ),
          }}
          component={FavoriteScreen}
        />
        <MainTab.Screen
          name="Home"
          options={{
            title: "Inicio",
            tabBarIcon: ({ color, size, focused }) => (
              <Icons
                name={focused ? "home" : "home-outline"}
                size={size}
                color={color}
              />
            ),
          }}
          component={HomeScreen}
        />
        <MainTab.Screen
          name="User"
          options={{
            title: "Usuario",
            tabBarIcon: ({ color, size, focused }) => (
              <Icons
                name={focused ? "person" : "person-outline"}
                size={size}
                color={color}
              />
            ),
          }}
          component={UserScreen}
        />
      </MainTab.Navigator>
    );
  }


  return (
    <NavigationContainer>
      <AppStackNavigator />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    flexDirection: "column"
  },
  screens: {
    flex: 1,
    backgroundColor: Colors.secondary.light
  }
});

export default MainScreen;