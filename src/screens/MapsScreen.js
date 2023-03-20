import React from 'react'
import { StyleSheet } from 'react-native'
import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Paragraph from '../components/Paragraph'
import Button from '../components/Button'
import BackButton from '../components/BackButton'

export default function MapsScreen({ navigation }) {
  return (
    <Background>
      <Logo />
      <BackButton goBack={() => navigation.navigate('Dashboard')} />
      <Header>Maps Screen</Header>
      <Paragraph>Test</Paragraph>
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
})
