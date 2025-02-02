import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Switch,
  Image,
} from 'react-native'; 
import { useState } from 'react';


const Context = ({navigation}) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => {
    setIsEnabled(previousState => !previousState);
  };
  
  return (
    <View style={styles.main}>
      <View style={styles.element1}>
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
      <TouchableOpacity style={styles.start}
        onPress={() => {
          if (isEnabled) {
            navigation.navigate('EndlessGameCont', { mode: isEnabled });
          } else {
            navigation.navigate('RankedGameCont', { mode: isEnabled });
          }
        }
        }>
        <Text style={styles.text}>START GAME</Text>
      </TouchableOpacity>
    </View>
  )
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
    justifyContent: 'space-between',
    //margin: 10,
    padding: 10,
    borderRadius: 10,
    alignItems: 'baseline',
    backgroundColor: '#fff',
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
  }
});

export default Context