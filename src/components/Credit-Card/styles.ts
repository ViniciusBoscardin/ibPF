import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  card: {
    width: "100%",
    height: 200,
    backgroundColor: "#229c93",
    borderRadius: 12,
    padding: 24,
    justifyContent: "space-between",
  },
  front: {},
  back: {
    backgroundColor: "#197871",
  },
  circle: {
    width: 24,
    height: 24,
    borderRadius: 12,
    opacity: 0.9,
  },
  logo: {
    width: "35%",
    height: 100,
    resizeMode: "contain",
    alignContent: "center",
    position: "relative",
    bottom: 30,
    color: "white",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  name: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 116,
  },
  flag: {
    flexDirection: "row",
    gap: -12,
    position: "relative",
    zIndex: 1,
  },
  red: {
    backgroundColor: "#ff0000",
    left: 0,
  },
  orange: {
    backgroundColor: "#ff7f00",
    left: -10,
  },
  label: {
    color: "#dedede",
    fontSize: 14,
  },
  value: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});
