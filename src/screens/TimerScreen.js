/* eslint-disable react/style-prop-object */
/* eslint-disable react/self-closing-comp */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/order */
/* eslint-disable no-unused-vars */
import React, { useState, useRef, useCallback } from 'react'
import { StyleSheet, SafeAreaView, Text, View, Platform } from 'react-native'
import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Paragraph from '../components/Paragraph'
import Button from '../components/Button'
import BackButton from '../components/BackButton'

// Stopwatch
import { StatusBar } from 'expo-status-bar'
import Constants from 'expo-constants'
import StopwatchResult from '../stopwatch/StopwatchResult'
import StopwatchControl from '../stopwatch/StopwatchControl'
import { displayTime } from '../stopwatch/timer'

export default function TimerScreen({ navigation }) {
  const [time, setTime] = useState(0)
  const [isRunning, setRunning] = useState(false)
  const [results, setResults] = useState([])
  const timer = useRef(null)

  const handleLeftButtonPress = useCallback(() => {
    if (isRunning) {
      setResults((previousResults) => [time, ...previousResults])
    } else {
      setResults([])
      setTime(0)
    }
  }, [isRunning, time])

  const handleRightButtonPress = useCallback(() => {
    if (!isRunning) {
      const interval = setInterval(() => {
        setTime((previousTime) => previousTime + 1)
      }, 10)

      timer.current = interval
    } else {
      clearInterval(timer.current)
    }
    setRunning((previousState) => !previousState)
  }, [isRunning])

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>"STOPWATCH"</Text>
      <StatusBar style="light" />
      <View style={styles.display}>
        <Text style={styles.displayText}>{displayTime(time)}</Text>
      </View>

      <View style={styles.control}>
        <StopwatchControl
          isRunning={isRunning}
          handleLeftButtonPress={handleLeftButtonPress}
          handleRightButtonPress={handleRightButtonPress}
        />
      </View>

      <View style={styles.result}>
        <StopwatchResult results={results} />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  logoutButton: {
    width: '50%',
    marginVertical: 10,
    paddingVertical: 2,
    borderRadius: 15,
    backgroundColor: '#b40808',
    position: 'absolute',
    bottom: 30,
  },
  container: {
    flex: 1,
    backgroundColor: 'black',
    paddingTop: Constants.statusBarHeight,
  },
  display: {
    flex: 3 / 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  displayText: {
    color: '#fff',
    fontSize: 90,
    fontWeight: '200',
  },
  control: {
    height: 70,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  result: {
    flex: 2 / 5,
  },
  header: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
    paddingVertical: 12,
    textAlign: 'center',
  },
})
