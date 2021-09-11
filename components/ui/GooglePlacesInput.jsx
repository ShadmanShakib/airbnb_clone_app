import React from "react";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { GOOGLE_API_KEY } from "@env";
const GooglePlacesInput = () => {
  return (
    <GooglePlacesAutocomplete
      placeholder="Search Distination"
      enablePoweredByContainer={false}
      debounce={400}
      nearbyPlacesAPI="GooglePlacesSearch"
      onPress={(data, details = null) => {
        // 'details' is provided when fetchDetails = true
      }}
      query={{
        key: { GOOGLE_API_KEY },

        language: "en",
      }}
    />
  );
};

export default GooglePlacesInput;
