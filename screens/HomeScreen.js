import {
  TouchableOpacity,
  ImageBackground,
  StyleSheet,
  View,
  Text,
} from 'react-native'
import React from 'react'
import Header from '../components/layout/Header'
// images
import background from '../assets/images/landing-page.png'

export default function HomeScreen({ navigation }) {
  return (
    <>
      <Header />
      <ImageBackground
        source={background}
        style={styles.background}
      >
        <View style={styles.container}>
          <View style={styles.hero}>
            <Text style={styles.heroText}>
              TRANSFORM YOUR SPACE {'\n'} WITH EXCEPTIONAL {'\n'} CARPENTRY
              SERVICES
            </Text>
            <Text style={styles.subheading}>
              Experience the Difference with Our Skilled {'\n'} Craftsmen and
              Personalized Approach
            </Text>
          </View>
        </View>
        <View style={styles.container}>
          <View style={styles.buttonWrapper}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate('Projects')}
            >
              <Text style={styles.buttonText}>SEE OUR WORKS</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>REQUEST AN ESTIMATE</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </>
  )
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
  container: {
    flex: 1,
    alignItems: 'flex-end',
  },
  hero: {
    flex: 1,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 100,
  },
  buttonWrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  button: {
    backgroundColor: '#e2e2e2',
    padding: 12,
    borderRadius: 20,
    width: 210,
    marginBottom: 5,
  },
  buttonText: {
    color: '#000000',
    textAlign: 'center',
  },
  heroText: {
    color: '#ffffff',
    fontWeight: '900',
    fontSize: 25,
    textAlign: 'right',
  },
  subheading: {
    color: '#ffffff',
    fontWeight: '600',
    textAlign: 'right',
    alignSelf: 'flex-end',
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
})
