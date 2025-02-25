import { useState, useEffect } from "react";
import { Text, View, TouchableOpacity, TextInput } from "react-native";
import { styles } from "./GamePrecise.styles";

const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const GamePrecise = ({ difficulty, type, setData, setTimer, setNon }) => {
  const [curNum1, setCurNum1] = useState(0);
  const [curNum2, setCurNum2] = useState(0);
  const [curArif, setCurArif] = useState("");
  const [curExpect, setCurExpect] = useState(0);
  const [curAnswer, setCurAnswer] = useState("");

  const operations = {
    addition: { symbol: "  +  ", generate: () => [getRandomInt(1, 100), getRandomInt(1, 100)] },
    subtraction: { symbol: "  -  ", generate: () => [getRandomInt(10, 200), getRandomInt(1, 100)] },
    multiplication: { symbol: "  x  ", generate: () => [getRandomInt(1, 20), getRandomInt(1, 20)] },
    division: {
      symbol: "  /  ",
      generate: () => {
        let num2 = getRandomInt(1, 10);
        return [num2 * getRandomInt(1, 10), num2];
      },
    },
    percent: {
      symbol: "% of  ",
      generate: () => [getRandomInt(10, 90), getRandomInt(100, 10000)],
    },
  };

  const getOperation = (type) => {
    switch (type) {
      case 0:
        return operations.addition;
      case 1:
        return operations.subtraction;
      case 2:
        return operations.multiplication;
      case 3:
        return operations.division;
      case 4:
        return operations.percent;
      default:
        return Object.values(operations)[getRandomInt(0, 4)];
    }
  };

  const generateQuestion = (isNewRound = false) => {
    const { symbol, generate } = getOperation(type);
    const [num1, num2] = generate();
    setCurNum1(num1);
    setCurNum2(num2);
    setCurArif(symbol);

    if (isNewRound) {
      setData((prev) => [
        ...prev,
        { num1: curNum1, arif: curArif, num2: curNum2, expect: curExpect, answer: curAnswer },
      ]);
    }
    setCurAnswer("");
  };

  useEffect(() => {
    generateQuestion();
  }, []);

  useEffect(() => {
    let result;
    switch (curArif) {
      case "  +  ":
        result = curNum1 + curNum2;
        break;
      case "  -  ":
        result = curNum1 - curNum2;
        break;
      case "  x  ":
        result = curNum1 * curNum2;
        break;
      case "  /  ":
        result = curNum1 / curNum2;
        break;
      case "% of  ":
        result = (curNum1 / 100) * curNum2;
        break;
      default:
        result = 0;
    }
    setCurExpect(result);
  }, [curNum1, curNum2, curArif]);

  return (
    <View style={styles.Game}>
      <View style={styles.question}>
        <Text style={styles.question_element}>{curNum1.toLocaleString()}</Text>
        <Text style={styles.question_element}>{curArif}</Text>
        <Text style={styles.question_element}>{curNum2.toLocaleString()}</Text>
      </View>
      <TextInput
        keyboardType="numeric"
        placeholder="Enter your answer"
        textAlign="center"
        value={curAnswer}
        onChangeText={setCurAnswer}
        style={styles.input}
      />
      <TouchableOpacity style={styles.button} onPress={() => generateQuestion(true)}>
        <Text style={styles.button_text}>Submit</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button_exit} onPress={() => setNon(1)}>
        <Text style={styles.button_text_ex}>If you want to finish the game earlier - push me!</Text>
      </TouchableOpacity>
    </View>
  );
};

export default GamePrecise;
