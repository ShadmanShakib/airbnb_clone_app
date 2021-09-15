import * as Linking from "expo-linking";
import { LinkingOptions } from "@react-navigation/native";
import { RootStackParamList } from "../types";
const linking: LinkingOptions<RootStackParamList> = {
  prefixes: [Linking.makeUrl("/")],
  config: {
    screens: {
      Root: {
        screens: {
          Explore: {
            screens: {
              ExploreScreen: "explore",
            },
          },
          Wishlists: {
            screens: {
              WishlistsScreen: "wishlists",
            },
          },
          Trips: {
            screens: {
              TripsScreen: "trips",
            },
          },
          Inbox: {
            screens: {
              InboxScreen: "inbox",
            },
          },
          Profile: {
            screens: {
              ProfileScreen: "profile",
            },
          },
        },
      },
      AuthModal: "auth",
      EmailModal: "email",
      EnterPassword: "password",
      Flexible: "flexible",
      SingleLoaction: "single",
    },
  },
};

export default linking;
