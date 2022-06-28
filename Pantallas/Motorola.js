import React from 'react';
import {useState} from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Button } from 'react-native';


export default function Motorola (){
    const buttons = ['²','Pi','^','!','AC', '()', '%', '÷', 7,8,9, '×', 4,5,6, '-', 1,2,3, '+', 0, '.','⌫','=' ]

    const [currentNumber, setCurrentNumber] = useState("")
    const [lastNumber, setLastNumber] = useState("")

    function calculator(){
        const splitNumbers = currentNumber.split(' ')
        const fistNumber = parseFloat(splitNumbers[0])
        const lastNumber = parseFloat(splitNumbers[2])
        const operador = splitNumbers[1]
        
        switch(operador){
            case '+':
                setCurrentNumber((fistNumber + lastNumber).toString())
                return
            case '-':
                setCurrentNumber((fistNumber + lastNumber).toString())
                return
            case '×':
                setCurrentNumber((fistNumber + lastNumber).toString())
                return
            case '÷':
                setCurrentNumber((fistNumber + lastNumber).toString())
                return
        }
    }

    function handleInput(buttonPressed){
        
        if(buttonPresed === '+' | buttonPressed === '-' | buttonPressed === '×' | buttonPressed === '÷'){
            setCurrentNumber(currentNumber +  " " + buttonPressed + " ")
            return
        }
    switch(buttonPressed){
        case '⌫':
            setCurrentNumber(currentNumber.substring(0, (currentNumber.length -1)))
        return
        case 'AC':
            setLastNumber("")
            setCurrentNumber("")
            return
        case '=':
            setLastNumber(currentNumber + "=")
            calculator()
            return
    }
        setCurrentNumber(currentNumber + buttonPressed)
    }

    const styles = StyleSheet.create({
        results:{
            backgroundColor: "a370e0",
        }
    })
    




    return (
        <view>
            <view style={styles.results}>
                <Text style={styles.historyText}>{lastNumber}</Text>
                <Text style={styles.resultText}>{currentNumber}</Text>
            </view>
                
                :
                <TouchableOpacity onPress={() => handleInput (button)} key={button} style={[styles.button,
                {backgroundColor: typeof(button) === 'number'}]}>
                    <Text style={styles.textButton}>{button}</Text>
                </TouchableOpacity>
            </view>
                
                
                
                
                



       
    )
























}