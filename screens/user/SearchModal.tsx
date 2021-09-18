import React from "react";
import {
  Box,
  Text,
  Input,
  ScrollView,
  Button,
  FlatList,
  HStack,
} from "native-base";
import { API_KEY } from "../../constants";
import { NearbyData } from "../../constants";
import { NearbyCard } from "../../components/Cards";
import { LocationInput } from "../../components/ui";
import { Entypo } from "@expo/vector-icons";
interface IData {
  display_name: string;
}
export default function SearchModal() {
  const [loaction, setLoaction] = React.useState("");
  const [data, setData] = React.useState<null | IData[]>(null);
  const url = "https://api.locationiq.com/v1/autocomplete.php?key=";
  const fetchPlaces = () => {
    if (loaction.length > 3)
      fetch(url + API_KEY + "=" + loaction + "&limit=5")
        .then((res) => res.json())
        .then((data) => setData(data))
        .catch((err) => console.log(err));
  };
  React.useEffect(() => {
    setTimeout(fetchPlaces, 400);
  }, [loaction]);
  return (
    <Box pt="10" bg="white" h="100%">
      <Box px="6" mb="2">
        <Input
          px="3"
          placeholder="Where are you going?"
          onChangeText={(text) => setLoaction(text)}
          variant="unstyled"
        />
      </Box>

      <Box mb="6" h="1px" bg="gray.200" w="100%" />

      <Box px="6">
        <Text fontWeight="bold" fontSize="lg">
          GO ANYWHERE,ANYTIME
        </Text>
        <Button
          borderWidth="1px"
          borderColor="gray.300"
          borderRadius={30}
          my="3"
          py="4"
          shadow={8}
          bg="white"
          _text={{ color: "#3b07bb" }}
          onPress={() => console.log(data)}
        >
          I'm Flexible
        </Button>

        <ScrollView mt="6">
          <Text mb="3" fontWeight="bold">
            GETAWAYS NEARS YOU
          </Text>
          <FlatList
            pb="3"
            data={NearbyData}
            renderItem={NearbyCard}
            keyExtractor={(item) => item.id}
          />
        </ScrollView>
      </Box>
      {loaction.length > 0 && (
        <Box
          bg="white"
          mt="16"
          shadow={3}
          h="100%"
          width="100%"
          position="absolute"
        >
          {data && (
            <FlatList
              data={data}
              renderItem={({ item }) => {
                return (
                  <HStack h="10" px="6" mb="3" alignItems="center">
                    <Entypo name="location-pin" size={24} color="black" />
                    <Text ml="4">{item.display_name}</Text>
                  </HStack>
                );
              }}
              keyExtractor={(item) => item.place_id + item.osm_id}
            />
          )}
        </Box>
      )}
    </Box>
  );
}
