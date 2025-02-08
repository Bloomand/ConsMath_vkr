import React, { useState, useCallback, useMemo } from "react";
import {
  View,
  FlatList,
  Text,
  TouchableOpacity,
  Switch,
  Image,
} from "react-native";
import { styles } from "./PreciseMenuScreen.styles";
import { DIFFICULTY_OPTIONS, OPERATION_TYPES } from "../../../utils/constants/preciseGameData";
import SelectableItem from "../../../components/SelectableItem";

const PreciseMenuScreen = ({ navigation }) => {
  const [selectedDifficulty, setSelectedDifficulty] = useState("0");
  const [isEndlessMode, setIsEndlessMode] = useState(false);
  const [selectedType, setSelectedType] = useState("0");

  const toggleSwitch = useCallback(() => {
    setIsEndlessMode((prev) => !prev);
  }, []);

  const handleSelectionChange = useCallback((type, id) => {
    if (type === "difficulty") setSelectedDifficulty(id);
    if (type === "type") setSelectedType(id);
  }, []);

  const difficultyList = useMemo(
    () => (
      <FlatList
        horizontal
        data={DIFFICULTY_OPTIONS}
        renderItem={({ item }) => (
          <SelectableItem item={item} isSelected={item.id === selectedDifficulty} onPress={() => handleSelectionChange("difficulty", item.id)} />
        )}
        keyExtractor={(item) => item.id}
        extraData={selectedDifficulty}
        contentContainerStyle={styles.centeredList}
      />
    ),
    [selectedDifficulty, handleSelectionChange]
  );

  const operationTypeList = useMemo(
    () => (
      <FlatList
        data={OPERATION_TYPES}
        renderItem={({ item }) => (
          <SelectableItem item={item} isSelected={item.id === selectedType} onPress={() => handleSelectionChange("type", item.id)} />
        )}
        keyExtractor={(item) => item.id}
        extraData={selectedType}
        contentContainerStyle={styles.centeredList}
        numColumns={3}
      />
    ),
    [selectedType, handleSelectionChange]
  );

  return (
    <View style={styles.main}>
      {/* Выбор сложности */}
      <View style={styles.element1}>{difficultyList}</View>

      {/* Режимы игры */}
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

      {/* Выбор типа операции */}
      <View style={styles.element3}>{operationTypeList}</View>

      {/* Кнопка старта игры */}
      <TouchableOpacity
        style={styles.start}
        onPress={() =>
          navigation.navigate(isEndlessMode ? "EndlessGamePrecise" : "RankedGamePrecise", {
            difficulty: selectedDifficulty,
            mode: isEndlessMode,
            type: selectedType,
          })
        }
      >
        <Text style={styles.text}>START GAME</Text>
      </TouchableOpacity>
    </View>
  );
};

export default PreciseMenuScreen;
