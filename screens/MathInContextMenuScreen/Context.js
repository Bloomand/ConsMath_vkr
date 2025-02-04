import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Switch,
  Image,
  Dimensions
} from 'react-native';

const { width, height } = Dimensions.get('window');

const Context = ({ navigation }) => {
  const [isEndlessMode, setIsEndlessMode] = useState(false);
  const toggleSwitch = () => setIsEndlessMode(prevState => !prevState);


  return (
    <View style={styles.main}>
      <View style={styles.element2}>
        <View>
          <Image style={styles.image} source={require('../../assets/images/graph.png')} />
          <Text style={styles.image_text}>Ranked Game</Text>
          <Text style={styles.image_text}>(1 min)</Text>
        </View>
        <Switch style={styles.switch} trackColor={{ true: '#223764', false: '#223764' }} thumbColor={'#223764'} ios_backgroundColor={'#223764'} onValueChange={toggleSwitch} value={isEndlessMode} />
        <View>
          <Image style={styles.image} source={require('../../assets/images/infinite.png')} />
          <Text style={styles.image_text}>Endless Mode</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.start} onPress={() => navigation.navigate(isEndlessMode ? 'EndlessGameCont' : 'RankedGameCont', { mode: isEndlessMode })}>
        <Text style={styles.text}>START GAME</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'space-around',
    padding: width * 0.05,
    backgroundColor: '#ccc'
  },
  element1: {
    flexDirection: 'row',
    justifyContent: 'center',
    padding: width * 0.02,
    borderRadius: 10,
    alignItems: 'center',
    backgroundColor: '#fff'
  },
  centeredList: {
    alignItems: 'center',
    justifyContent: 'center',
    flexGrow: 1
  },
  element2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: width * 0.02,
    borderRadius: 10,
    alignItems: 'center',
    backgroundColor: '#fff'
  },
  item: {
    width: width * 0.25,
    height: width * 0.25,
    margin: width * 0.005,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5
  },
  image: {
    margin: width * 0.03,
    width: width * 0.22,
    height: width * 0.2
  },
  image_text: {
    width: width * 0.3,
    fontSize: width * 0.045,
    textAlign: 'center'
  },
  element3: {
    flexDirection: 'row',
    justifyContent: 'center',
    padding: width * 0.02,
    borderRadius: 10,
    alignItems: 'center',
    backgroundColor: '#fff'
  },
  start: {
    justifyContent: 'center',
    padding: height * 0.05,
    marginTop: height * 0.5,
    borderRadius: 10,
    alignItems: 'center',
    backgroundColor: '#223764'
  },
  text: {
    fontSize: width * 0.05,
    fontWeight: 'bold',
    color: 'white'
  },
  title: {
    fontSize: width * 0.05
  },
  switch: {
    transform: [{ scaleX: 1.3 }, { scaleY: 1.3 }]
  }
});

export default Context;