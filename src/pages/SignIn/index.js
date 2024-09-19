import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function SignUp() {
  const navigation = useNavigation();

  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [cpf, setCpf] = useState("");
  const [dataNascimento, setDataNascimento] = useState("");
  const [email, setEmail] = useState("");

  const handleCadastro = () => {
    console.log({
      nome,
      sobrenome,
      cpf,
      dataNascimento,
      email,
    });
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <View style={styles.titleBox}>
        <Text style={styles.title}>Cadastro</Text>
        <Text style={{ fontSize: 16, color: "#abaaa7", paddingTop: 10 }}>
          Preencha os campos abaixo para se cadastrar
        </Text>
      </View>

      <ScrollView contentContainerStyle={styles.containerForm}>
        <Text style={styles.label}>Nome</Text>
        <TextInput
          style={styles.input}
          placeholder="Nome"
          placeholderTextColor={"#ccc"}
          value={nome}
          onChangeText={setNome}
        />
        <Text style={styles.label}>Sobrenome</Text>
        <TextInput
          style={styles.input}
          placeholder="Sobrenome"
          placeholderTextColor={"#ccc"}
          value={sobrenome}
          onChangeText={setSobrenome}
        />
        <Text style={styles.label}>CPF</Text>
        <TextInput
          style={styles.input}
          placeholder="CPF"
          placeholderTextColor={"#ccc"}
          keyboardType="numeric"
          value={cpf}
          onChangeText={setCpf}
        />
        <Text style={styles.label}>Data de Nascimento</Text>
        <TextInput
          style={styles.input}
          placeholder="Data de Nascimento"
          placeholderTextColor={"#ccc"}
          value={dataNascimento}
          onChangeText={setDataNascimento}
        />
        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor={"#ccc"}
          value={email}
          onChangeText={setEmail}
        />

        <TouchableOpacity style={styles.button} onPress={handleCadastro}>
          <Text style={styles.buttonText}>Cadastrar</Text>
        </TouchableOpacity>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    width: "100%",
    alignSelf: "center",
  },
  titleBox: {
    paddingStart: 20,
    paddingTop: 20,
    paddingBottom: 20,
  },

  containerForm: {
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  voltar: {
    marginBottom: 20,
    fontSize: 16,
    color: "#229c93",
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
  },
  label: {
    alignSelf: "flex-start",
    marginBottom: 5,
    fontSize: 14,
  },
  input: {
    width: "100%",
    height: 50,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 15,
    fontSize: 16,
  },
  button: {
    backgroundColor: "#229c93",
    paddingVertical: 15,
    paddingHorizontal: 50,
    borderRadius: 8,
    marginTop: 20,
    width: "100%",
    display: "flex",
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});
