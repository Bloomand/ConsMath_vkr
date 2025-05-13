import { useState, useEffect, useCallback } from "react";
import {
  Text,
  View,
  Button,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { signup } from "../../../src/firebaseApi/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";
<<<<<<< Updated upstream

import { styles } from "./RegistrationScreen.styles"
=======
import { styles } from "./RegistrationScreen.styles";
import { validateRegistrationForm } from "../../../utils/helpers/validationFunctions";
>>>>>>> Stashed changes

const RegistrationScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
<<<<<<< Updated upstream

  const signUp = useCallback(async () => {
=======
  const [isLoading, setIsLoading] = useState(false);
  const [formErrors, setFormErrors] = useState({});

  const signUp = useCallback(async () => {
    setError(false);
    const validation = validateRegistrationForm(email, password);
    setFormErrors(validation.errors);
    
    if (!validation.isValid) {
      return;
    }

    setIsLoading(true);

>>>>>>> Stashed changes
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
        placeholder="Email"
        textAlign="center"
        value={email}
<<<<<<< Updated upstream
        onChangeText={(text) => setEmail(text)}
=======
        onChangeText={(text) => {
          setEmail(text);
          setFormErrors({...formErrors, email: ""});
        }}
>>>>>>> Stashed changes
        style={styles.input}
      />
      {formErrors.email && <Text style={styles.errorText}>{formErrors.email}</Text>}

      <TextInput
        editable
        placeholder="Password"
        textAlign="center"
        value={password}
<<<<<<< Updated upstream
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
=======
        onChangeText={(text) => {
          setPassword(text);
          setFormErrors({...formErrors, password: ""});
        }}
        style={styles.input}
      />
      {formErrors.password && <Text style={styles.errorText}>{formErrors.password}</Text>}

      {isLoading ? (
        <ActivityIndicator size="large" color="#4CAF50" />
      ) : (
        <TouchableOpacity style={styles.button} onPress={signUp}>
          <Text style={styles.button_text}>Register</Text>
        </TouchableOpacity>
      )}

      <TouchableOpacity onPress={() => navigation.navigate("Login")}>
>>>>>>> Stashed changes
        <Text style={styles.button_link}>Login</Text>
      </TouchableOpacity>

      {error && (
<<<<<<< Updated upstream
        <Text style={{ color: "red", textAlign: "center" }}>
          User already exists
=======
        <Text style={styles.errorText}>
          User already exists or registration failed
>>>>>>> Stashed changes
        </Text>
      )}
    </View>
  );
};

export default RegistrationScreen;