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
<<<<<<< Updated upstream
import { styles } from "./LoginScreen.styles"
=======
import { styles } from "./LoginScreen.styles";
import { validateLoginForm } from "../../../utils/helpers/validationFunctions";
>>>>>>> Stashed changes

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
<<<<<<< Updated upstream

  const logIn = useCallback(async () => {
=======
  const [isLoading, setIsLoading] = useState(false);
  const [formErrors, setFormErrors] = useState({});

  const logIn = useCallback(async () => {
    setError(false);
    const validation = validateLoginForm(email, password);
    setFormErrors(validation.errors);
    
    if (!validation.isValid) {
      return;
    }

    setIsLoading(true);

>>>>>>> Stashed changes
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
          logIn(email, password);
        }}
      >
        <Text style={styles.button_text}>Login!</Text>
      </TouchableOpacity>
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
        <TouchableOpacity style={styles.button} onPress={logIn}>
          <Text style={styles.button_text}>Login!</Text>
        </TouchableOpacity>
      )}
      
>>>>>>> Stashed changes
      <TouchableOpacity
        style={styles.button_link}
        onPress={() => {
          navigation.navigate("Registration");
        }}
      >
        <Text style={styles.button_link}>Registration</Text>
      </TouchableOpacity>

      {error && (
<<<<<<< Updated upstream
        <Text style={{ color: "red", textAlign: "center" }}>
=======
        <Text style={styles.errorText}>
>>>>>>> Stashed changes
          Invalid login or password
        </Text>
      )}
    </View>
  );
};

export default LoginScreen;