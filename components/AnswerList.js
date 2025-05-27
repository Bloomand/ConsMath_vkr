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

function calculateErrorPercentage(userAnswer, correctAnswer, gameType) {
  if (userAnswer === null || userAnswer === undefined) {
    return { value: 100, direction: '' };
  }

  // Для режима Precise - только 0% или 100%
  if (gameType === "Precise") {
    const value = userAnswer === correctAnswer ? 0 : 100;
    return { value, direction: '' };
  }

  // Для других режимов - точный расчет с определением направления
  const difference = correctAnswer - userAnswer;
  const absoluteDifference = Math.abs(difference);
  let percentageDifference = (absoluteDifference / correctAnswer) * 100;
  percentageDifference = Math.round(percentageDifference * 10) / 10;
  
  const direction = difference > 0 ? '-' : difference < 0 ? '+' : '';
  return {
    value: Math.min(percentageDifference, 100),
    direction
  };
}


export default function AnswerList({ data, styles, type }) {
  const listAnswers = data.map((element, index) => {
    // Деструктурируем общие поля
    const { num1, num2, arif, answer, expect, quest } = element;
    const parsedAnswer = parseValue(answer);
    const parsedExpect = parseValue(expect);

    // Проверяем, совпадают ли
    const { value: percentError, direction } = calculateErrorPercentage(parsedAnswer, parsedExpect, type);
    const isCorrect = type === "Precise" 
      ? percentError === 0 
      : percentError <= 20;

    const backgroundColor = isCorrect ? "#bfdbc5" : "#dbc0c5";

    // Рендерим вопрос в зависимости от типа
    const questionContent = type === "MathInContext" ? (
      <Text style={{ width: 240 }}>{quest}</Text>
    ) : (
      <Text>
        {num1?.toLocaleString()} {arif} {num2?.toLocaleString()}
      </Text>
    );


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
          {questionContent}
          <Text>= {expect.toLocaleString()}</Text>
          <Text style={styles.text_bold}>{answerText}</Text>
          <Text style={styles.text_bold}>Error is {direction}{percentError}%</Text>
        </View>
      </View>
    );
  });

  // Оборачиваем список в ScrollView, чтобы можно было прокручивать
  return <ScrollView>{listAnswers}</ScrollView>;
}
