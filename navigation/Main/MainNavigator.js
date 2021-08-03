import React, { useEffect, useState } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import FavsNavigator from "./FavsNavigator";
import HomeNavigator from "./HomeNavigator";
import UserNavigator from "./UserNavigator";
import Icons from "react-native-vector-icons/Ionicons";
import { BootomBarStyle } from "../../constants/Styles";
import { useSelector, useDispatch } from "react-redux";
import { loadUser } from "../../store/actions/user.actions";

const MainBottomTab = createBottomTabNavigator();

const MainNavigator = () => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const user = useSelector((state) => state.user);

  const [userLoading, setUserLoading] = useState(false);

  useEffect(() => {
    if (user.email === null && !userLoading) {
      setUserLoading(true);
      const fetchUser = async () => {
        await dispatch(loadUser(auth.user, auth.token));
        setUserLoading(false);
      };
      fetchUser();
    }
  }, [user]);

  return (
    <MainBottomTab.Navigator
      initialRouteName="HomeStack"
      tabBarOptions={{
        ...BootomBarStyle,
      }}
    >
      <MainBottomTab.Screen
        name="FavsStack"
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
        component={FavsNavigator}
      />
      <MainBottomTab.Screen
        name="HomeStack"
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
        component={HomeNavigator}
      />
      <MainBottomTab.Screen
        name="UserStack"
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
        component={UserNavigator}
      />
    </MainBottomTab.Navigator>
  );
};

export default MainNavigator;
