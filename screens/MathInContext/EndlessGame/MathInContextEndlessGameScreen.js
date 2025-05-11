import React, { useState, useEffect, useMemo } from "react";
import { Text, View, ScrollView } from "react-native";
import GameContext from "../../../components/GameContext/GameContext.js";

import { useUserInfo } from "../../../hooks/useUserInfo.js";
import { useSetUserInfo } from "../../../hooks/useSetUserInfo.js";
import { useTotalRankInfo } from "../../../hooks/useTotalRankInfo.js";

import { styles } from "./MathInContextEndlessGameScreen.styles.js";
import AnswerList from "../../../components/AnswerList";
import ResultTable from "../../../components/ResultTable";

const TYPE = "context";
const SUBTYPE = "endless";

const MathInContextEndlessGameScreen = ({ navigation, route }) => {
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
    setComponent(
      <View style={styles.EndlessGame}>
        <Text></Text>
      </View>
    );
  }, [route]);

  useEffect(() => {
    if (nonElem == 0) {
      setComponent(
        <View style={styles.EndlessGame}>
          <Text></Text>
          <GameContext setData={setData} setNon={setNon} setTimer={setTimer} />
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
          <ScrollView><AnswerList data={data} styles={styles} type="MathInContext"/></ScrollView>
        </View>
      );
    }
  }, [nonElem, scoreData]);

  return <View style={styles.EndlessGame}>{Component}</View>;
};

export default MathInContextEndlessGameScreen;
