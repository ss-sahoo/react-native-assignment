import { Button, FlatList, ImageBackground, Text, View } from "react-native";
import React, { useState } from "react";

import { BlurView } from "expo-blur";
import backgroundImage from "../../assets/background-image.png";
import { styles } from "./Styles";

export default function NewScreen({ route }) {
  const { cardsData } = route.params;

  const [sortedCardsData, setSortedCardsData] = useState(cardsData);
  const [sortBy, setSortBy] = useState(null);

  const formatDate = (date) => {
    if (!date) return "";
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  const sortByDate = () => {
    const sortedData = [...cardsData].sort((a, b) => a.date - b.date);
    setSortedCardsData(sortedData);
    setSortBy("date");
  };

  const sortByDescriptionLength = () => {
    const sortedData = [...cardsData].sort((a, b) => {
      if (a.description && b.description) {
        return b.description.length - a.description.length;
      } else if (!a.description && b.description) {
        return 1;
      } else if (a.description && !b.description) {
        return -1;
      } else {
        return 0;
      }
    });
    setSortedCardsData(sortedData);
    setSortBy("description");
  };

  const renderItem = ({ item }) => (
    <BlurView intensity={90} style={styles.cardBlur}>
      <View style={[styles.card, styles.cardStyle]}>
        <Text style={styles.cardTitle}>
          Name: <Text style={styles.cardText}>{item.name}</Text>
        </Text>
        <Text style={styles.cardTitle}>
          Description: <Text style={styles.cardText}>{item.description}</Text>
        </Text>
        <Text style={styles.cardTitle}>
          Date:{" "}
          <Text style={styles.cardText}>
            {item.date ? formatDate(item.date) : ""}
          </Text>
        </Text>
      </View>
    </BlurView>
  );

  const filteredCardsData = sortedCardsData.filter(
    (cardData) =>
      cardData.name !== "" && cardData.description !== "" && cardData.date
  );

  return (
    <ImageBackground source={backgroundImage} style={styles.background}>
      <View style={styles.container}>
        <View style={styles.buttonContainer}>
          <View style={styles.buttonWrapper}>
            <Button
              title="Sort by Date"
              onPress={sortByDate}
              disabled={sortBy === "date"}
              color="#4CAF50"
            />
          </View>
          <View style={styles.buttonWrapper}>
            <Button
              title="Sort by Description Length"
              onPress={sortByDescriptionLength}
              disabled={sortBy === "description"}
              color="#4CAF50"
            />
          </View>
        </View>
        <FlatList
          data={filteredCardsData}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
          numColumns={2}
          contentContainerStyle={styles.flatListContent}
        />
      </View>
    </ImageBackground>
  );
}
