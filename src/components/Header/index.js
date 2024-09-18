import React from "react";
import { View, Text, TouchableOpacity, StatusBar } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";

const statusBarHeight = StatusBar.currentHeight
  ? StatusBar.currentHeight + 22
  : 64;

export default function Header({ name }) {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.username}>{name}</Text>

        <TouchableOpacity style={styles.button}>
          <Feather
            name="user"
            size={24}
            color="#fff"
            onPress={() => {
              navigation.navigate("Welcome");
            }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = {
  container: {
    backgroundColor: "#229c93",
    paddingTop: statusBarHeight,
    flexDirection: "row",
    paddingStart: 16,
    paddingEnd: 16,
    paddingBottom: 44,
  },
  content: {
    flex: 1,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  username: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#fff",
  },
  button: {
    width: 44,
    height: 44,
    backgroundColor: "rgba(255, 255, 255, 0.3)",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 44 / 2,
  },
};
