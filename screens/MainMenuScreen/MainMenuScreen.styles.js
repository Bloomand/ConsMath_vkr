import { StyleSheet, Dimensions } from "react-native"; 

const { width } = Dimensions.get('window');

export const styles = StyleSheet.create({
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
