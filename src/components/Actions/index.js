import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";

export default function Actions() {
  return (
    <ScrollView
      style={styles.container}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
    >
      <TouchableOpacity styles={styles.actionButton}>
        <View style={styles.areaButton}>
          <AntDesign name="addfolder" size={26} color="#000" />
        </View>
        <Text style={styles.labelButton}>Entradas</Text>
      </TouchableOpacity>

      <TouchableOpacity styles={styles.actionButton}>
        <View style={styles.areaButton}>
          <AntDesign name="tagso" size={26} color="#000" />
        </View>
        <Text style={styles.labelButton}>Compras</Text>
      </TouchableOpacity>

      <TouchableOpacity styles={styles.actionButton}>
        <View style={styles.areaButton}>
          <AntDesign name="creditcard" size={26} color="#000" />
        </View>
        <Text style={styles.labelButton}>Carteira</Text>
      </TouchableOpacity>

      <TouchableOpacity styles={styles.actionButton}>
        <View style={styles.areaButton}>
          <AntDesign name="barcode" size={26} color="#000" />
        </View>
        <Text style={styles.labelButton}>Boletos</Text>
      </TouchableOpacity>

      <TouchableOpacity styles={styles.actionButton}>
        <View style={styles.areaButton}>
          <AntDesign name="setting" size={26} color="#000" />
        </View>
        <Text style={styles.labelButton}>Conta</Text>
      </TouchableOpacity>

      <TouchableOpacity styles={styles.actionButton}>
        <View style={styles.areaButton}>
          <AntDesign name="pushpino" size={26} color="#000" />
        </View>
        <Text style={styles.labelButton}>Limites</Text>
      </TouchableOpacity>

      <TouchableOpacity styles={styles.actionButton}>
        <View style={styles.areaButton}>
          <AntDesign name="smileo" size={26} color="#000" />
        </View>
        <Text style={styles.labelButton}>Cashback</Text>
      </TouchableOpacity>
      <TouchableOpacity styles={styles.actionButton}>
        <View style={styles.areaButton}>
          <AntDesign name="smileo" size={26} color="#000" />
        </View>
        <Text style={styles.labelButton}>Cashback</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    maxHeight: 84,
    marginBottom: 14,
    marginRight: 14,
    marginTop: 18,
    paddingEnd: 14,
    paddingStart: 14,
  },
  actionButton: {
    alignItems: "center",
    marginRight: 32,
  },
  areaButton: {
    width: 50,
    height: 50,
    backgroundColor: "#ecf0f1",
    borderRadius: 30,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    marginRight: 10,
  },
  labelButton: {
    marginTop: 4,
    fontWeight: "bold",
    fontSize: 12,
    textAlign: "center",
    left: -5,
  },
});
