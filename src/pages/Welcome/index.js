import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Touchable,
  TouchableOpacity,
  Button,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import * as Animatable from "react-native-animatable";

export default function Welcome() {
  const [isClicked, setIsClicked] = React.useState(false);
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.containerLogo}>
        <Animatable.Image
          animation="flipInX"
          source={require("../../assets/logo.png")}
          style={{ width: "100%", resizeMode: "contain" }}
        />
      </View>

      <View style={styles.containerForm}>
        <Text style={styles.banner}>Bem-vindo(a)</Text>
        <Text
          style={{
            textAlign: "center",
            fontSize: 17,
            color: "gray",
            paddingTop: 5,
          }}
        >
          Vinícius Boscardin
        </Text>
        <Text style={{ textAlign: "center", fontSize: 16, color: "gray" }}>
          Faça login para continuar
        </Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            navigation.navigate("Home");
          }}
        >
          <Text
            onPress={() => {
              navigation.navigate("Home");
            }}
            style={styles.buttonText}
          >
            Entrar
          </Text>
        </TouchableOpacity>
        <View style={styles.containerBottom}>
          <Text
            style={{
              textAlign: "center",
              fontSize: 16,
              color: "gray",
              marginTop: 20,
            }}
          >
            Esqueceu a senha?
          </Text>
        </View>

        <View style={styles.touchId}>
          <Image
            source={require("../../assets/pngwing.com.png")}
            style={{ width: "30%", resizeMode: "contain" }}
          />
        </View>
      </View>

      <View style={styles.bottom}>
        <Text style={{ textAlign: "center", fontSize: 16, color: "gray" }}>
          Não tem uma conta? {""}
          <Text
            onPress={() => {
              setIsClicked(!isClicked);
              navigation.navigate("Home");
            }}
            style={{
              color: isClicked ? "#2b635f" : "#229c93",
              fontWeight: "bold",
              position: "relative",
              bottom: "10%",
              padding: 10,
            }}
          >
            <Text>Cadastre-se</Text>
          </Text>
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "whitesmoke",
    justifyContent: "center",
    padding: 40,
  },

  banner: {
    width: "100%",
    resizeMode: "contain",
    textAlign: "center",
    fontSize: 24,
    paddingTop: 27,
    fontWeight: "bold",
  },
  containerLogo: {
    flex: 1,
    justifyContent: "center",
  },
  containerForm: {
    flex: 1,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    paddingStart: "5%",
    paddingEnd: "5%",
    backgroundColor: "white",
    position: "relative",
    bottom: "10%",
  },
  containerBottom: {
    position: "absolute",
    bottom: "50%",
    width: "100%",
    justifyContent: "center",
    alignSelf: "center",
  },
  button: {
    backgroundColor: "#229c93",
    position: "absolute",
    borderRadius: 25,
    paddingVertical: 8,
    width: "80%",
    alignSelf: "center",
    bottom: "55%",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
  },

  touchId: {
    position: "absolute",
    top: "10%",
    width: "100%",
    justifyContent: "center",
    alignSelf: "center",
    alignItems: "center",
  },
  buttonLogIn: {
    color: "#229c93",
    fontSize: 16,
    fontWeight: "bold",
  },
});
