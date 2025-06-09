import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { styles } from "../screens/Precise/Menu/PreciseMenuScreen.styles";

const SelectableItem = ({ item, isSelected, onPress }) => {
  const backgroundColor = isSelected ? "#223764" : "#86bfe8";
  const textColor = isSelected ? "white" : "black";

  return (
    <TouchableOpacity onPress={() => onPress(item.id)} style={[styles.item, { backgroundColor }]}>
      <Text style={[styles.title, { color: textColor }]}>{item.title}</Text>
    </TouchableOpacity>
  );
};

export default React.memo(SelectableItem);
