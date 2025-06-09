import { useState, useEffect } from "react";
import { Text, View, TouchableOpacity, TextInput } from "react-native";
import { styles } from "./GamePrecise.styles";

const GamePrecise = ({ difficulty, type, setData, setTimer, setShouldSave }) => {
  const [curNum1, setCurNum1] = useState(14344);
  const [curArif, setCurArif] = useState("+");
  const [curNum2, setCurNum2] = useState(56344);
  const [curExpect, setCurExpect] = useState();
  const [curAnswer, setCurAnswer] = useState();

  const [curView1, setView1] = useState(14344);
  const [curView2, setView2] = useState(56344);

  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
  }

  function addition() {
    if (difficulty == 0) {
      setCurNum1(getRandomInt(1, 20));
      setCurNum2(getRandomInt(1, 20));
    } else if (difficulty == 1) {
      setCurNum1(getRandomInt(1, 100));
      setCurNum2(getRandomInt(1, 100));
    } else if (difficulty == 2) {
      setCurNum1(getRandomInt(10, 999));
      setCurNum2(getRandomInt(10, 99));
    }
    setCurArif("  +  ");
  }

  function subtraction() {
    if (difficulty == 0) {
      setCurNum1(getRandomInt(3, 39));
      setCurNum2(getRandomInt(1, 20));
    } else if (difficulty == 1) {
      setCurNum1(getRandomInt(41, 120));
      let dop2 = getRandomInt(3, 99);
      while (dop2 == 10) {
        dop2 = getRandomInt(3, 99);
      }
      setCurNum2(dop2);
    } else if (difficulty == 2) {
      setCurNum1(getRandomInt(3, 300));
      let dop2 = getRandomInt(11, 199);
      while (dop2 % 10 == 0) {
        dop2 = getRandomInt(11, 199);
      }
      setCurNum2(dop2);
    }
    setCurArif("  -  ");
  }

  function multiplication() {
    if (difficulty == 0) {
      setCurNum1(getRandomInt(1, 10));
      setCurNum2(getRandomInt(1, 10));
    } else if (difficulty == 1) {
      let dop1 = getRandomInt(1, 19);
      let dop2 = getRandomInt(1, 19);
      let zero = getRandomInt(0, 2);
      dop1 *= Math.pow(10, zero);
      zero = getRandomInt(0, 2);
      dop2 *= Math.pow(10, zero);
      setCurNum1(dop1);
      setCurNum2(dop2);
    } else if (difficulty == 2) {
      let dop1 = getRandomInt(3, 300);
      let dop2 = getRandomInt(11, 199);
      let zero = getRandomInt(0, 5);
      dop1 *= Math.pow(10, zero);
      zero = getRandomInt(0, 5);
      dop2 *= Math.pow(10, zero);
      setCurNum1(dop1);
      setCurNum2(dop2);
    }
    setCurArif("  x  ");
  }

  function division() {
    if (difficulty == 0) {
      let dop1 = getRandomInt(1, 10);
      let rez = getRandomInt(1, 10);
      setCurNum2(dop1);
      setCurNum1(dop1 * rez);
    } else if (difficulty == 1) {
      let dop1 = getRandomInt(1, 10);
      let rez = getRandomInt(1, 10);
      let zero = getRandomInt(0, 1);
      dop1 *= Math.pow(10, zero);
      zero = getRandomInt(0, 1);
      rez *= Math.pow(10, zero);
      setCurNum2(dop1);
      setCurNum1(dop1 * rez);
    } else if (difficulty == 2) {
      let dop1 = getRandomInt(1, 10);
      let rez = getRandomInt(1, 10);
      let zero = getRandomInt(0, 1);
      dop1 *= Math.pow(10, zero);
      zero = getRandomInt(3, 9);
      rez *= Math.pow(10, zero);
      setCurNum2(dop1);
      setCurNum1(dop1 * rez);
    }
    setCurArif("  /  ");
  }

  function percent() {
    const percents = [10, 20, 30, 40, 50, 60, 70, 80, 90, 25, 75];
    if (difficulty == 0) {
      setCurNum1(getRandomInt(1, 9) * 10);
      setCurNum2(getRandomInt(1, 10) * 10);
    } else if (difficulty == 1) {
      let zero = getRandomInt(2, 5);
      let dop2 = getRandomInt(1, 9) * Math.pow(10, zero);
      let dop1 = getRandomInt(0, 10);
      setCurNum1(percents[dop1]);
      setCurNum2(dop2);
    } else if (difficulty == 2) {
      let zero = getRandomInt(2, 9);
      let dop2 = getRandomInt(1, 9) * Math.pow(10, zero);
      let dop1 = getRandomInt(0, 10);
      setCurNum1(percents[dop1]);
      setCurNum2(dop2);
    }
    setCurArif("%  of  ");
  }

  function random() {
    let choice = getRandomInt(0, 4);
    if (choice == 0) {
      addition();
    } else if (choice == 1) {
      subtraction();
    } else if (choice == 2) {
      multiplication();
    } else if (choice == 3) {
      division();
    } else if (choice == 4) {
      percent();
    }
  }

  function updateQuestion(updateType) {
    if (type == 0) {
      addition();
    } else if (type == 1) {
      subtraction();
    } else if (type == 2) {
      multiplication();
    } else if (type == 3) {
      division();
    } else if (type == 4) {
      percent();
    } else if (type == 5) {
      random();
    }
    if (!curAnswer) {
      setCurAnswer("");
    }
    if (updateType == 1) {
      const object = {
        num1: curNum1,
        arif: curArif,
        num2: curNum2,
        expect: curExpect,
        answer: curAnswer,
      };
      setData((prev) => [...prev, object]);
    }
  }

  useEffect(() => {
    updateQuestion(0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setView1(curNum1);
    if (curNum1 >= 1000 && curNum1 <= 999999 && curNum1 % 100 === 0) {
      setView1(curNum1 / 1000 + " thousand");
    }
    if (curNum1 >= 1000000 && curNum1 <= 999999999 && curNum1 % 1000 === 0) {
      setView1(curNum1 / 1000000 + " million");
    }
    if (curNum1 >= 1000000000 && curNum1 <= 999999999999 && curNum1 % 1000000 === 0) {
      setView1(curNum1 / 1000000000 + " billion");
    }
  }, [curNum1]);

  useEffect(() => {
    setView2(curNum2);
    if (curNum2 >= 1000 && curNum2 <= 999999 && curNum2 % 100 === 0) {
      setView2(curNum2 / 1000 + " thousand");
    }
    if (curNum2 >= 1000000 && curNum2 <= 999999999 && curNum2 % 10000 === 0) {
      setView2(curNum2 / 1000000 + " million");
    }
    if (curNum2 >= 1000000000 && curNum2 <= 999999999999 && curNum2 % 10000000 === 0) {
      setView2(curNum2 / 1000000000 + " billion");
    }
  }, [curNum2]);

  useEffect(() => {
    if (type == 0) {
      setCurExpect(curNum1 + curNum2);
    } else if (type == 1) {
      setCurExpect(curNum1 - curNum2);
    } else if (type == 2) {
      setCurExpect(curNum1 * curNum2);
    } else if (type == 3) {
      setCurExpect(curNum1 / curNum2);
    } else if (type == 4) {
      setCurExpect((curNum1 / 100) * curNum2);
    } else {
      if (curArif == "  +  ") {
        setCurExpect(curNum1 + curNum2);
      } else if (curArif == "  -  ") {
        setCurExpect(curNum1 - curNum2);
      } else if (curArif == "  x  ") {
        setCurExpect(curNum1 * curNum2);
      } else if (curArif == "  /  ") {
        setCurExpect(curNum1 / curNum2);
      } else if (curArif == "%  of  ") {
        setCurExpect((curNum1 / 100) * curNum2);
      }
    }
  }, [curNum2, type, curArif, curNum1]);

  return (
    <View style={styles.Game}>
      <View style={styles.question}>
        <Text style={styles.question_element}>{curView1.toLocaleString()}</Text>
        <Text style={styles.question_element}>{curArif}</Text>
        <Text style={styles.question_element}>{curView2.toLocaleString()}</Text>
      </View>
      <TextInput
        editable
        keyboardType="numeric"
        placeholder="Enter your answer"
        textAlign="center"
        value={curAnswer}
        onChangeText={(text) => setCurAnswer(text)}
        style={styles.input}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          updateQuestion(1);
          setCurAnswer("");
        }}
      >
        <Text style={styles.button_text}>Submit</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button_exit}
        onPress={() => {
          setTimer(0);
          setShouldSave(1);
        }}
      >
        <Text style={styles.button_text_ex}>
          If you want to finish the game earlier - push me!
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default GamePrecise;
