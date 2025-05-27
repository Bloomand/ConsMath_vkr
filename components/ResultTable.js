import React from "react";
import { View, Text } from "react-native";

function parseValue(val) {
  if (val === null || val === undefined) return null;
  if (typeof val === "number") return val;
  if (typeof val === "string" && val.trim() !== "") {
    const parsed = parseFloat(val.trim());
    return isNaN(parsed) ? null : parsed;
  }
  return null;
}

const formatNumber = (value) => {
  if (value === "N/A" || value === null || value === undefined) return "N/A";
  if (typeof value === "number") {
    return value % 1 === 0 ? value.toString() : value.toFixed(1);
  }
  return value;
};

const ResultTable = ({
  data,
  scoreData,
  mean,
  twentyPercentMean,
  time,
  styles,
  trainingType
}) => {
  const isEndless = trainingType === "Endless";

  // Подсчитываем количество правильных/неправильных ответов
  const totalAnswers = data.length;
  const rightAnswers = data.filter((el) => {
    const pA = parseValue(el.answer);
    const pE = parseValue(el.expect);
    return pA !== null && pA === pE;
  }).length;
  const wrongAnswers = totalAnswers - rightAnswers;

  // Среднее время на вопрос (если не endless)
  const secondsPerQuestion = isEndless
    ? "N/A"
    : totalAnswers > 0
    ? time / totalAnswers
    : 0;

  // Данные для таблицы
  const stats = [
    { label: "Total answers", value: totalAnswers, key: "total" },
    { label: "Right answers", value: rightAnswers, key: "right" },
    { label: "Wrong answers", value: wrongAnswers, key: "wrong" },
    { label: "Seconds per question", value: secondsPerQuestion, key: "seconds" }
  ];

  // Рендер одной строки таблицы
  const renderTableRow = (label, key) => {
    const statItem = stats.find((s) => s.key === key);
    const yourResultValue = statItem ? statItem.value : "N/A";

    // Берём значения из scoreData, mean, twentyPercentMean
    const yourBestResult = scoreData[key];
    const allUsers = mean[key];
    const top20 = twentyPercentMean[key];

    // Для endless-режима seconds = "N/A"
    const displayValue = isEndless && key === "seconds" ? "N/A" : formatNumber(yourResultValue);
    const displayBest = isEndless && key === "seconds" ? "N/A" : formatNumber(yourBestResult);
    const displayAll = isEndless && key === "seconds" ? "N/A" : formatNumber(allUsers);
    const displayTop20 = isEndless && key === "seconds" ? "N/A" : formatNumber(top20);


    return (
      <View style={styles.table_line} key={key}>
        <View style={styles.element_view}>
          <Text style={styles.element}>{label}</Text>
        </View>
        <View style={styles.element_view}>
          <Text style={styles.element}>{displayValue}</Text>
        </View>
        <View style={styles.element_view}>
          <Text style={styles.element}>{displayBest}</Text>
        </View>
        <View style={styles.element_view}>
          <Text style={styles.element}>{displayAll}</Text>
        </View>
        <View style={styles.element_view}>
          <Text style={styles.element}>{displayTop20}</Text>
        </View>
      </View>
    );
  };

  return (
    <View>
      {/* Шапка таблицы */}
      <View style={styles.table_line}>
        <View style={styles.header_view}>
          <Text style={styles.header}>o</Text>
        </View>
        <View style={styles.header_view}>
          <Text style={styles.header}>Your result</Text>
        </View>
        <View style={styles.header_view}>
          <Text style={styles.header}>Your best result</Text>
        </View>
        <View style={styles.header_view}>
          <Text style={styles.header}>All users</Text>
        </View>
        <View style={styles.header_view}>
          <Text style={styles.header}>Top 20% users</Text>
        </View>
      </View>

      {/* Строки таблицы со статистикой */}
      {stats.map((stat) => renderTableRow(stat.label, stat.key))}
    </View>
  );
};

export default ResultTable;
