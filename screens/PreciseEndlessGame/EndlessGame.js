import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import { useEffect } from 'react'
import React, { useState } from 'react';
import Game from './Game.js'
import { SafeAreaView } from 'react-native-safe-area-context';


const EndlessGame = ({ navigation, route }) => {

    const [timerCount, setTimer] = useState();

    const [Component, setComponent] = useState();
    const [data, setData] = useState([]);
    const [nonElem, setNon] = useState(0);

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
        if (nonElem == 0) {
            setComponent(
                <View style={styles.EndlessGame}>
                    <Text></Text>
                    <Game dificult={route.params.dificult} type={route.params.type} setData={setData} setNon={setNon} setTimer={setTimer} />
                </View>
            );
        } else {
            let listAnswers = [];
            let numAnswer = 0;
            let rightAnswers = 0;
            let color = '#dbc0c5';
            data.forEach((element) => {
                numAnswer++;
                let ans = `Your answer is ${element.answer}`;
                if (element.answer == element.expect) {
                    percentError = 0;
                    color = '#bfdbc5';
                    rightAnswers++;
                } else {
                    percentError = 100;
                    color = '#dbc0c5';
                }

                if (element.answer == "") {
                    ans = "No answer was provided.";
                }

                listAnswers.push(
                    <View key={numAnswer} style={styles.item} backgroundColor={color}>
                        <View style={styles.num_item}><Text>#{numAnswer}</Text></View>
                        <View>
                            <Text>{element.num1.toLocaleString()}{element.arif.toLocaleString()}{element.num2.toLocaleString()}</Text>
                            <Text> = {element.expect.toLocaleString()}</Text>
                            <Text style={styles.text_bold}>{ans}</Text>
                            <Text style={styles.text_bold}>Error is {percentError}%</Text>
                        </View>
                    </View>
                )
            });
            setComponent(
                <View>
                    <View style={styles.table_line}>
                        <View style={styles.header_view}><Text style={styles.header}>o</Text></View>
                        <View style={styles.header_view}><Text style={styles.header}>Your result</Text></View>
                        <View style={styles.header_view}><Text style={styles.header}>Your best result</Text></View>
                        <View style={styles.header_view}><Text style={styles.header}>All users</Text></View>
                        <View style={styles.header_view}><Text style={styles.header}>Top 20% users</Text></View>
                    </View>
                    <View style={styles.table_line}>
                        <View style={styles.element_view}><Text style={styles.element}>Total answers</Text></View>
                        <View style={styles.element_view}><Text style={styles.element}>{data.length}</Text></View>
                        <View style={styles.element_view}><Text style={styles.element}>{data.length}</Text></View>
                        <View style={styles.element_view}><Text style={styles.element}>N/A</Text></View>
                        <View style={styles.element_view}><Text style={styles.element}>N/A</Text></View>
                    </View>
                    <View style={styles.table_line}>
                        <View style={styles.element_view}><Text style={styles.element}>Right answers</Text></View>
                        <View style={styles.element_view}><Text style={styles.element}>{rightAnswers}</Text></View>
                        <View style={styles.element_view}><Text style={styles.element}>{rightAnswers}</Text></View>
                        <View style={styles.element_view}><Text style={styles.element}>N/A</Text></View>
                        <View style={styles.element_view}><Text style={styles.element}>N/A</Text></View>
                    </View>
                    <View style={styles.table_line}>
                        <View style={styles.element_view}><Text style={styles.element}>Wrong answers</Text></View>
                        <View style={styles.element_view}><Text style={styles.element}>{data.length - rightAnswers}</Text></View>
                        <View style={styles.element_view}><Text style={styles.element}>{data.length - rightAnswers}</Text></View>
                        <View style={styles.element_view}><Text style={styles.element}>N/A</Text></View>
                        <View style={styles.element_view}><Text style={styles.element}>N/A</Text></View>
                    </View>
                    <View style={styles.table_line}>
                        <View style={styles.element_view}><Text style={styles.element}>Seconds per question</Text></View>
                        <View style={styles.element_view}><Text style={styles.element}>N/A</Text></View>
                        <View style={styles.element_view}><Text style={styles.element}>N/A</Text></View>
                        <View style={styles.element_view}><Text style={styles.element}>N/A</Text></View>
                        <View style={styles.element_view}><Text style={styles.element}>N/A</Text></View>
                    </View>

                    <SafeAreaView style={styles.safe}>
                        <Text>Questions:</Text>
                        <ScrollView>
                            {listAnswers}
                        </ScrollView>
                    </SafeAreaView>
                </View>
            )
        }
    }, [nonElem]);

    useEffect(() => {
        console.log(data);
    }, [data]);

    return (
        <View style={styles.EndlessGame}>
            {Component}
        </View>
    )
}

const styles = StyleSheet.create({
    EndlessGame: {
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        padding: 10,
        backgroundColor: '#ccc',
    },
    num_item: {
        height: 80,
        width: 60,
        borderRadius: 10,
        borderColor: 'black',
        borderWidth: 2,
        justifyContent: 'center',
        padding: 15,
        marginRight: 10,
        textAlign: 'center'
    },
    item: {
        marginTop: 10,
        width: 300,
        borderBottomLeftRadius: 10,
        borderTopLeftRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
    },
    text_bold: {
        fontWeight: 'bold',
    },
    safe: {
        height: 380,
    },
    table_line: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    header_view: {
        height: 50,
        width: 65,
        backgroundColor: '#223764',
        borderColor: '#ccc',
        justifyContent: 'center',
        alignItems: 'center',
    },
    header: {
        textAlign: 'center',
        color: '#fff',
    },
    element_view: {
        height: 50,
        width: 65,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
    },
    element: {
        textAlign: 'center',
    }

});

export default EndlessGame