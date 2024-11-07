import Header from "../../components/Header";
import Balance from "../../components/Balance";
import Movements from "../../components/Movements";
import Actions from "../../components/Actions";
import { Text, View, StyleSheet, FlatList } from "react-native";
import { TabBar } from "@/src/components/TabBar";
import usePosts from "@/src/hooks/usePosts";

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
  {
    id: 7,
    label: "Pix",
    value: "320,00",
    date: "10/10/2020",
    type: 1, // expense
  },
  {
    id: 8,
    label: "Pix",
    value: "320,00",
    date: "10/10/2020",
    type: 1, // expense
  },
  {
    id: 9,
    label: "Gasolina",
    value: "120,00",
    date: "10/10/2020",
    type: 0, // expense
  },
  {
    id: 10,
    label: "Cerveja",
    value: "80,00",
    date: "10/10/2020",
    type: 0, // expense
  },
  {
    id: 11,
    label: "Netflix",
    value: "7.000,00",
    date: "10/10/2020",
    type: 0, // expense
  },
  {
    id: 12,
    label: "Salário",
    value: "7.000,00",
    date: "10/10/2020",
    type: 1, // income
  },
  {
    id: 13,
    label: "Pix",
    value: "320,00",
    date: "10/10/2020",
    type: 1, // expense
  },
  {
    id: 14,
    label: "Conta de Internet",
    value: "99,00",
    date: "10/10/2020",
    type: 0, // expense
  },
  {
    id: 15,
    label: "Salário",
    value: "7.000,00",
    date: "10/10/2020",
    type: 1, // income
  },
  {
    id: 16,
    label: "Pix",
    value: "320,00",
    date: "10/10/2020",
    type: 1, // expense
  },
  {
    id: 17,
    label: "Pix",
    value: "320,00",
    date: "10/10/2020",
    type: 1, // expense
  },
  {
    id: 18,
    label: "Gasolina",
    value: "120,00",
    date: "10/10/2020",
    type: 0, // expense
  },
  {
    id: 19,
    label: "Cerveja",
    value: "80,00",
    date: "10/10/2020",
    type: 0, // expense
  },
  {
    id: 20,
    label: "Netflix",
    value: "7.000,00",
    date: "10/10/2020",
    type: 0, // expense
  },
];

export default function Home() {
  return (
    <View style={styles.container}>
      <Header name="Vinícius Boscardin" />

      <Balance saldo="15.956,00" gastos="420,00" />

      <View style={styles.containerBtn}>
        <Actions />
      </View>

      <Text style={styles.title}>Últimas Movimentações</Text>

      <FlatList
        style={styles.list}
        data={list}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => <Movements data={item} />}
      />
      <TabBar />
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
