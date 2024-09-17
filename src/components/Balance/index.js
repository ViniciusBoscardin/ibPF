import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { Feather } from "@expo/vector-icons";

export default function Balance({ saldo, gastos }) {
  const [showBalance, setShowBalance] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.item}>
        <Text style={styles.itemTitle}>Saldo</Text>
        <TouchableOpacity
          style={styles.content}
          onPress={() => setShowBalance(!showBalance)}
        >
          <Text style={styles.currencySymbol}>R$</Text>
          <Text style={styles.balance}>
            {showBalance ? (
              saldo
            ) : (
              <Feather name="eye-off" size={24} color="#a5a5a5" />
            )}
          </Text>
          <Text> </Text>
          {showBalance ? (
            <Feather name="eye" size={24} color="#a5a5a5" />
          ) : null}
        </TouchableOpacity>
      </View>

      <View style={styles.item}>
        <Text style={styles.itemTitle}>Gastos</Text>
        <View style={styles.content}>
          <Text style={styles.currencySymbol}>R$</Text>
          <Text style={styles.expenses}>{gastos}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingStart: 18,
    paddingEnd: 18,
    marginTop: -24,
    marginStart: 14,
    marginEnd: 14,
    borderRadius: 4,
    paddingTop: 22,
    paddingBottom: 22,
    zIndex: 99,
  },
  itemTitle: {
    fontSize: 20,
    color: "#A5A5A5",
  },
  content: {
    flexDirection: "row",
    alignItems: "center",
  },
  item: {},

  currencySymbol: {
    color: "#A5A5A5",
    marginRight: 6,
  },
  balance: {
    fontSize: 22,
    color: "#2ecc71",
    fontWeight: "bold",
  },
  expenses: {
    fontSize: 22,
    color: "#e74c3c",
    fontWeight: "bold",
  },
});
