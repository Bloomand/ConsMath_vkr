import { useState, useCallback } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  TextInput,
  ActivityIndicator,
} from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import { login } from "../../../src/firebaseApi/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { styles } from "./LoginScreen.styles";


const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const logIn = useCallback(async () => {
    setError(false);
    setIsLoading(true);

    try {
      const { data } = await login(email, password);
      await AsyncStorage.setItem("user-id", data.localId);
      navigation.navigate("Home");
    } catch (error) {
      console.warn("Login Error:", error.message);
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
        <TouchableOpacity style={styles.button} onPress={logIn}>
          <Text style={styles.button_text}>Login!</Text>
        </TouchableOpacity>
      )}
      
      <TouchableOpacity
        style={styles.button_link}
        onPress={() => navigation.navigate("Registration")}
      >
        <Text style={styles.button_text}>Registration</Text>
      </TouchableOpacity>

      {error && (
        <Text style={{ color: "red", textAlign: "center", marginTop: 10 }}>
          Invalid login or password
        </Text>
      )}
    </View>
  );
};

export default LoginScreen;

