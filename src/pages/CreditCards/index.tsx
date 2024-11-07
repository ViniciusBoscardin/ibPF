import React from "react";
import { CreditCard } from "@/src/components/Credit-Card";
import { View, StyleSheet } from "react-native";

export default function CreditCards() {
  return (
    <>
      <View style={styles.container}>
        <CreditCard />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "whitesmoke",
    justifyContent: "center",
    padding: 40,
  },
});
