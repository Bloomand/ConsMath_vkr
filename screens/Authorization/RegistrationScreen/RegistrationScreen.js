import { useState, useCallback } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  TextInput,
  ActivityIndicator,
} from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import { signup } from "../../../src/firebaseApi/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { styles } from "./RegistrationScreen.styles";

const RegistrationScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const signUp = useCallback(async () => {
    setError(false);
    setIsLoading(true);

    try {
      const { data } = await signup(email, password);
      await AsyncStorage.setItem("user-id", data.localId);
      navigation.navigate("Home");
    } catch (error) {
      console.warn("Registration Error:", error.message);
      setError(true);
    } finally {
      setIsLoading(false);
    }
  }, [email, password, navigation]);

  useFocusEffect(
    useCallback(() => {
      const checkUser = async () => {
        const userId = await AsyncStorage.getItem("user-id");
        if (userId) {
          navigation.navigate("Home");
          return null;
        }
      };
      checkUser();
    }, [navigation])
  );

  return (
    <View style={styles.Reg}>
      <TextInput
        editable
        placeholder="Login"
        textAlign="center"
        keyboardType="email-address"
        autoCapitalize="none"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
      />
      <TextInput
        editable
        placeholder="Password"
        textAlign="center"
        secureTextEntry
        autoCapitalize="none"
        value={password}
        onChangeText={setPassword}
        style={styles.input}
      />

      {isLoading ? (
        <ActivityIndicator size="large" color="#4CAF50" />
      ) : (
        <TouchableOpacity style={styles.button} onPress={signUp}>
          <Text style={styles.button_text}>Register</Text>
        </TouchableOpacity>
      )}

      <TouchableOpacity onPress={() => navigation.navigate("Login")}>
        <Text style={styles.button_link}>Login</Text>
      </TouchableOpacity>

      {error && (
        <Text style={{ color: "red", textAlign: "center", marginTop: 10 }}>
          User already exists
        </Text>
      )}
    </View>
  );
};

export default RegistrationScreen;
