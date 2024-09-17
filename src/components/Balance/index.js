import { View, Text, StyleSheet } from "react-native";
import React from "react";

export default function Balance() {
  return (
    <View style={styles.container}>
      <View style={styles.item}>
        <Text style={styles.itemTitle}>Saldo</Text>
        <View styles={styles.content}>
          <Text style={styles.currencySymbol}>R$</Text>
          <Text style={styles.balance}>15.000,00</Text>
        </View>
      </View>

      <View style={styles.item}>
        <Text style={styles.itemTitle}>Gastos</Text>
        <View styles={styles.content}>
          <Text style={styles.currencySymbol}>R$</Text>
          <Text style={styles.balance}>420,00</Text>
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
    borderRadius: 6,
    paddingTop: 16,
    paddingBottom: 16,
    zIndex: 99,
  },
  content: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "red",
  },
  item: {},
  itemTitle: {
    fontSize: 16,
    color: "#A5A5A5",
  },
  currencySymbol: {
    fontSize: 16,
  },
  balance: {
    fontSize: 24,
    fontWeight: "bold",
  },
});
