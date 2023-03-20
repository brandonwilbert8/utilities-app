import React from 'react'
import { StyleSheet, Image } from 'react-native'
import Background from '../components/Background'
import Header from '../components/Header'
import Paragraph from '../components/Paragraph'
import Button from '../components/Button'

export default function AboutUsScreen({ navigation }) {
  return (
    <Background>
      <Image
        source={require('../assets/cog_prim_lg_sm_tgln_hrz_r_rgb_pos_2022.png')}
        style={styles.logoStyle}
      />
      <Header>What is this app used for?</Header>
      <Paragraph>We are here to help you for utilities!</Paragraph>
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
  logoStyle: {
    width: 400,
    height: 120,
    position: 'absolute',
    top: 135,
  },
})
