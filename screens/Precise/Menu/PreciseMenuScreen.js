import React, { useState, useCallback } from 'react';
import { View, FlatList, Text, TouchableOpacity, Switch, Image } from 'react-native';
import { styles } from './PreciseMenuScreen.styles';
import GameModeOption from '../../../components/GameModeOption/GameModeOption';
import SelectableItem from '../../../components/SelectableItem';
import { DIFFICULTY_OPTIONS, OPERATION_TYPES } from '../../../utils/constants/preciseGameData';

const PreciseMenuScreen = ({ navigation }) => {
  const [selectedDifficulty, setSelectedDifficulty] = useState('0');
  const [isEndlessMode, setIsEndlessMode] = useState(false);
  const [selectedArif, setSelectedArif] = useState('0');

  const toggleSwitch = () => setIsEndlessMode(prev => !prev);

  const renderSelectableItem = useCallback(({ item, selected, onPress }) => (
    <SelectableItem item={item} isSelected={selected} onPress={onPress} />
  ), []);

  return (
    <View style={styles.main}>
      <View style={styles.element1}>
        <FlatList
          horizontal
          data={DIFFICULTY_OPTIONS}
          renderItem={({ item }) => renderSelectableItem({
            item,
            selected: item.id === selectedDifficulty,
            onPress: () => setSelectedDifficulty(item.id)
          })}
          keyExtractor={item => item.id}
          extraData={selectedDifficulty}
          contentContainerStyle={styles.centeredList}
        />
      </View>
      <View style={styles.element2}>
      <GameModeOption
          imageSource={require('../../../assets/images/graph.png')}
          title="Ranked Game"
          subtitle="(1 min)"
        />
        <Switch
          style={styles.switch}
          trackColor={{ true: '#223764', false: '#223764' }}
          thumbColor={'#223764'}
          ios_backgroundColor={'#223764'}
          onValueChange={toggleSwitch}
          value={isEndlessMode}
        />
        <GameModeOption
          imageSource={require('../../../assets/images/infinite.png')}
          title="Endless Mode"
        />
      </View>
      <View style={styles.element3}>
      <FlatList
          data={OPERATION_TYPES}
          renderItem={({ item }) => renderSelectableItem({
            item,
            selected: item.id === selectedArif,
            onPress: () => setSelectedArif(item.id)
          })}
          keyExtractor={item => item.id}
          extraData={selectedArif}
          contentContainerStyle={styles.centeredList}
          numColumns={3}
        />
      </View>
      <TouchableOpacity
        style={styles.start}
        onPress={() => navigation.navigate(
          isEndlessMode ? 'EndlessGamePrecise' : 'RankedGamePrecise',
          { difficulty: selectedDifficulty, mode: isEndlessMode, type: selectedArif }
        )}
      >
        <Text style={styles.text}>START GAME</Text>
      </TouchableOpacity>
    </View>
  );
};

export default PreciseMenuScreen;