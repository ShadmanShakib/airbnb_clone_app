import * as Linking from "expo-linking";

export default {
  prefixes: [Linking.makeUrl("/")],
  config: {
    screens: {
      Welcome: "welcome",
      EnterName: "name",
      EnterEmail: "email",
      EnterPassword: "password",
    },
  },
};
