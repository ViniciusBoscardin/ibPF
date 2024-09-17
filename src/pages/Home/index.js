import Header from "../../components/Header";
import Balance from "../../components/Balance";
import Movements from "../../components/Movements";
import Actions from "../../components/Actions";
import { Text, View, StyleSheet, FlatList } from "react-native";

const list = [
  {
    id: 1,
    label: "Conta de Luz",
    value: "120,00",
    date: "10/10/2020",
    type: 0, // expense
  },
  {
    id: 2,
    label: "Conta de Água",
    value: "80,00",
    date: "10/10/2020",
    type: 0, // expense
  },
  {
    id: 3,
    label: "Salário",
    value: "7.000,00",
    date: "10/10/2020",
    type: 1, // income
  },
  {
    id: 4,
    label: "Pix",
    value: "320,00",
    date: "10/10/2020",
    type: 1, // expense
  },
  {
    id: 5,
    label: "Conta de Internet",
    value: "99,00",
    date: "10/10/2020",
    type: 0, // expense
  },
  {
    id: 6,
    label: "Salário",
    value: "7.000,00",
    date: "10/10/2020",
    type: 1, // income
  },
];

export default function Home() {
  return (
    <View style={styles.container}>
      <Header name="Vinícius Boscardin" />

      <Balance saldo="15.956,00" gastos="420,00" />

      <Actions />

      <Text style={styles.title}>Últimas Movimentações</Text>

      <FlatList
        style={styles.list}
        data={list}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => <Movements data={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fafafa",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    margin: 14,
  },
  list: {
    marginStart: 14,
    marginEnd: 14,
  },
});
