import { StyleSheet, Text, View, TouchableOpacity, TouchableHighlight, Dimensions } from 'react-native';
import { useState } from 'react';
import Tooltip from 'react-native-walkthrough-tooltip';
import auth from '@react-native-firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';

const { width } = Dimensions.get('window');

const MainMenuScreen = ({ navigation }) => {

  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [loading, setLoading] = useState(false);

  const logOut = async () => {
    setLoading(true);
    try {
      await AsyncStorage.removeItem("user-id");
      navigation.navigate("Login");
    } catch (error) {
      console.error("Ошибка при выходе:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.logoutContainer}>
        <TouchableOpacity style={styles.buttonLogOut} onPress={logOut}>
          <Text style={styles.text_logOut}>LOG OUT</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.buttonMenu} onPress={() => navigation.navigate('Precise')}>
        <Text style={styles.text}>PRECISE MATH</Text>
        <Tooltip
          isVisible={open1}
          content={<Text>Provide the 100% accurate answers for the basic arithmetic problems.</Text>}
          onClose={() => setOpen1(false)}
        />
        <TouchableHighlight onPress={() => setOpen1(true)} style={styles.tooltipContainer}>
          <Text style={styles.tooltipText}>i</Text>
        </TouchableHighlight>
      </TouchableOpacity>

      <TouchableOpacity style={styles.buttonMenu} onPress={() => navigation.navigate('Estimation')}>
        <Text style={styles.text}>ESTIMATION MATH</Text>
        <Tooltip
          isVisible={open2}
          content={<Text>Provide an approximate answer (+/-20% range of error allowed).</Text>}
          onClose={() => setOpen2(false)}
        />
        <TouchableHighlight onPress={() => setOpen2(true)} style={styles.tooltipContainer}>
          <Text style={styles.tooltipText}>i</Text>
        </TouchableHighlight>
      </TouchableOpacity>

      <TouchableOpacity style={styles.buttonMenu} onPress={() => navigation.navigate('MathInContext')}>
        <Text style={styles.text}>MATH IN CONTEXT</Text>
        <Tooltip
          isVisible={open3}
          content={<Text>Provide the approximate answer within business and financial contexts.</Text>}
          onClose={() => setOpen3(false)}
        />
        <TouchableHighlight onPress={() => setOpen3(true)} style={styles.tooltipContainer}>
          <Text style={styles.tooltipText}>i</Text>
        </TouchableHighlight>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: '5%',
  },
  buttonMenu: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '90%',
    paddingVertical: 15,
    marginVertical: 10,
    borderRadius: 10,
    backgroundColor: '#223764',
    borderWidth: 2,
    borderColor: '#86bfe8',
    position: 'relative',
  },
  text: {
    fontSize: width * 0.045,
    color: 'white',
    textAlign: 'center',
    flex: 1,
  },
  tooltipContainer: {
    position: 'absolute',
    top: 5,
    right: 5,
  },
  tooltipText: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2,
    textAlign: 'center',
    borderColor: 'white',
    color: 'white',
  },
  logoutContainer: {
    alignSelf: 'flex-end',
    margin: 20,
  },
  buttonLogOut: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 10,
    backgroundColor: 'white',
    borderWidth: 2,
    borderColor: '#223764',
  },
  text_logOut: {
    fontSize: width * 0.035,
    color: '#223764',
    textAlign: 'center',
  },
});

export default MainMenuScreen;
