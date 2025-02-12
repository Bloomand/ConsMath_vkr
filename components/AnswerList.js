import React from "react";
import { View, Text, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const AnswerList = ({ data, styles }) => {
  return (
    <SafeAreaView style={styles.safe}>
      <Text>Questions:</Text>
      <View>
        {data.map((element, index) => {
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
        })}
      </View>
    </SafeAreaView>
  );
};

export default AnswerList;
