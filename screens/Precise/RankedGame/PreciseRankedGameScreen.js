import React, { useEffect, useMemo, useState } from "react";
import { ScrollView, Text, View } from "react-native";

import AnswerList from "../../../components/AnswerList";
import GamePrecise from "../../../components/GamePrecise/GamePrecise";
import ResultTable from "../../../components/ResultTable";
import { styles } from "../RankedGame/PreciseRankedGameScreen.styles";
import { useSetUserInfo } from "../../../hooks/useSetUserInfo";
import { useTotalRankInfo } from "../../../hooks/useTotalRankInfo";
import { useUserInfo } from "../../../hooks/useUserInfo";

const TYPE = "precise";
const SUBTYPE = "ranked";

const difficultyMap = {
  0: 60,
  1: 180,
  2: 240,
};

const PreciseRankedGameScreen = ({ navigation, route }) => {
  const [timerCount, setTimer] = useState(
    difficultyMap[route.params.difficulty] || 60
  );
  const [component, setComponent] = useState();
  const [time, setTime] = useState(
    difficultyMap[route.params.difficulty] || 60
  );
  const [data, setData] = useState([]);
  const [shouldSave, setShouldSave] = useState();
  const [viewTimer, setViewTimer] = useState("0:00");

  const { userInfo, setUserInfo } = useUserInfo();
  console.log(userInfo, "userInfo");
  const scoreData = useMemo(() => userInfo[TYPE][SUBTYPE], [userInfo]);

  useSetUserInfo({
    data,
    time,
    scoreData,
    setUserInfo,
    type: TYPE,
    subType: SUBTYPE,
    shouldSave,
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

    const selectedTime = difficultyMap[route.params.difficulty] || 60;
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
    if (shouldSave) return;
    if (timerCount <= 0) {
      setShouldSave(1);
      return;
    }

    setComponent(
      <View style={styles.RankedGame}>
        <View style={styles.timer}>
          <Text style={styles.timerText}>{viewTimer}</Text>
        </View>
        <GamePrecise
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
    if (!shouldSave || timerCount > 0) return;
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
        <ScrollView>
          <AnswerList data={data} styles={styles} type="Precise" />
        </ScrollView>
      </View>
    );
  }, [shouldSave, scoreData]);

  return <View style={styles.RankedGame}>{component}</View>;
};

export default PreciseRankedGameScreen;
