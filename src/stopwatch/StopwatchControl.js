/* eslint-disable no-unused-vars */
/* eslint-disable react/self-closing-comp */
import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

function StopwatchControl({
  isRunning,
  handleLeftButtonPress,
  handleRightButtonPress,
}) {
  return (
    <>
      <TouchableOpacity
        style={[
          styles.controlButtonBorder,
          { backgroundColor: isRunning ? '#333333' : '#1c1c1e' },
        ]}
        onPress={handleLeftButtonPress}
      >
        <View style={styles.controlButton}>
          <Text style={{ color: isRunning ? '#fff' : '#9d9ca2' }}>
            {isRunning ? 'Lap' : 'Reset'}
          </Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        style={[
          styles.controlButtonBorder,
          { backgroundColor: isRunning ? '#b80f00' : '#0a2a12' },
        ]}
        onPress={handleRightButtonPress}
      >
        <View style={styles.controlButton}>
          <Text style={{ color: isRunning ? '#e88886' : '#37d05c' }}>
            {isRunning ? 'Stop' : 'Start'}
          </Text>
        </View>
      </TouchableOpacity>
    </>
  )
}

const center = {
  justifyContent: 'center',
  alignItems: 'center',
}

const styles = StyleSheet.create({
  controlButtonBorder: {
    ...center,
    width: 70,
    height: 70,
    borderRadius: 70,
  },
  controlButton: {
    ...center,
    width: 65,
    height: 65,
    borderRadius: 65,
    borderColor: '#000',
    borderWidth: 1,
  },
})

export default React.memo(StopwatchControl)
