import { StyleSheet, View, Text } from 'react-native'
import React from 'react'
import { Image } from 'react-native'

// images
import logo from '../../assets/images/logo.png'
import userIcon from '../../assets/images/employees.png'

export default function Header() {
  return (
    <>
      <View style={styles.headerContainer}>
        <Image
          source={logo}
          style={styles.logo}
        />
        <Image
          source={userIcon}
          style={styles.logo}
        />
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  headerContainer: {
    height: 80,
    backgroundColor: '#36282b',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 5,
    paddingVertical: 10,
  },
  logo: {
    width: 60,
    height: 60,
    resizeMode: 'stretch',
  },
})
