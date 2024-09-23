import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export const TabBar = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.containerTabBar}>
        <TouchableOpacity
          style={styles.tabItem}
          onPress={() => {
            navigation.navigate("Welcome");
          }}
        >
          <Ionicons name="home" size={25} color="white" />
          <Text style={styles.tabText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabItem}>
          <Ionicons name="search" size={25} color="white" />
          <Text style={styles.tabText}>Buscar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabItem}>
          <Ionicons name="add-circle" size={25} color="white" />
          <Text style={styles.tabText}>Adicionar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabItem}>
          <Ionicons name="heart" size={25} color="white" />
          <Text style={styles.tabText}>Favoritos</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabItem}>
          <Ionicons name="people" size={25} color="white" />
          <Text style={styles.tabText}>Perfil</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "flex-end",
  },
  containerTabBar: {
    flexDirection: "row",
    backgroundColor: "#229c93",
    justifyContent: "space-around",
    padding: 10,
    borderTopWidth: 1,
    borderTopColor: "lightgray",
  },
  tabItem: {
    alignItems: "center",
  },
  tabText: {
    color: "white",
    fontWeight: "bold",
  },
});
