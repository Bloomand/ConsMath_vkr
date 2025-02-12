import React from "react";
import { View, Text, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const ResultTable = ({ data, scoreData, mean, twentyPercentMean, time, styles }) => {
  const listAnswers = data.map((element, index) => {
    const { num1, num2, arif, answer, expect } = element;
    let answerText = `Your answer is ${answer}`;
    let percentError = answer === expect ? 0 : 100;
    let backgroundColor = answer === expect ? "#bfdbc5" : "#dbc0c5";

    if (answer === "") {
      answerText = "No answer was provided.";
    }

    return (
      <View key={index} style={[styles.item, { backgroundColor }]}>
        <View style={styles.num_item}>
          <Text>#{index + 1}</Text>
        </View>
        <View>
          <Text>
            {num1.toLocaleString()} {arif} {num2.toLocaleString()}
          </Text>
          <Text>= {expect.toLocaleString()}</Text>
          <Text style={styles.text_bold}>{answerText}</Text>
          <Text style={styles.text_bold}>Error is {percentError}%</Text>
        </View>
      </View>
    );
  });

  const rightAnswers = data.filter((el) => el.answer === el.expect).length;
  const stats = [
    { label: "Total answers", value: data.length, key: "total" },
    { label: "Right answers", value: rightAnswers, key: "right" },
    { label: "Wrong answers", value: data.length - rightAnswers, key: "wrong" },
    { label: "Seconds per question", value: Math.floor(time / data.length), key: "seconds" },
  ];

  return (
    <View>
      <View style={styles.table_line}>
        {["o", "Your result", "Your best result", "All users", "Top 20% users"].map((header, index) => (
          <View key={index} style={styles.header_view}>
            <Text style={styles.header}>{header}</Text>
          </View>
        ))}
      </View>

      {stats.map(({ label, value, key }) => (
        <View key={key} style={styles.table_line}>
          {[label, value, scoreData[key], mean[key], twentyPercentMean[key]].map((item, index) => (
            <View key={index} style={styles.element_view}>
              <Text style={styles.element}>{item}</Text>
            </View>
          ))}
        </View>
      ))}

      <ScrollView>{listAnswers}</ScrollView>
    </View>
  );
};

export default ResultTable;
