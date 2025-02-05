import { useState } from 'react';
import { useEffect } from 'react'

import { StyleSheet, Text, View, Button, TouchableOpacity, TextInput } from 'react-native';

import dataContext from '../../src/DataContext.js'


const GameContext = (props, route) => {
  const [curQuest, setCurQuest] = useState(0);
  const [curText, setText] = useState("");
  const [curExpect, setCurExpect] = useState();
  const [curAnswer, setCurAnswer] = useState();
  const [curMass, setCurMass] = useState();



  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
  }


  function Compounding1() {
    const Object = [""];
    let NUM = 0;
    for (let i = 0; i < dataContext.questions[NUM].texts.length; i++) {
      Object[dataContext.questions[NUM].texts[i].sequence] = dataContext.questions[NUM].texts[i].texttoShow;
    }
    for (let i = 0; i < dataContext.questions[NUM].Rtexts.length; i++) {
      let zero = getRandomInt(0, dataContext.questions[NUM].Rtexts[i].value.length - 1);
      Object[dataContext.questions[NUM].Rtexts[i].sequence] = dataContext.questions[NUM].Rtexts[i].value[zero];
    }

    Object[6] = getRandomInt(dataContext.questions[NUM].nums[0].minValue, dataContext.questions[NUM].nums[0].maxValue);
    Object[12] = getRandomInt(dataContext.questions[NUM].nums[2].minValue, dataContext.questions[NUM].nums[2].maxValue);

    let check = getRandomInt(2, 50);
    Object[10] = Math.floor((check / Object[12]) * 10) / 10;
    while (Object[10] <= 0.5 || Object[10] >= 15) {
      check = getRandomInt(2, 50);
      Object[10] = Math.floor((check / Object[12]) * 10) / 10;
    }
    Object[15] = dataContext.questions[NUM].answer.texttoShow;

    let Answer = (Math.pow((1 + Object[10] / 100), Object[12]) - 1) * 100;
    Answer = Math.floor(Answer);

    Object[10] += "%";

    let pass = "";
    for (let i = 1; i < dataContext.questions[NUM].kol; i++) {
      pass += Object[i];
      pass += " ";
    }
    
    
    setCurExpect(Answer);

    setCurMass(Object);
    setText(pass);
  }

  function Compounding2() {
    const Object = [""];
    let NUM = 1;
    for (let i = 0; i < dataContext.questions[NUM].texts.length; i++) {
      Object[dataContext.questions[NUM].texts[i].sequence] = dataContext.questions[NUM].texts[i].texttoShow;
    }
    for (let i = 0; i < dataContext.questions[NUM].Rtexts.length; i++) {
      let zero = getRandomInt(0, dataContext.questions[NUM].Rtexts[i].value.length - 1);
      Object[dataContext.questions[NUM].Rtexts[i].sequence] = dataContext.questions[NUM].Rtexts[i].value[zero];
    }

    Object[6] = getRandomInt(dataContext.questions[NUM].nums[0].minValue, dataContext.questions[NUM].nums[0].maxValue);
    Object[12] = getRandomInt(dataContext.questions[NUM].nums[2].minValue, dataContext.questions[NUM].nums[2].maxValue);

    let check = getRandomInt(2, 50);
    Object[10] = Math.floor((check / Object[12]) * 10) / 10;
    while (Object[10] <= 0.5 || Object[10] >= 15) {
      check = getRandomInt(2, 50);
      Object[10] = Math.floor((check / Object[12]) * 10) / 10;
    }
    Object[15] = dataContext.questions[NUM].answer.texttoShow;

    let Answer = Object[6] * (Math.pow((1 + Object[10] / 100), Object[12])) - Object[6];
    Answer = Math.floor(Answer);
    
    Object[10] += "%";

    let pass = "";
    for (let i = 1; i < dataContext.questions[NUM].kol; i++) {
      pass += Object[i];
      pass += " ";
    }
    
    setCurExpect(Answer);

    setCurMass(Object);
    setText(pass);
  }

  function Compounding3() {
    const Object = [""];
    let NUM = 2;
    for (let i = 0; i < dataContext.questions[NUM].texts.length; i++) {
      Object[dataContext.questions[NUM].texts[i].sequence] = dataContext.questions[NUM].texts[i].texttoShow;
    }
    for (let i = 0; i < dataContext.questions[NUM].Rtexts.length; i++) {
      let zero = getRandomInt(0, dataContext.questions[NUM].Rtexts[i].value.length - 1);
      Object[dataContext.questions[NUM].Rtexts[i].sequence] = dataContext.questions[NUM].Rtexts[i].value[zero];
    }

    Object[7] = getRandomInt(dataContext.questions[NUM].nums[0].minValue, dataContext.questions[NUM].nums[0].maxValue);
    Object[1] = getRandomInt(dataContext.questions[NUM].nums[2].minValue, dataContext.questions[NUM].nums[2].maxValue);

    let check = getRandomInt(2, 50);
    let Answer = Math.floor((check / Object[1]) * 10) / 10;
    while (Answer <= 0.5 || Answer >= 15) {
      check = getRandomInt(2, 50);
      Answer = Math.floor((check / Object[1]) * 10) / 10;
    }

    Object[10] = Math.floor((Math.pow((1 + Answer / 100), Object[1]) - 1) * 100);
    Object[14] = dataContext.questions[NUM].answer.texttoShow;

    Object[10] += "%";


    let pass = "";
    for (let i = 1; i <= 14; i++) {
      pass += Object[i];
      pass += " ";
    }

    setCurExpect(Answer);

    setCurMass(Object);
    setText(pass);
  }

  function Compounding4() {
    const Object = [""];
    let NUM = 3;
    for (let i = 0; i < dataContext.questions[NUM].texts.length; i++) {
      Object[dataContext.questions[NUM].texts[i].sequence] = dataContext.questions[NUM].texts[i].texttoShow;
    }
    for (let i = 0; i < dataContext.questions[NUM].Rtexts.length; i++) {
      let zero = getRandomInt(0, dataContext.questions[NUM].Rtexts[i].value.length - 1);
      Object[dataContext.questions[NUM].Rtexts[i].sequence] = dataContext.questions[NUM].Rtexts[i].value[zero];
    }

    Object[8] = getRandomInt(dataContext.questions[NUM].nums[1].minValue, dataContext.questions[NUM].nums[1].maxValue);
    let Answer = getRandomInt(dataContext.questions[NUM].answer.minValue, dataContext.questions[NUM].answer.maxValue);

    let check = getRandomInt(2, 50);
    Object[14] = Math.floor((check / Answer) * 10) / 10;
    while (Object[14] <= 0.5 || Object[14] >= 15) {
      check = getRandomInt(2, 50);
      Object[14] = Math.floor((check / Answer) * 10) / 10;
    }

    Object[17] = dataContext.questions[NUM].answer.texttoShow;
    //Object[17] = Answer;

    Object[6] = Math.floor((Math.pow((1 + Object[14] / 100), Answer) - 1) * 100);
    Object[10] = Math.floor(Object[8] * Math.pow((1 + Object[14] / 100), Answer));

    Object[6] += "%";
    Object[14] += "%";

    let pass = "";
    for (let i = 1; i < dataContext.questions[NUM].kol; i++) {
      pass += Object[i];
      pass += " ";
    }

    setCurExpect(Answer);
    setCurMass(Object);
    setText(pass);
  }

  function ProfitMargin1() {
    const Object = [""];
    let NUM = 4;
    for (let i = 0; i < dataContext.questions[NUM].texts.length; i++) {
      Object[dataContext.questions[NUM].texts[i].sequence] = dataContext.questions[NUM].texts[i].texttoShow;
    }
    for (let i = 0; i < dataContext.questions[NUM].Rtexts.length; i++) {
      let zero = getRandomInt(0, dataContext.questions[NUM].Rtexts[i].value.length - 1);
      Object[dataContext.questions[NUM].Rtexts[i].sequence] = dataContext.questions[NUM].Rtexts[i].value[zero];
    }

    let zero = getRandomInt(0, dataContext.questions[NUM].RtextsWithi[0].value.length - 1);
    zero = dataContext.questions[NUM].RtextsWithi[0].value[zero];
    for (let i = 0; i < dataContext.questions[NUM].RtextsWithi.length; i++) {
      Object[dataContext.questions[NUM].RtextsWithi[i].sequence] = zero;
    }

    Object[7] = getRandomInt(dataContext.questions[NUM].nums[1].minValue, dataContext.questions[NUM].nums[1].maxValue);
    let Answer = getRandomInt(dataContext.questions[NUM].answer.minValue, dataContext.questions[NUM].answer.maxValue);
    Object[11] = dataContext.questions[NUM].answer.texttoShow;

    Object[5] = Math.floor(Object[7] * (Answer / 100));

    let pass = "";
    for (let i = 1; i < dataContext.questions[NUM].kol; i++) {
      pass += Object[i];
      pass += " ";
    }
    setCurExpect(Answer);
    setCurMass(Object);
    setText(pass);

  }

  function updateQuestion(type) {
    setCurQuest(getRandomInt(0, dataContext.questions.length - 1));

    if (!curAnswer) {
      setCurAnswer('');
    }

    if (type == 1) {
      var Object = { quest: curText, expect: curExpect, answer: curAnswer }
      props.setData(prev => [...prev, Object]);
    }
  }



  useEffect(() => {
    updateQuestion(0);
  }, [route]);



  useEffect(() => {
    if (curQuest == 0) {
      Compounding1();
    } else if (curQuest == 1) {
      Compounding2();
    } else if (curQuest == 2) {
      Compounding3();
    } else if (curQuest == 3) {
      Compounding4();
    } else if (curQuest == 4) {
      ProfitMargin1();
    }

  }, [curQuest]);



  return (
    <View style={styles.Game}>
      <View style={styles.question}>
        <Text style={styles.question_element}>{curText}</Text>
      </View>
      <TextInput
        editable
        keyboardType='numeric'
        placeholder='Enter your answer'
        textAlign='center'
        value={curAnswer}
        onChangeText={text => setCurAnswer(text)}
        style={styles.input} />
      <TouchableOpacity style={styles.button}
        onPress={() => {
          updateQuestion(1);
          setCurAnswer('');
        }}>
        <Text style={styles.button_text} >Submit</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button_exit}
        onPress={() => {
          props.setTimer(0);
          props.setNon(1);

        }}>
        <Text style={styles.button_text}>If you want to finish game earlier - push me!</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  Game: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: '#ccc'
  },
  question: {
    //margin: 10,
    width: 300,
    padding: 20,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    borderRadius: 5,
    backgroundColor: '#fff'
  },
  question_element: {
    padding: 5,
  },
  input: {
    marginTop: 20,
    padding: 15,
    width: 300,
    fontSize: 20,
    alignItems: 'center',
    borderRadius: 5,
    backgroundColor: '#fff'
  },
  button: {
    margin: 20,
    padding: 15,
    width: 300,
    alignItems: 'center',
    borderRadius: 5,
    backgroundColor: '#223764',
    color: '#fff',
  },
  button_exit: {
    margin: 30,
    padding: 10,
    width: 250,
    alignItems: 'center',
    borderRadius: 5,
    backgroundColor: '#86bfe8',
  },
  button_text: {
    fontSize: 18,
    color: '#fff',
    textAlign: 'center',
  },
  button_text_ex: {
    fontSize: 18,
    color: '#fff',
    textAlign: 'center',
    color: 'black',
  }
}
);

export default GameContext