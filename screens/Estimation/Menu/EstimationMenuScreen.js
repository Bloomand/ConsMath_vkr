import React, { useState } from 'react';
import {
  View,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  Switch,
  Image,
  Dimensions
} from 'react-native';

import { styles } from './EstimationMenuScreen.styles';

const DATA_difficult = [
  { id: '1', title: 'Medium' },
  { id: '2', title: 'Hard' }
];

const DATA_type = [
  { id: '0', title: '+' },
  { id: '1', title: '-' },
  { id: '2', title: 'x' },
  { id: '3', title: '/' },
  { id: '4', title: '%' },
  { id: '5', title: 'Random' }
];

const Item = ({ item, onPress, backgroundColor, textColor }) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, { backgroundColor }]}>
    <Text style={[styles.title, { color: textColor }]}>{item.title}</Text>
  </TouchableOpacity>
);


const EstimationMenuScreen = ({ navigation }) => {
  const [selectedDifficulty, setSelectedDifficulty] = useState('1');
  const [isEndlessMode, setIsEndlessMode] = useState(false);
  const [selectedArif, setSelectedArif] = useState('0');
  const toggleSwitch = () => setIsEndlessMode(prevState => !prevState);

  const renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedDifficulty ? '#223764' : '#86bfe8';
    const color = item.id === selectedDifficulty ? 'white' : 'black';
    return <Item item={item} onPress={() => setSelectedDifficulty(item.id)} backgroundColor={backgroundColor} textColor={color} />;
  };

  const renderItem2 = ({ item }) => {
    const backgroundColor = item.id === selectedArif ? '#223764' : '#86bfe8';
    const color = item.id === selectedArif ? 'white' : 'black';
    return <Item item={item} onPress={() => setSelectedArif(item.id)} backgroundColor={backgroundColor} textColor={color} />;
  };

  return (
    <View style={styles.main}>
      <View style={styles.element1}>
        <FlatList horizontal data={DATA_difficult} renderItem={renderItem} keyExtractor={item => item.id} extraData={selectedDifficulty} contentContainerStyle={styles.centeredList} />
      </View>
      <View style={styles.element2}>
        <View>
          <Image style={styles.image} source={require('../../../assets/images/graph.png')} />
          <Text style={styles.image_text}>Ranked Game</Text>
          <Text style={styles.image_text}>(1 min)</Text>
        </View>
        <Switch style={styles.switch}
          trackColor={{ true: '#223764', false: '#223764' }}
          thumbColor={'#223764'}
          ios_backgroundColor={'#223764'}
          onValueChange={toggleSwitch}
          value={isEndlessMode} />
        <View>
          <Image style={styles.image} source={require('../../../assets/images/infinite.png')} />
          <Text style={styles.image_text}>Endless Mode</Text>
        </View>
      </View>
      <View style={styles.element3}>
        <FlatList
          data={DATA_type}
          renderItem={renderItem2}
          keyExtractor={item => item.id}
          extraData={selectedArif}
          contentContainerStyle={styles.centeredList}
          numColumns={3} />
      </View>
      <TouchableOpacity style={styles.start} onPress={() => navigation.navigate(isEndlessMode ? 'EndlessGameEstimation' : 'RankedGameEstimation', { dificult: selectedDifficulty, mode: isEndlessMode, type: selectedArif })}>
        <Text style={styles.text}>START GAME</Text>
      </TouchableOpacity>
    </View>
  );
};

export default EstimationMenuScreen;