/* eslint-disable import/no-extraneous-dependencies */
import React from 'react'
import { StyleSheet, Image, View, Text } from 'react-native'
import Background from '../components/Background'
import Header from '../components/Header'
import Button from '../components/Button'
import { theme } from '../core/theme'

export default function Dashboard({ navigation }) {
  return (
    <Background>
      <Image
        source={require('../assets/cog_prim_lg_sm_tgln_hrz_r_rgb_pos_2022.png')}
        style={styles.image}
      />
      <View style={styles.viewStyle}>
        <Header style={styles.headerStyle}>Let’s start</Header>
        <Text style={styles.text}>What would you like to do today?</Text>
      </View>
      <Button
        mode="contained"
        onPress={() => navigation.navigate('CalculatorScreen')}
      >
        Calculator
      </Button>
      <Button
        mode="contained"
        onPress={() => navigation.navigate('TimerScreen')}
      >
        Timer
      </Button>
      <Button
        mode="contained"
        onPress={() => navigation.navigate('MapsScreen')}
      >
        Maps
      </Button>
      <Button
        style={styles.logoutButton}
        mode="contained"
        onPress={() =>
          navigation.reset({
            index: 0,
            routes: [{ name: 'StartScreen' }],
          })
        }
      >
        Logout
      </Button>
    </Background>
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
  image: {
    width: 400,
    height: 90,
    paddingTop: 20,
  },
  headerStyle: {
    fontSize: 30,
    color: theme.colors.primary,
    fontWeight: 'bold',
    paddingVertical: 12,
    textAlign: 'center',
  },
  viewStyle: {
    padding: 30,
  },
  text: {
    fontSize: 20,
    lineHeight: 21,
    textAlign: 'center',
    marginBottom: 14,
    color: '#2596be',
    fontWeight: 'bold',
    fontStyle: 'italic',
  },
})
