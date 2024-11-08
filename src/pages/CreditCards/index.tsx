import React from "react";
import { CreditCard, CARD_SIDE } from "@/src/components/Credit-Card";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { useSharedValue } from "react-native-reanimated";

export default function CreditCards() {
  const cardSide = useSharedValue(CARD_SIDE.front);

  function showFrontCard() {
    cardSide.value = CARD_SIDE.front;
  }

  function showBackCard() {
    cardSide.value = CARD_SIDE.back;
  }

  function handleFlipCard() {
    if (cardSide.value === CARD_SIDE.front) {
      showBackCard();
    } else {
      showFrontCard();
    }
  }

  return (
    <>
      <View style={styles.container}>
        <CreditCard cardSide={cardSide} />
        <TouchableOpacity style={styles.button} onPress={handleFlipCard}>
          <Text>Inverter</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "whitesmoke",
    justifyContent: "center",
    padding: 40,
  },
  button: {
    alignItems: "center",
    marginVertical: 20,
  },
});
