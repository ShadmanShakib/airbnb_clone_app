import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { RootTabParamList } from "../types";
import {
  ExploreScreen,
  InboxScreen,
  ProfileScreen,
  TripsScreen,
  WishlistsScreen,
} from "../screens/user";
import { Feather, AntDesign, SimpleLineIcons } from "@expo/vector-icons";
import { Logo } from "../components/icons";
const Tab = createBottomTabNavigator<RootTabParamList>();
export default function RootTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Explore"
      screenOptions={{
        tabBarActiveTintColor: "black",
      }}
    >
      <Tab.Screen
        name="Explore"
        component={ExploreScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <Feather
              name="search"
              color={focused ? "#FF385C" : "gray"}
              size={24}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Wishlists"
        component={WishlistsScreen}
        options={{
          headerShown: false,
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
        component={TripsScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <Logo color={focused ? "#FF385C" : "grey"} />
          ),
        }}
      />
      <Tab.Screen
        name="Inbox"
        component={InboxScreen}
        options={{
          headerShown: false,
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
        name="Profile"
        component={ProfileScreen}
        options={{
          headerShown: false,
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
