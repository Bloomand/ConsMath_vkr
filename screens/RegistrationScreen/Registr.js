import { useState, useEffect, useCallback } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { signup } from "../../src/firebaseApi/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Registr = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const signUp = useCallback(async () => {
    try {
      const { data } = await signup(email, password);

      setError(false);

      await AsyncStorage.setItem("user-id", data.localId);

      navigation.navigate("Home");
    } catch (error) {
      console.log("Error", error.message);
      setError(true);
    }
  }, [email, password]);

  const redirect = useCallback(async () => {
    const userId = await AsyncStorage.getItem("user-id");

    if (!userId) return;
    navigation.navigate("Home");
  }, []);

  useEffect(() => {
    redirect();
  }, [redirect, navigation]);


  return (
    <View style={styles.Reg}>
      <TextInput
        editable
        placeholder="Login"
        textAlign="center"
        value={email}
        onChangeText={(text) => setEmail(text)}
        style={styles.input}
      />
      <TextInput
        editable
        placeholder="Password"
        textAlign="center"
        value={password}
        onChangeText={(text) => setPassword(text)}
        style={styles.input}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          signUp(email, password);
        }}
      >
        <Text style={styles.button_text}>Registrate</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Login");
        }}
      >
        <Text style={styles.button_link}>Login</Text>
      </TouchableOpacity>

      {error && (
        <Text style={{ color: "red", textAlign: "center" }}>
          User already exists
        </Text>
      )}
    </View>
  );
};

export default Registr;

const styles = StyleSheet.create({
  Reg: {
    flex: 1,
    paddingTop: 50,
    display: "flex",
    alignItems: "center",
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: "#ccc",
  },
  input: {
    marginTop: 20,
    padding: 10,
    width: 300,
    fontSize: 20,
    alignItems: "center",
    borderRadius: 5,
    backgroundColor: "#fff",
  },
  button: {
    margin: 20,
    padding: 15,
    width: 300,
    alignItems: "center",
    borderRadius: 5,
    backgroundColor: "#223764",
    color: "#fff",
  },
  button_text: {
    fontSize: 18,
    color: "#fff",
    textAlign: "center",
  },
  button_link: {
    fontSize: 18,
    color: "#000",
    textAlign: "center",
  },
});
