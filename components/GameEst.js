import { useState } from 'react';
import { useEffect } from 'react'

import { StyleSheet, Text, View, Button, TouchableOpacity, TextInput } from 'react-native';




const Game = (props, route) => {
    const [curNum1, setCurNum1] = useState(14344);

    const [curArif, setCurArif] = useState("+");
    const [curNum2, setCurNum2] = useState(56344);
    const [curExpect, setCurExpect] = useState();
    const [curAnswer, setCurAnswer] = useState();

    const [curView1, setView1] = useState(14344);
    const [curView2, setView2] = useState(56344);

    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
    }



    function addition() {
        if (props.dificult == 1) {
            setCurNum1(getRandomInt(100, 999999));
            setCurNum2(getRandomInt(100, 999999));
        } else if (props.dificult == 2) {
            setCurNum1(getRandomInt(10000, 999999999));
            setCurNum2(getRandomInt(10000, 999999999));
        }
        setCurArif('  +  ');
    }

    function subtraction() {
        if (props.dificult == 1) {
            setCurNum1(getRandomInt(100, 999999));
            setCurNum2(getRandomInt(100, 99999));
        } else if (props.dificult == 2) {
            setCurNum1(getRandomInt(10000, 9999999999));
            setCurNum2(getRandomInt(10000, 999999999));
        }
        setCurArif('  -  ');
    }

    function multiplication() {
        if (props.dificult == 1) {
            setCurNum1(getRandomInt(10, 9999));
            setCurNum2(getRandomInt(100, 9999));
        } else if (props.dificult == 2) {
            setCurNum1(getRandomInt(100, 999999999));
            setCurNum2(getRandomInt(100, 999999999));
        }
        setCurArif('  x  ');
    }

    function division() {
        if (props.dificult == 1) {
            setCurNum1(getRandomInt(10, 9999999));
            setCurNum2(getRandomInt(1, 9999));
        } else if (props.dificult == 2) {
            setCurNum1(getRandomInt(10000000, 99999999999));
            setCurNum2(getRandomInt(100, 9999999));
        }
        setCurArif('  /  ');
    }

    function percent() {
        const percents = [10, 20, 30, 40, 50, 60, 70, 80, 90, 25, 75];
        if (props.dificult == 1) {
            let dop1 = getRandomInt(0, 10);
            let zero = getRandomInt(3, 9);
            let dop2 = getRandomInt(1, 999) * Math.pow(10, zero);
            setCurNum1(percents[dop1]);
            setCurNum2(dop2);
        } else if (props.dificult == 2) {
            let dop1 = getRandomInt(0, 10);
            setCurNum1(percents[dop1]);
            setCurNum2(getRandomInt(1000, 999999999));
        }
        setCurArif('%  of  ');
    }

    function random() {
        let choice = getRandomInt(0, 4);
        if (choice == 0) {
            addition();
        } else if (choice == 1) {
            subtraction();
        } else if (choice == 2) {
            multiplication();
        } else if (choice == 3) {
            division();
        } else if (choice == 4) {
            percent();
        }
    }

    function updateQuestion(type) {

        if (props.type == 0) {
            addition();
        } else if (props.type == 1) {
            subtraction();
        } else if (props.type == 2) {
            multiplication();
        } else if (props.type == 3) {
            division();
        } else if (props.type == 4) {
            percent();
        } else if (props.type == 5) {
            random();
            console.log(curArif);
        }
        if (!curAnswer) {
            setCurAnswer('');
        }
        if (type == 1) {
            var Object = { num1: curView1, arif: curArif, num2: curView2, expect: curExpect, answer: curAnswer }
            props.setData(prev => [...prev, Object]);
        }
    }

    useEffect(() => {
        updateQuestion(0);
    }, [route]);


    useEffect(() => {
        setView1(curNum1);
        if (curNum1 >= 1000 && curNum1 <= 999999 && curNum1 % 100 == 0) {
            setView1(curNum1 / 1000 + ' thousand');
        }
        if (curNum1 >= 1000000 && curNum1 <= 999999999 && curNum1 % 1000 == 0) {
            setView1(curNum1 / 1000000 + ' million');
        }
        if (curNum1 >= 1000000000 && curNum1 <= 999999999999 && curNum1 % 1000000 == 0) {
            setView1(curNum1 / 1000000000 + ' billion');
        }
        //setView1(curNum1.toLocaleString());
    }, [curNum1]);
    useEffect(() => {
        setView2(curNum2);
        if (curNum2 >= 1000 && curNum1 <= 999999 && curNum2 % 100 == 0) {
            setView2(curNum2 / 1000 + ' thousand');
        }
        if (curNum2 >= 1000000 && curNum1 <= 999999999 && curNum2 % 10000 == 0) {
            setView2(curNum2 / 1000000 + ' million');
        }
        if (curNum2 >= 1000000000 && curNum1 <= 999999999999 && curNum2 % 10000000 == 0) {
            setView2(curNum2 / 1000000000 + ' billion');
        }
        //setView2(curNum2.toLocaleString());
    }, [curNum2]);

    useEffect(() => {
        if (props.type == 0) {
            setCurExpect(Math.floor((curNum1 + curNum2) * 100) / 100);
        } else if (props.type == 1) {
            setCurExpect(Math.floor((curNum1 - curNum2) * 100) / 100);
        } else if (props.type == 2) {
            setCurExpect(Math.floor((curNum1 * curNum2) * 100) / 100);
        } else if (props.type == 3) {
            setCurExpect(Math.floor((curNum1 / curNum2) * 100) / 100);
        } else if (props.type == 4) {
            setCurExpect(Math.floor((curNum1 / 100 * curNum2) * 100) / 100);
        } else {
            if (curArif == '  +  ') {
                setCurExpect(Math.floor((curNum1 + curNum2) * 100) / 100);
            } else if (curArif == '  -  ') {
                setCurExpect(Math.floor((curNum1 - curNum2) * 100) / 100);
            } else if (curArif == '  x  ') {
                setCurExpect(Math.floor((curNum1 * curNum2) * 100) / 100);
            } else if (curArif == '  /  ') {
                setCurExpect(Math.floor((curNum1 / curNum2) * 100) / 100);
            } else if (curArif == '%  of  ') {
                setCurExpect(Math.floor((curNum1 / 100 * curNum2) * 100) / 100);
            }
        }

    }, [curNum2]);



    return (
        <View style={styles.Game}>
            <View style={styles.question}>
                <Text style={styles.question_element}>{curView1.toLocaleString()}</Text>
                <Text style={styles.question_element}>{curArif}</Text>
                <Text style={styles.question_element}>{curView2.toLocaleString()}</Text>
            </View>
            <TextInput
                editable
                keyboardType='numeric'
                placeholder='Enter your answer'
                textAlign='center'
                value={curAnswer}
                onChangeText={text => setCurAnswer(text)}
                style={styles.input} />
            <TouchableOpacity style={styles.button}
                onPress={() => {
                    updateQuestion(1);
                    setCurAnswer('');
                }}>
                <Text style={styles.button_text} >Submit</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button_exit}
                onPress={() => {
                    props.setTimer(0);
                    props.setNon(1);

                }}>
                <Text style={styles.button_text} >If you want to finish game earlier - push me!</Text>
            </TouchableOpacity>
        </View>
    )

}
const styles = StyleSheet.create({
    Game: {
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        paddingLeft: 20,
        paddingRight: 20,
        backgroundColor: '#ccc'
    },
    question: {
        //margin: 10,
        width: 300,
        padding: 20,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        borderRadius: 5,
        backgroundColor: '#fff'
    },
    question_element: {
        //padding: 5,
        fontSize: 20,
    },
    input: {
        marginTop: 20,
        padding: 15,
        width: 300,
        fontSize: 20,
        alignItems: 'center',
        borderRadius: 5,
        backgroundColor: '#fff'
    },
    button: {
        margin: 20,
        padding: 15,
        width: 300,
        alignItems: 'center',
        borderRadius: 5,
        backgroundColor: '#223764',
        color: '#fff',
    },
    button_exit: {
        margin: 30,
        padding: 10,
        width: 250,
        alignItems: 'center',
        borderRadius: 5,
        backgroundColor: '#86bfe8',
    },
    button_text: {
        fontSize: 18,
        color: '#fff',
        textAlign: 'center',
    },
    button_text_ex: {
        fontSize: 18,
        color: '#fff',
        textAlign: 'center',
        color: 'black',
    }
});

export default Game