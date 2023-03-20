/* eslint-disable no-console */
/* eslint-disable eqeqeq */
/* eslint-disable no-eval */
/* eslint-disable consistent-return */
import React, { useState } from 'react'
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  StatusBar,
} from 'react-native'

export default function CalculatorScreen() {
  const [resultText, setResultText] = useState('')
  const [calcText, setCalcText] = useState('')

  const onButtonClick = (text) => {
    try {
      if (text == '=') {
        return calculateResult()
      }
      setResultText(resultText + text)
    } catch (error) {
      setResultText('')
      setCalcText('ERROR')
      console.log(error)
    }
  }

  const calculateResult = () => {
    setCalcText(eval(resultText))
  }

  const onOperationClick = (operation) => {
    const operations = ['DEL', '+', '-', '*', '/']

    if (operation == 'DEL') {
      return setResultText(
        resultText.toString().substring(0, resultText.length - 1)
      )
    }
    if (operation == 'AC') {
      setResultText('')
      setCalcText(0)
      return
    }
    if (operations.includes(resultText.toString().split('').pop())) return
    setResultText(resultText + operation)
  }

  return (
    <>
      <StatusBar barStyle="light-content" />
      <View style={styles.container}>
        <View style={styles.result}>
          <Text style={styles.resultText}>{calcText}</Text>
        </View>
        <View style={styles.calculation}>
          <Text style={styles.calculationText}>{resultText}</Text>
        </View>
        <View style={styles.buttons}>
          <View style={styles.numbers}>
            <View style={styles.row}>
              <TouchableOpacity
                onPress={() => onButtonClick(1)}
                style={styles.btn}
              >
                <Text style={styles.number}>1</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => onButtonClick(2)}
                style={styles.btn}
              >
                <Text style={styles.number}>2</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => onButtonClick(3)}
                style={styles.btn}
              >
                <Text style={styles.number}>3</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.row}>
              <TouchableOpacity
                onPress={() => onButtonClick(4)}
                style={styles.btn}
              >
                <Text style={styles.number}>4</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => onButtonClick(5)}
                style={styles.btn}
              >
                <Text style={styles.number}>5</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => onButtonClick(6)}
                style={styles.btn}
              >
                <Text style={styles.number}>6</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.row}>
              <TouchableOpacity
                onPress={() => onButtonClick(7)}
                style={styles.btn}
              >
                <Text style={styles.number}>7</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => onButtonClick(8)}
                style={styles.btn}
              >
                <Text style={styles.number}>8</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => onButtonClick(9)}
                style={styles.btn}
              >
                <Text style={styles.number}>9</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.row}>
              <TouchableOpacity
                onPress={() => onButtonClick('.')}
                style={styles.btn}
              >
                <Text style={styles.number}>.</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => onButtonClick(0)}
                style={styles.btn}
              >
                <Text style={styles.number}>0</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => onButtonClick('=')}
                style={styles.btn}
              >
                <Text style={styles.number}>=</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.operations}>
            <TouchableOpacity
              onPress={() => onOperationClick('DEL')}
              style={styles.btn}
            >
              <Text style={styles.operationButton}>DEL</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => onOperationClick('AC')}
              style={styles.btn}
            >
              <Text style={styles.operationButton}>AC</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => onOperationClick('+')}
              style={styles.btn}
            >
              <Text style={styles.operationButton}>+</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => onOperationClick('-')}
              style={styles.btn}
            >
              <Text style={styles.operationButton}>-</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => onOperationClick('/')}
              style={styles.btn}
            >
              <Text style={styles.operationButton}>/</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => onOperationClick('*')}
              style={styles.btn}
            >
              <Text style={styles.operationButton}>*</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  result: {
    flex: 2,
    backgroundColor: '#1e768c',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  resultText: {
    fontSize: 60,
    marginTop: 40,
    marginRight: 20,
    color: 'white',
    fontWeight: 'bold',
  },
  calculationText: {
    fontSize: 30,
    marginRight: 10,
    color: 'black',
    fontWeight: 'bold',
  },
  number: {
    fontSize: 40,
    color: 'white',
  },
  calculation: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  btn: {
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'stretch',
    fontSize: '30',
  },
  buttons: {
    flex: 7,
    flexDirection: 'row',
  },
  numbers: {
    flex: 3,
    backgroundColor: '#000048',
  },
  row: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  operations: {
    flex: 1,
    backgroundColor: '#4798c7',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  operationButton: {
    fontSize: 30,
    color: 'white',
  },
  header: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
    paddingVertical: 12,
    textAlign: 'center',
  },
})
