/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-console */
import React, { useState } from 'react'
import { StyleSheet, Alert } from 'react-native'
import { Auth } from 'aws-amplify'
import { useRoute } from '@react-navigation/native'
import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Button from '../components/Button'
import TextInput from '../components/TextInput'
import BackButton from '../components/BackButton'
import { theme } from '../core/theme'
import { verificationCodeValidator } from '../helpers/verificationCodeValidator'

export default function ConfirmSignUpScreen({ navigation }) {
  const [verificationCode, SetVerificationCode] = useState({
    value: '',
    error: '',
  })
  const [loading, setLoading] = useState(false)

  const route = useRoute()
  const username = route.params.username
  const currentUser = route.params.name

  console.log(currentUser)

  const onVerificationPressed = async () => {
    const verificationCodeError = verificationCodeValidator(
      verificationCode.value
    )

    if (verificationCodeError) {
      SetVerificationCode({
        ...verificationCode,
        error: verificationCodeError,
      })
      return
    }

    if (loading) {
      return
    }

    setLoading(true)

    try {
      const response = await Auth.confirmSignUp(
        username,
        verificationCode.value
      )
      console.log(response)
      navigation.navigate('Dashboard', { currentUser })
    } catch (error) {
      Alert.alert('Oops', error.message)
      setLoading(false)
      return
    }

    setLoading(false)

    navigation.reset({
      index: 0,
      routes: [{ name: 'Dashboard' }],
    })
  }

  return (
    <Background>
      <BackButton goBack={navigation.goBack} />
      <Logo />
      <Header>Please enter the verification code.</Header>
      <TextInput
        label="Username"
        value={username}
        returnKeyType="next"
        error={!!username.error}
        errorText={username.error}
      />
      <TextInput
        label="Verification Code"
        returnKeyType="next"
        value={verificationCode.value}
        onChangeText={(text) => SetVerificationCode({ value: text, error: '' })}
        error={!!verificationCode.error}
        errorText={verificationCode.error}
      />

      <Button mode="contained" onPress={onVerificationPressed}>
        {loading ? 'Loading...' : 'Verify'}
      </Button>
    </Background>
  )
}

const styles = StyleSheet.create({
  forgotPassword: {
    width: '100%',
    alignItems: 'flex-end',
    marginBottom: 24,
  },
  row: {
    flexDirection: 'row',
    marginTop: 4,
  },
  forgot: {
    fontSize: 13,
    color: theme.colors.secondary,
  },
  link: {
    fontWeight: 'bold',
    color: theme.colors.primary,
  },
})
