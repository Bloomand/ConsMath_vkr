import { StyleSheet, Dimensions } from "react-native";
const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({
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
