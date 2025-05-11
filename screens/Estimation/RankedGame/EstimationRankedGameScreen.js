import React, { useState, useEffect, useMemo } from "react";
import { Text, View, ScrollView } from "react-native";

import GameEstimation from "../../../components/GameEstimation/GameEstimation.js";
import ResultTable from "../../../components/ResultTable";
import AnswerList from "../../../components/AnswerList";

import { useUserInfo } from "../../../hooks/useUserInfo.js";
import { useSetUserInfo } from "../../../hooks/useSetUserInfo.js";
import { useTotalRankInfo } from "../../../hooks/useTotalRankInfo.js";
import { styles } from "./EstimationRankedGameScreen.styles.js";

const TYPE = "estimation";
const SUBTYPE = "ranked";

const EstimationRankedGameScreen = ({ navigation, route }) => {
  const [timerCount, setTimer] = useState();
  const [сomponent, setComponent] = useState();
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
    let min = Math.floor(timerCount / 60);
    let sec = timerCount % 60;
    if (sec < 10) {
      sec = "0" + sec;
    }
    setViewTimer(min + ":" + sec);
  }, [timerCount]);
  useEffect(() => {
    if (route.params.mode) {
      route.params.mode = 1;
    } else {
      route.params.mode = 0;
    }
    setComponent(
      <View style={styles.RankedGame}>
        <View style={styles.timer}>
          <Text style={styles.timerText}>{viewTimer}</Text>
        </View>
      </View>
    );

    if (route.params.difficulty == 1) {
      setTimer(180);
      setTime(180);
    } else if (route.params.difficulty == 2) {
      setTimer(240);
      setTime(240);
    }
  }, [route]);

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
    } else {
      setComponent(
        <View style={styles.RankedGame}>
          <View style={styles.timer}>
            <Text style={styles.timerText}>{viewTimer}</Text>
          </View>
          <GameEstimation
            difficulty={route.params.difficulty}
            type={route.params.type}
            setData={setData}
            setNon={setShouldSave}
            setTimer={setTimer}
          />
        </View>
      );
    }
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
        <ScrollView><AnswerList data={data} styles={styles} type="Estimation"/></ScrollView>
      </View>
    );
  }, [shouldSave, scoreData]);

  return <View style={styles.RankedGame}>{сomponent}</View>;
};

export default EstimationRankedGameScreen;
