import React, { useState, useEffect, useMemo } from "react";
import { Text, View, ScrollView } from "react-native";
import GameEstimation from "../../../components/GameEstimation/GameEstimation.js";

import { useUserInfo } from "../../../hooks/useUserInfo.js";
import { useSetUserInfo } from "../../../hooks/useSetUserInfo.js";
import { useTotalRankInfo } from "../../../hooks/useTotalRankInfo.js";

import { styles } from "./EstimationEndlessGameScreen.styles.js";
import AnswerList from "../../../components/AnswerList";
import ResultTable from "../../../components/ResultTable";

const TYPE = "estimation";
const SUBTYPE = "endless";

const EstimationEndlessGameScreen = ({ navigation, route }) => {
  const [timerCount, setTimer] = useState();
  const [Component, setComponent] = useState();
  const [data, setData] = useState([]);
  const [nonElem, setNon] = useState(0);

  const { userInfo, setUserInfo } = useUserInfo();
  const scoreData = useMemo(() => userInfo[TYPE][SUBTYPE], [userInfo]);

  useSetUserInfo({
    data,
    time: 0,
    scoreData,
    setUserInfo,
    type: TYPE,
    subType: SUBTYPE,
    shouldSave: nonElem,
  });

  const { mean, twentyPercentMean } = useTotalRankInfo(TYPE, SUBTYPE);

  useEffect(() => {
    if (route.params.mode) {
      route.params.mode = 1;
    } else {
      route.params.mode = 0;
    }
    setComponent(
      <View style={styles.EndlessGame}>
        <Text></Text>
      </View>
    );
  }, [route]);

  useEffect(() => {
    setComponent(
      <View style={styles.EndlessGame}>
        <Text></Text>
        <GameEstimation
          difficulty={route.params.difficulty}
          type={route.params.type}
          setData={setData}
          setNon={setNon}
        />
      </View>
    );
  }, [navigation]);

  useEffect(() => {
    if (nonElem == 0) {
      setComponent(
        <View style={styles.EndlessGame}>
          <Text></Text>
          <GameEstimation
            difficulty={route.params.difficulty}
            type={route.params.type}
            setData={setData}
            setNon={setNon}
            setTimer={setTimer}
          />
        </View>
      );
    } else {
      setComponent(
        <View>
          <ResultTable
            data={data}
            scoreData={scoreData}
            mean={mean}
            twentyPercentMean={twentyPercentMean}
            time={timerCount}
            styles={styles}
            trainingType="Endless"
          />
          <ScrollView><AnswerList data={data} styles={styles} /></ScrollView>
        </View>
      );
    }
  }, [nonElem, scoreData]);

  return <View style={styles.EndlessGame}>{Component}</View>;
};

export default EstimationEndlessGameScreen;
