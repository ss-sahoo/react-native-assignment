import {
  FlatList,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";

import Card from "../../components/Card/Card";
import backgroundImage from "../../assets/background-image.png";
import { homeStyles } from "./HomeStyles";
import { useNavigation } from "@react-navigation/native";

export default function HomeScreen() {
  const [cardsData, setCardsData] = useState(Array(9).fill({}));
  const navigation = useNavigation();
  const [resetKey, setResetKey] = useState(0);

  const handleEraseAll = () => {
    setCardsData(Array(9).fill({}));
    setResetKey((prevKey) => prevKey + 1);
  };

  const handleNext = () => {
    const anyCardHasData = cardsData.some((cardData) => {
      return cardData.name && cardData.description && cardData.date;
    });
    if (anyCardHasData) {
      navigation.navigate("NewScreen", { cardsData });
    } else {
      console.log("No card has data saved");
    }
  };

  const updateCardData = (index, newData) => {
    const updatedCardsData = [...cardsData];
    updatedCardsData[index] = newData;
    setCardsData(updatedCardsData);
  };
  const anyCardHasData = cardsData.some((cardData) => {
    return cardData.name && cardData.description && cardData.date;
  });

  const renderCard = ({ item, index }) => (
    <Card
      key={`${index}-${resetKey}`}
      data={item}
      onUpdate={(newData) => updateCardData(index, newData)}
    />
  );

  return (
    <View style={homeStyles.container}>
      <ImageBackground source={backgroundImage} style={homeStyles.background}>
        <FlatList
          data={cardsData}
          renderItem={renderCard}
          keyExtractor={(item, index) => `${index}-${resetKey}`}
          contentContainerStyle={homeStyles.scrollView}
        />
        <View style={homeStyles.buttonContainer}>
          <TouchableOpacity
            style={[homeStyles.button, homeStyles.redButton]}
            onPress={handleEraseAll}
          >
            <Text style={homeStyles.buttonText}>Erase All</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              homeStyles.button,
              homeStyles.greenButton,
              !anyCardHasData && homeStyles.disabledButton,
            ]}
            onPress={handleNext}
            disabled={!anyCardHasData}
          >
            <Text
              style={[
                homeStyles.buttonText,
                !anyCardHasData && homeStyles.disabledButtonText,
              ]}
            >
              Next
            </Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
}
