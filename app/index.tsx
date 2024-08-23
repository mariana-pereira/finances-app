import { Link } from "expo-router";
import {
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";

export default function Auth() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={"light-content"} />
      <Text style={styles.title}>finances</Text>
      <Text style={styles.text}>
        Ainda não tem uma conta? <Link href={"/register"}>Cadastre-se</Link>{" "}
      </Text>
      <View style={styles.content}>
        <TextInput style={styles.input} placeholder="E-mail" />
        <TextInput style={styles.input} placeholder="Senha" />
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>
        <Text style={styles.text}>Esqueci minha senha</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#172554",
    justifyContent: "center",
    alignItems: "center",
  },
  content: {},
  title: {
    color: "#fff",
    fontSize: 50,
    marginBottom: 20,
  },
  text: {
    color: "#fff",
    fontSize: 15,
    textAlign: "center",
    marginBottom: 10,
    marginTop: 10,
  },
  input: {
    height: 40,
    width: 300,
    backgroundColor: "#fff",
    marginTop: 10,
    marginBottom: 10,
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: "#333",
    height: 40,
    width: 300,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
    marginTop: 10,
    marginBottom: 10,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 17,
  },
});
