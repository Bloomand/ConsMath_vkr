import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import { useEffect, useState, useCallback } from 'react';
import React from 'react';
import Game from '../../components/Precise/Game.js';

const RankedGame = ({ navigation, route }) => {
    const [timerCount, setTimer] = useState();
    const [Component, setComponent] = useState();
    const [time, setTime] = useState();
    const [data, setData] = useState([]);
    const [nonElem, setNon] = useState();
    const [viewTimer, setViewTimer] = useState("0:00");

    const [userInfo, setUserInfo] = useState({
        total: 0,
        right: 0,
        wrong: 0,
        seconds: 0,
    });

    const [mode, setMode] = useState(route.params.mode);

    useEffect(() => {
        navigation.setParams({ mode: 1 });
        setMode(1);
    }, [navigation]);

    useEffect(() => {
        let min = Math.floor(timerCount / 60);
        let sec = timerCount % 60;
        if (sec < 10) {
            sec = "0" + sec;
        }
        setViewTimer(min + ":" + sec);
    }, [timerCount]);

    useEffect(() => {
        setComponent(
            <View style={styles.RankedGame}>
                <View style={styles.timer}>
                    <Text style={styles.timerText}>{viewTimer}</Text>
                </View>
                <Text></Text>
            </View>
        );

        if (route.params.dificult == 0) {
            setTimer(60);
            setTime(60);
        } else if (route.params.dificult == 1) {
            setTimer(180);
            setTime(180);
        } else if (route.params.dificult == 2) {
            setTimer(240);
            setTime(240);
        }
    }, [route]);

    useEffect(() => {
        let interval = setInterval(() => {
            setTimer(lastTimerCount => lastTimerCount - 1);
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
                    <Game
                        dificult={route.params.dificult}
                        type={route.params.type}
                        setData={setData}
                        setNon={setNon}
                        setTimer={setTimer}
                    />
                </View>
            );
        }
    }, [timerCount, navigation]);

    return (
        <View style={styles.RankedGame}>
            {Component}
        </View>
    );
}

const styles = StyleSheet.create({
    RankedGame: {
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        paddingTop: 10,
        paddingLeft: 20,
        paddingRight: 20,
        backgroundColor: '#ccc',
    },
    timer: {
        padding: 5,
        width: 300,
        alignItems: 'center',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        backgroundColor: '#223764'
    },
    timerText: {
        fontSize: 20,
        color: 'white',
    }
});

export default RankedGame;
