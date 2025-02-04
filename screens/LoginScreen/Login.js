import { useState, useCallback, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { login } from "../../src/firebaseApi/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const logIn = useCallback(async () => {
    try {
      const { data } = await login(email, password);
      console.log("Login successful", data);
      navigation.navigate("Home");
    } catch (error) {
      console.error("Error message:", error.message);
    }
  }, [email, password]);

  const redirect = useCallback(async () => {
    const userId = await AsyncStorage.getItem("user-id");
    console.log("Retrieved userId:", userId);

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
          logIn(email, password);
        }}
      >
        <Text style={styles.button_text}>Login!</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button_link}
        onPress={() => {
          navigation.navigate("Registration");
        }}
      >
        <Text style={styles.button_link}>Registration</Text>
      </TouchableOpacity>

      {error && (
        <Text style={{ color: "red", textAlign: "center" }}>
          Invalid login or password
        </Text>
      )}
    </View>
  );
};


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

export default Login;