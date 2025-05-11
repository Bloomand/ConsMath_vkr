import React, { useState, useEffect, useMemo } from "react";
import { Text, View, ScrollView } from "react-native";

import GameContext from "../../../components/GameContext/GameContext.js";
import ResultTable from "../../../components/ResultTable";
import AnswerList from "../../../components/AnswerList";

import { useUserInfo } from "../../../hooks/useUserInfo.js";
import { useSetUserInfo } from "../../../hooks/useSetUserInfo.js";
import { useTotalRankInfo } from "../../../hooks/useTotalRankInfo.js";
import { styles } from "./MathInContextRankedGameScreen.styles.js";

const TYPE = "context";
const SUBTYPE = "ranked";

const MathInContextRankedGameScreen = ({ navigation, route }) => {
  const [timerCount, setTimer] = useState();
  const [Component, setComponent] = useState();
  const [time, setTime] = useState();
  const [data, setData] = useState([]);
  const [shouldSave, setShouldSave] = useState();
  const [viewTimer, setViewTimer] = useState("0:00");

  const { userInfo, setUserInfo } = useUserInfo();
  const scoreData = useMemo(() => userInfo[TYPE][SUBTYPE], [userInfo]);

  useSetUserInfo({
    data,
    time,
    scoreData,
    setUserInfo,
    type: TYPE,
    subType: SUBTYPE,
    shouldSave: shouldSave,
  });

  const { mean, twentyPercentMean } = useTotalRankInfo(TYPE, SUBTYPE);

  useEffect(() => {
    const minutes = Math.floor(timerCount / 60);
    const seconds = String(timerCount % 60).padStart(2, "0");
    setViewTimer(`${minutes}:${seconds}`);
  }, [timerCount]);


  useEffect(() => {
    setComponent(
      <View style={styles.RankedGame}>
        <View style={styles.timer}>
          <Text style={styles.timerText}>{viewTimer}</Text>
        </View>
      </View>
    );

    const selectedTime = 60;
    setTimer(selectedTime);
    setTime(selectedTime);
  }, [route]);


  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(interval);
  }, []);


  useEffect(() => {
    let interval = setInterval(() => {
      setTimer((lastTimerCount) => {
        return lastTimerCount - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (timerCount <= 0) {
      setShouldSave(1);
      return;
    }
    setComponent(
      <View style={styles.RankedGame}>
        <View style={styles.timer}>
          <Text style={styles.timerText}>{viewTimer}</Text>
        </View>
        <GameContext
          difficulty={route.params.difficulty}
          type={route.params.type}
          setData={setData}
          setShouldSave={setShouldSave}
          setTimer={setTimer}
        />
      </View>
    );
  }, [timerCount, navigation]);

  useEffect(() => {
    setComponent(
      <View>
        <ResultTable
          data={data}
          scoreData={scoreData}
          mean={mean}
          twentyPercentMean={twentyPercentMean}
          time={time}
          styles={styles}
          trainingType="Timed"
        />
        <ScrollView><AnswerList data={data} styles={styles} type="MathInContext"/></ScrollView>
      </View>
    );
  }, [shouldSave, scoreData]);

  return <View style={styles.RankedGame}>{Component}</View>;
};
export default MathInContextRankedGameScreen;
