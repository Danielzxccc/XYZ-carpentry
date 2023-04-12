import { StyleSheet, View, Text } from 'react-native'
import React, { useState } from 'react'
import { TextInput } from 'react-native'
import { Button } from 'react-native'
import logoLogin from '../assets/images/logologin.png'
import { Image } from 'react-native'
import { useAuthStore } from '../store/AuthStore'

export default function LoginScreen({ navigation }) {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [errorMsg, setErrorMsg] = useState('')
  const setToken = useAuthStore((state) => state.setToken)

  // fake login
  const handleLogin = () => {
    if (!username || !password) {
      setErrorMsg('Username and password is required.')
    } else {
      setToken()
    }
  }
  return (
    <View style={styles.mainWrapper}>
      <View style={styles.logoWrapper}>
        <Image
          source={logoLogin}
          style={styles.image}
        />
      </View>
      <View>
        <Text style={styles.errorMessage}>{errorMsg}</Text>
        <TextInput
          style={styles.input}
          placeholder='Username'
          onChangeText={(username) => setUsername(username)}
        />
        <TextInput
          style={styles.input}
          placeholder='Password'
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />
        <View style={styles.buttonWrapper}>
          <View style={styles.button}>
            <Button
              onPress={handleLogin}
              title='Login'
              color='#000000'
            />
          </View>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  mainWrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#36282b',
  },
  logoWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 50,
    width: '100%',
  },
  image: {
    width: 370,
    height: 210,
    resizeMode: 'stretch',
  },
  input: {
    height: 35,
    width: 270,
    marginBottom: 20,
    padding: 10,
    borderWidth: 1,
    backgroundColor: '#fdfdfd',
  },
  errorMessage: {
    color: '#fff',
    marginBottom: 10,
  },
  buttonWrapper: {
    width: 270,
    alignItems: 'flex-end',
  },
  button: {
    width: 130,
  },
})
