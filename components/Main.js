import { StyleSheet, Text, View, TouchableOpacity, TouchableHighlight } from 'react-native';
import { useState } from 'react';
import Tooltip from 'react-native-walkthrough-tooltip';

const Main = ({ navigation }) => {

  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [open4, setOpen4] = useState(false);

  return (
    <View style={styles.container} >
      <TouchableOpacity style={styles.buttonMenu_1}
        onPress={() => navigation.navigate('Precise')}>
        <View style={styles.tooltip}></View>
        <Text style={styles.text_1}>PRECISE MATH</Text>
        <View style={styles.tooltip}>
          <Tooltip
            isVisible={open1}
            content={<View>
              <Text>Provide the 100% accurate answers for the basic arithmetic problems (simple enough to solve in your head).</Text>
              <Text>During case interviews (for business consulting jobs) calculations with 100% accuracy are often required. Any single mistake means a failing grade. In the physical interview, the use of a calculator is prohibited, paper/pen can be acceptable for longer calculations, but for shorter and less complicated tasks to calculate in your head is highly recommended! That’s exactly what you can practice in this app.</Text>
            </View>}
            useInteractionManager={true}
            onClose={() => setOpen1(false)}
          />
          <TouchableHighlight onPress={() => setOpen1(true)}>
            <View style={styles.tool_v}><Text style={styles.tool_text_1}>i</Text></View>
          </TouchableHighlight>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.buttonMenu_1}
        onPress={() => navigation.navigate('Estimation')}>
        <View style={styles.tooltip}></View>
        <Text style={styles.text_1}>ESTIMATION MATH</Text>
        <View style={styles.tooltip}>
          <Tooltip
            isVisible={open2}
            content={<View>
              <Text>Provide the approximate answer (+/-20% range of error is allowed) for more complex arithmetic problems.</Text>
              <Text>Sometimes in case interviews (for business consulting jobs) it will be acceptable to give the approximate answer - in the range of +/-20% of the actual answer. For example, during market sizing tasks or estimation problems like "estimate the number of traffic lights in your city". As the assumptions are approximate, 100% accuracy of calculations is not required. And sometimes interviewers prefer when you don't interrupt the flow of conversation with the use of pen/paper. But don't forget to ask the permission from the interviewer if it is acceptable to give the approximate answer instead of precise one.</Text>
            </View>}
            useInteractionManager={true}
            onClose={() => setOpen2(false)}
          />
          <TouchableHighlight onPress={() => setOpen2(true)}>
            <View style={styles.tool_v}><Text style={styles.tool_text_1}>i</Text></View>
          </TouchableHighlight>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.buttonMenu_1}
        onPress={() => navigation.navigate('Context')}>
        <View style={styles.tooltip}></View>
        <Text style={styles.text_1}>MATH IN CONTEXT</Text>
        <View style={styles.tooltip}>
        <Tooltip
            isVisible={open3}
            content={<View>
              <Text>Provide the approximate answer (+/-20% range of error is allowed) for the arithmetic problems granted within business, financial and other contexts.</Text>
              <Text>During interviews in business consulting companies (and also during aptitude tests in some of them) you have to quickly analyze quantitative and verbal information combined together in order to do necessary calculations. Practice yourself with that mode that imitates such environment.</Text>
            </View>}
            useInteractionManager={true}
            onClose={() => setOpen3(false)}
          />
          <TouchableHighlight onPress={() => setOpen3(true)}>
            <View style={styles.tool_v}><Text style={styles.tool_text_1}>i</Text></View>
          </TouchableHighlight>
        </View>
      </TouchableOpacity>

      

    </View>
  )
}

{/* <TouchableOpacity style={styles.buttonMenu_2}
        onPress={() => navigation.navigate('Context')}>
        <View style={styles.tooltip}></View>
        <Text style={styles.text_2}>RESTORE PURCHASE</Text>
        <View style={styles.tooltip}>
        <Tooltip
            isVisible={open4}
            content={<View>
              <Text>ПЛОТИТЕ</Text>
              <Text>НАЛОГИ</Text>
            </View>}
            useInteractionManager={true}
            onClose={() => setOpen4(false)}
          />
          <TouchableHighlight onPress={() => setOpen4(true)}>
            <View style={styles.tool_v}><Text style={styles.tool_text_2}>i</Text></View>
          </TouchableHighlight>
        </View>
      </TouchableOpacity> */}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingLeft: 40,
    paddingRight: 40,
  },
  buttonMenu_1: {
    flexDirection: 'row',
    margin: 15,
    borderRadius: 10,
    justifyContent: 'space-between',
    backgroundColor: '#223764',
    borderWidth: 2,
    borderColor: '#86bfe8',
  },
  buttonMenu_2: {
    flexDirection: 'row',
    margin: 15,
    borderRadius: 10,
    justifyContent: 'space-between',
    backgroundColor: '#86bfe8',
    borderWidth: 2,
    borderColor: '#223764',
  },
  text_1: {
    paddingTop: 20,
    paddingBottom: 20,
    fontSize: 18,
    color: 'white',
    textAlign: 'center'
    //fontWeight: 'bold',
  },
  text_2: {
    paddingTop: 20,
    paddingBottom: 20,
    fontSize: 18,
    textAlign: 'center'
    //fontWeight: 'bold',
  },
  tool: {
    width: 300,
    height: 300,
    paddingRight: 50,
    //justifyContent: 'center',
    //backgroundColor: '#000',
  },
  tooltip: {
    alignItems: 'flex-end',
    width: 20,
  },
  tool_v: {
    padding: 5,
  },
  tool_text_1: {
    width: 20,
    height: 20,
    borderRadius: 20,
    borderWidth: 2,
    textAlign: 'center',
    borderColor: 'white',
    color: 'white',
    //justifyContent: 'flex-end',
  },
  tool_text_2: {
    width: 20,
    height: 20,
    borderRadius: 20,
    borderWidth: 2,
    textAlign: 'center',
    //justifyContent: 'flex-end',
  }
});

export default Main