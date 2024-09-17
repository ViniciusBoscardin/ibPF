import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function SignUp() {
  const navigation = useNavigation();

  // Estados para armazenar os valores dos inputs
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [cpf, setCpf] = useState("");
  const [dataNascimento, setDataNascimento] = useState("");
  const [pais, setPais] = useState("");

  const handleCadastro = () => {
    // Aqui você pode fazer a lógica de cadastro, como enviar os dados para uma API
    console.log({
      nome,
      sobrenome,
      cpf,
      dataNascimento,
      pais,
    });

    // Após o cadastro, você pode redirecionar o usuário para outra página
    navigation.navigate("Welcome");
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate("Welcome")}>
        <Text style={styles.voltar}>Voltar</Text>
      </TouchableOpacity>

      <Text style={styles.title}>Cadastro</Text>

      {/* Inputs do formulário */}
      <TextInput
        style={styles.input}
        placeholder="Nome"
        value={nome}
        onChangeText={setNome}
      />
      <TextInput
        style={styles.input}
        placeholder="Sobrenome"
        value={sobrenome}
        onChangeText={setSobrenome}
      />
      <TextInput
        style={styles.input}
        placeholder="CPF"
        keyboardType="numeric"
        value={cpf}
        onChangeText={setCpf}
      />
      <TextInput
        style={styles.input}
        placeholder="Data de Nascimento"
        value={dataNascimento}
        onChangeText={setDataNascimento}
      />
      <TextInput
        style={styles.input}
        placeholder="País"
        value={pais}
        onChangeText={setPais}
      />

      <TouchableOpacity style={styles.button} onPress={handleCadastro}>
        <Text style={styles.buttonText}>Cadastrar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#fff",
  },
  voltar: {
    alignSelf: "flex-start",
    marginBottom: 20,
    fontSize: 16,
    color: "#229c93",
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    fontWeight: "bold",
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
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});
