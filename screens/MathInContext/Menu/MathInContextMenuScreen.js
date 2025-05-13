import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Switch } from 'react-native';
import { styles } from './MathInContextMenuScreen.styles';
import GameModeOption from '../../../components/GameModeOption/GameModeOption';

const MathInContextMenuScreen = ({ navigation }) => {
  const [isEndlessMode, setIsEndlessMode] = useState(false);
  const toggleSwitch = () => setIsEndlessMode(prev => !prev);

  return (
    <View style={styles.main}>
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
      <TouchableOpacity
        style={styles.start}
        onPress={() => navigation.navigate(
          isEndlessMode ? 'EndlessGameMathInContext' : 'RankedGameMathInContext',
          { mode: isEndlessMode }
        )}
      >
        <Text style={styles.text}>START GAME</Text>
      </TouchableOpacity>
    </View>
  );
};

export default MathInContextMenuScreen;

