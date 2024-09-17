import Header from "../../components/Header";
import Balance from "../../components/Balance";
import { Text, View, StyleSheet } from "react-native";

export default function Home() {
  return (
    <View style={styles.container}>
      <Header name="Vinícius Boscardin" />

      <Balance />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fafafa",
  },
});
