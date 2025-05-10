import React from "react";
import { View, Text, ScrollView } from "react-native";

/**
 * Функция для парсинга значения:
 * - строку "5" превращает в число 5,
 * - пустую строку в null,
 * - число оставляет числом,
 * - всё остальное тоже приводит к null.
 */
function parseValue(val) {
  if (val === null || val === undefined) return null;
  if (typeof val === "number") return val;
  if (typeof val === "string" && val.trim() !== "") {
    const parsed = parseFloat(val.trim());
    return isNaN(parsed) ? null : parsed;
  }
  return null;
}

export default function AnswerList({ data, styles }) {
  const listAnswers = data.map((element, index) => {
    const { num1, num2, arif, answer, expect } = element;

    // Парсим строку ответа и ожидаемое значение в числа
    const parsedAnswer = parseValue(answer);
    const parsedExpect = parseValue(expect);

    // Проверяем, совпадают ли
    const isCorrect = parsedAnswer !== null && parsedAnswer === parsedExpect;
    const percentError = isCorrect ? 0 : 100;
    const backgroundColor = isCorrect ? "#bfdbc5" : "#dbc0c5";

    // Текст ответа
    const answerText =
      !answer || answer.trim() === ""
        ? "No answer was provided."
        : `Your answer is ${answer}`;

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

  // Оборачиваем список в ScrollView, чтобы можно было прокручивать
  return <ScrollView>{listAnswers}</ScrollView>;
}
