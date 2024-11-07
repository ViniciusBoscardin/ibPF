import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  card: {
    width: "100%",
    height: 200,
    backgroundColor: "black",
    borderRadius: 12,
    padding: 24,
    justifyContent: "space-between",
  },
  front: {},
  back: {
    backgroundColor: "#229c93",
  },
  circle: {
    width: 24,
    height: 24,
    borderRadius: 12,
  },
  logo: {
    width: "35%",
    height: 100,
    resizeMode: "contain",
    alignContent: "center",
  },
  header: {
    flexDirection: "row",
  },
});
