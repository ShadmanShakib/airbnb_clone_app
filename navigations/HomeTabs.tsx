import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Explore, Inbox, Profile, Trips, Wishlists } from "../screens/user";
import { Feather, AntDesign, SimpleLineIcons } from "@expo/vector-icons";
import { Logo } from "../components/icons";
const Tab = createBottomTabNavigator();
export default function HomeTab() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Explore"
        component={Explore}
        options={{
          headerShown: false,
          tabBarActiveTintColor: "#FF385c",
          tabBarIcon: ({ focused }) => (
            <Feather
              name="search"
              color={focused ? "#FF385C" : "grey"}
              size={24}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Wishlists"
        component={Wishlists}
        options={{
          headerShown: false,
          tabBarActiveTintColor: "#FF385c",
          tabBarIcon: ({ focused }) => (
            <AntDesign
              color={focused ? "#FF385C" : "grey"}
              name="hearto"
              size={24}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Trips"
        component={Trips}
        options={{
          headerShown: false,
          tabBarActiveTintColor: "#FF385c",
          tabBarIcon: ({ focused }) => (
            <Logo color={focused ? "#FF385C" : "grey"} />
          ),
        }}
      />
      <Tab.Screen
        name="Inbox"
        component={Inbox}
        options={{
          headerShown: false,
          tabBarActiveTintColor: "#FF385c",
          tabBarIcon: ({ focused }) => (
            <Feather
              color={focused ? "#FF385C" : "grey"}
              name="message-square"
              size={24}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Log In"
        component={Profile}
        options={{
          headerShown: false,
          tabBarActiveTintColor: "#FF385c",
          tabBarIcon: ({ focused }) => (
            <SimpleLineIcons
              color={focused ? "#FF385C" : "grey"}
              name="user"
              size={24}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
