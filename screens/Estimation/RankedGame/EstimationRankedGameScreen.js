import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    ScrollView,
  } from "react-native";
  import React, { useState, useMemo, useEffect } from "react";
  import GameEst from "../../../components/GameEst.js";
  import { SafeAreaView } from "react-native-safe-area-context";
  import { useUserInfo } from "../../../hooks/useUserInfo.js";
  import { useSetUserInfo } from "../../../hooks/useSetUserInfo.js";
  import { useTotalRankInfo } from "../../../hooks/useTotalRankInfo.js";
  
import { styles } from "./EstimationRankedGameScreen.styles.js";

  const TYPE = "estimation";
  const SUBTYPE = "ranked";
  
  const EstimationRankedGameScreen = ({ navigation, route }) => {
    const [timerCount, setTimer] = useState();
    const [Component, setComponent] = useState();
    const [time, setTime] = useState();
    const [data, setData] = useState([]);
    const [nonElem, setNon] = useState();
  
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
      shouldSave: nonElem,
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
        setNon(1);
      } else {
        setComponent(
          <View style={styles.RankedGame}>
            <View style={styles.timer}>
              <Text style={styles.timerText}>{viewTimer}</Text>
            </View>
            <GameEst
              difficulty={route.params.difficulty}
              type={route.params.type}
              setData={setData}
              setNon={setNon}
              setTimer={setTimer}
            />
          </View>
        );
      }
    }, [timerCount, navigation]);
  
    useEffect(() => {
      let listAnswers = [];
      let numAnswer = 0;
      let rightAnswers = 0;
      let color = "#dbc0c5";
      data.forEach((element) => {
        numAnswer++;
        let ans = `Your answer is ${element.answer}`;
        let percentError =
          Math.floor(
            ((element.expect - element.answer) / element.expect) * 1000
          ) / 10;
        if (percentError >= -20 && percentError <= 20) {
          color = "#bfdbc5";
          rightAnswers++;
        } else {
          color = "#dbc0c5";
        }
        if (percentError > 0) {
          percentError = "+" + percentError;
        }
        if (element.answer == "") {
          ans = "No answer was provided.";
        }
        listAnswers.push(
          <View key={numAnswer} style={styles.item} backgroundColor={color}>
            <View style={styles.num_item}>
              <Text>#{numAnswer}</Text>
            </View>
            <View>
              <Text>
                {element.num1.toLocaleString()}
                {element.arif.toLocaleString()}
                {element.num2.toLocaleString()} ={" "}
              </Text>
              <Text>{element.expect.toLocaleString()}</Text>
              <Text style={styles.text_bold}>{ans}</Text>
              <Text style={styles.text_bold}>Error is {percentError}%</Text>
            </View>
          </View>
        );
      });
      setComponent(
        <View>
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
          <View style={styles.table_line}>
            <View style={styles.element_view}>
              <Text style={styles.element}>Total answers</Text>
            </View>
            <View style={styles.element_view}>
              <Text style={styles.element}>{data.length}</Text>
            </View>
            <View style={styles.element_view}>
              <Text style={styles.element}>{scoreData.total}</Text>
            </View>
            <View style={styles.element_view}>
              <Text style={styles.element}>{mean.total}</Text>
            </View>
            <View style={styles.element_view}>
              <Text style={styles.element}>{twentyPercentMean.total}</Text>
            </View>
          </View>
          <View style={styles.table_line}>
            <View style={styles.element_view}>
              <Text style={styles.element}>Right answers</Text>
            </View>
            <View style={styles.element_view}>
              <Text style={styles.element}>{rightAnswers}</Text>
            </View>
            <View style={styles.element_view}>
              <Text style={styles.element}>{scoreData.right}</Text>
            </View>
            <View style={styles.element_view}>
              <Text style={styles.element}>{mean.right}</Text>
            </View>
            <View style={styles.element_view}>
              <Text style={styles.element}>{twentyPercentMean.right}</Text>
            </View>
          </View>
          <View style={styles.table_line}>
            <View style={styles.element_view}>
              <Text style={styles.element}>Wrong answers</Text>
            </View>
            <View style={styles.element_view}>
              <Text style={styles.element}>{data.length - rightAnswers}</Text>
            </View>
            <View style={styles.element_view}>
              <Text style={styles.element}>{scoreData.wrong}</Text>
            </View>
            <View style={styles.element_view}>
              <Text style={styles.element}>{mean.wrong}</Text>
            </View>
            <View style={styles.element_view}>
              <Text style={styles.element}>{twentyPercentMean.wrong}</Text>
            </View>
          </View>
          <View style={styles.table_line}>
            <View style={styles.element_view}>
              <Text style={styles.element}>Seconds per question</Text>
            </View>
            <View style={styles.element_view}>
              <Text style={styles.element}>{Math.floor(time / data.length)}</Text>
            </View>
            <View style={styles.element_view}>
              <Text style={styles.element}>{scoreData.seconds}</Text>
            </View>
            <View style={styles.element_view}>
              <Text style={styles.element}>{mean.seconds}</Text>
            </View>
            <View style={styles.element_view}>
              <Text style={styles.element}>{twentyPercentMean.seconds}</Text>
            </View>
          </View>
  
          <SafeAreaView style={styles.safe}>
            <Text>Questions:</Text>
            <ScrollView>{listAnswers}</ScrollView>
          </SafeAreaView>
        </View>
      );
    }, [nonElem, scoreData]);
  
    return <View style={styles.RankedGame}>{Component}</View>;
  };
  
  export default EstimationRankedGameScreen;
  