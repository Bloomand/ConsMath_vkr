import React, { useState, useCallback, useMemo } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Switch,
  Image,
} from "react-native";

import { styles } from "./MathInContextMenuScreen.styles";

const MathInContextMenuScreen = ({ navigation }) => {
  const [isEndlessMode, setIsEndlessMode] = useState(false);

  const toggleSwitch = useCallback(() => {
    setIsEndlessMode((prev) => !prev);
  }, []);

  const gameModeView = useMemo(
    () => (
      <View style={styles.element2}>
        <View>
          <Image style={styles.image} source={require("../../../assets/images/graph.png")} />
          <Text style={styles.image_text}>Ranked Game</Text>
          <Text style={styles.image_text}>(1 min)</Text>
        </View>

        <Switch
          style={styles.switch}
          trackColor={{ true: "#223764", false: "#223764" }}
          thumbColor={"#223764"}
          ios_backgroundColor={"#223764"}
          onValueChange={toggleSwitch}
          value={isEndlessMode}
        />

        <View>
          <Image style={styles.image} source={require("../../../assets/images/infinite.png")} />
          <Text style={styles.image_text}>Endless Mode</Text>
        </View>
      </View>
    ),
    [isEndlessMode, toggleSwitch]
  );

  return (
    <View style={styles.main}>
      {/* Выбор режима игры */}
      {gameModeView}

      {/* Кнопка старта игры */}
      <TouchableOpacity
        style={styles.start}
        onPress={() =>
          navigation.navigate(isEndlessMode ? "EndlessGameMathInContext" : "RankedGameMathInContext", {
            mode: isEndlessMode,
          })
        }
      >
        <Text style={styles.text}>START GAME</Text>
      </TouchableOpacity>
    </View>
  );
};

export default MathInContextMenuScreen;
