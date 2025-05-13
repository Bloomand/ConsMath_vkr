import { useState, useCallback, useMemo } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  TouchableHighlight,
} from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import Tooltip from "react-native-walkthrough-tooltip";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { styles } from "./MainMenuScreen.styles";
import { mainMenuItems } from "../../utils/constants/mainMenuItems";

const MainMenuScreen = ({ navigation }) => {
  const [tooltipVisible, setTooltipVisible] = useState(() =>
    mainMenuItems.reduce((acc, item) => ({ ...acc, [item.key]: false }), {})
  );

  const redirect = useMemo(
    () =>
      async function () {
        const userId = await AsyncStorage.getItem("user-id");
        if (!userId) {
          navigation.navigate("Login");
        }
      },
    [navigation]
  );

  const logout = useMemo(
    () =>
      async function () {
        await AsyncStorage.removeItem("user-id");
        navigation.navigate("Login");
      },
    [navigation]
  );

  useFocusEffect(
    useCallback(() => {
      redirect();
    }, [redirect])
  );

  const toggleTooltip = useCallback((key) => {
    setTooltipVisible((prev) => ({ ...prev, [key]: !prev[key] }));
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.logoutContainer}>
        <TouchableOpacity style={styles.buttonLogOut} onPress={logout}>
          <Text style={styles.text_logOut}>LOG OUT</Text>
        </TouchableOpacity>
      </View>

      {mainMenuItems.map(({ key, title, screen, description }) => (
        <TouchableOpacity key={key} style={styles.buttonMenu} onPress={() => navigation.navigate(screen)}>
          <Text style={styles.text}>{title}</Text>
          <Tooltip
            isVisible={tooltipVisible[key]}
            content={
              <View style={{ paddingHorizontal: 10, maxWidth: 300 }}>
                {description}
              </View>
            }
            onClose={() => toggleTooltip(key)}
          />
          <TouchableHighlight onPress={() => toggleTooltip(key)} style={styles.tooltipContainer}>
            <Text style={styles.tooltipText}>i</Text>
          </TouchableHighlight>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default MainMenuScreen;
