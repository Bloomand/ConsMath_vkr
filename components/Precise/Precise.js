import React, { useState } from 'react';
import {
  View,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  Switch,
  Image,
} from 'react-native';

const DATA_difficult = [
  { id: '0', title: 'Easy' },
  { id: '1', title: 'Medium' },
  { id: '2', title: 'Hard' }
];

const Item = ({ item, onPress, backgroundColor, textColor }) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, { backgroundColor }]}>
    <Text style={[styles.title, { color: textColor }]}>{item.title}</Text>
  </TouchableOpacity>
);

const DATA_type = [
  { id: '0', title: '+' },
  { id: '1', title: '-' },
  { id: '2', title: 'x' },
  { id: '3', title: '/' },
  { id: '4', title: '%' },
  { id: '5', title: 'Random' }
];
const Item2 = ({ item, onPress, backgroundColor, textColor }) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, { backgroundColor }]}>
    <Text style={[styles.title, { color: textColor }]}>{item.title}</Text>
  </TouchableOpacity>
);



const Precise = ({ navigation }) => {
  const [selectedId, setSelectedId] = useState('0');
  const [selectedArif, setSelectedArif] = useState('0');
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => {
    setIsEnabled(previousState => !previousState);
  };

  const renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? '#223764' : '#86bfe8';
    const color = item.id === selectedId ? 'white' : 'black';
    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.id)}
        backgroundColor={backgroundColor}
        textColor={color}
      />
    );
  };
  const renderItem2 = ({ item }) => {
    const backgroundColor = item.id === selectedArif ? '#223764' : '#86bfe8';
    const color = item.id === selectedArif ? 'white' : 'black';
    return (
      <Item2
        item={item}
        onPress={() => setSelectedArif(item.id)}
        backgroundColor={backgroundColor}
        textColor={color}
      />
    );
  };
  return (
    <View style={styles.main}>
      <View style={styles.element1}>
        <FlatList
          horizontal
          data={DATA_difficult}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          extraData={selectedId}
        />
      </View>
      <View style={styles.element2}>
        <View>
          <Image
            style={styles.image}
            source={require('../../src/graph.png')}
          />
          <Text style={styles.image_text}>Ranked Game</Text>
          <Text style={styles.image_text}>(1 min)</Text>
        </View>
        <Switch style={{ transform: [{ scaleX: 1.3 }, { scaleY: 1.3 }] }}
          trackColor={{ 1: '#223764', 0: '#223764' }}
          thumbColor={isEnabled ? '#223764' : '#223764'}
          ios_backgroundColor={'#223764'}
          onValueChange={toggleSwitch}
          value={isEnabled} />
        <View>
          <Image
            style={styles.image}
            source={require('../../src/infinite.png')}
          />
          <Text style={styles.image_text}>Endless Mode</Text>
        </View>
      </View>
      <View style={styles.element3}>
        <FlatList
          data={DATA_type}
          renderItem={renderItem2}
          keyExtractor={item => item.id}
          extraData={selectedArif}
          numColumns={3}
        />
      </View>
      <TouchableOpacity style={styles.start}
        onPress={() => {
          if (isEnabled) {
            navigation.navigate('EndlessGame', { dificult: selectedId, mode: isEnabled, type: selectedArif });
          } else {
            navigation.navigate('RankedGame', { dificult: selectedId, mode: isEnabled, type: selectedArif });
          }
        }
        }>
        <Text style={styles.text}>START GAME</Text>
      </TouchableOpacity>
    </View>)
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'space-around',
    padding: 10,
    paddingLeft: 30,
    paddingRight: 30,
    backgroundColor: '#ccc'
  },
  element1: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    //margin: 10,
    paddingLeft: 8,
    paddingTop: 8,
    paddingBottom: 8,
    borderRadius: 10,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  element2: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    //margin: 10,
    padding: 10,
    borderRadius: 10,
    alignItems: 'baseline',
    backgroundColor: '#fff',
  },
  item: {
    width: 90,
    height: 90,
    margin: 2,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
  image: {
    margin: 15,
    width: 90,
    height: 80,
  },
  image_text: {
    width: 110,
    fontSize: 17,
    textAlign: 'center',
  },
  element3: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    //margin: 10,
    paddingLeft: 8,
    paddingTop: 8,
    paddingBottom: 8,
    borderRadius: 10,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  start: {
    justifyContent: 'center',
    //margin: 10,
    padding: 30,
    borderRadius: 10,
    alignItems: 'center',
    backgroundColor: '#223764',
  },
  text:{
    fontSize: 18,
    fontWeight: 'bold',
    color:'white',
  },
  title:{
    fontSize: 18,
  }
});

export default Precise