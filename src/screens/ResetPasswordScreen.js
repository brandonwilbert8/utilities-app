import React, { useState } from 'react'
import { Auth } from 'aws-amplify'
import { Alert } from 'react-native'
import Background from '../components/Background'
import BackButton from '../components/BackButton'
import Logo from '../components/Logo'
import Header from '../components/Header'
import TextInput from '../components/TextInput'
import Button from '../components/Button'
import { emailValidator } from '../helpers/emailValidator'

export default function ResetPasswordScreen({ navigation }) {
  const [email, setEmail] = useState({ value: '', error: '' })
  const [loading, setLoading] = useState(false)

  const sendResetPasswordEmail = async () => {
    const emailError = emailValidator(email.value)

    if (emailError) {
      setEmail({ ...email, error: emailError })
      return
    }

    if (loading) {
      return
    }

    setLoading(true)

    try {
      await Auth.forgotPassword(email.value)
    } catch (error) {
      Alert.alert('Oops', error.message)
      setLoading(false)
      return
    }

    setLoading(false)

    navigation.navigate('LoginScreen')
  }

  return (
    <Background>
      <BackButton goBack={navigation.goBack} />
      <Logo />
      <Header>Restore Password</Header>
      <TextInput
        label="E-mail Address"
        returnKeyType="done"
        value={email.value}
        onChangeText={(text) => setEmail({ value: text, error: '' })}
        error={!!email.error}
        errorText={email.error}
        autoCapitalize="none"
        autoCompleteType="email"
        textContentType="emailAddress"
        keyboardType="email-address"
        description="You will receive email with password reset link."
      />
      <Button
        mode="contained"
        onPress={sendResetPasswordEmail}
        style={{ marginTop: 16 }}
      >
        {loading ? 'Loading...' : 'Send Instructions'}
      </Button>
    </Background>
  )
}
