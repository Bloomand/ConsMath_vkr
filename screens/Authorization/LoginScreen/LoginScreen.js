import { useState, useCallback, useEffect } from "react";
import {
  Text,
  View,
  Button,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { login } from "../../../src/firebaseApi/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { styles } from "./LoginScreen.styles"

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const logIn = useCallback(async () => {
    try {
      const { data } = await login(email, password);
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

export default LoginScreen;