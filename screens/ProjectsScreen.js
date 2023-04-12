import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  Modal,
  Pressable,
} from 'react-native'
import React, { useState } from 'react'
import Header from '../components/layout/Header'
// images
import project1 from '../assets/images/project1.png'
import project2 from '../assets/images/project2.png'
import project3 from '../assets/images/project3.png'

export default function ProjectsScreen({ navigation }) {
  const [modalVisible, setModalVisible] = useState(false)
  const [activeImage, setActiveImage] = useState({
    id: '',
    source: null,
  })
  const image = [
    {
      id: 1,
      source: project1,
      projectTitle: 'Test',
      projectDescription: 'loren hashsahasdjkaks',
    },
    {
      id: 2,
      source: project2,
      projectTitle: '',
      projectDescription: '',
    },
    {
      id: 3,
      source: project3,
      projectTitle: '',
      projectDescription: '',
    },
    {
      id: 4,
      source: project3,
      projectTitle: '',
      projectDescription: '',
    },
  ]

  const handleModal = (id) => {
    setActiveImage(image.find((project) => project.id === id))
    setModalVisible(true)
  }

  return (
    <>
      <Header />
      <View style={style.mainContainer}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
        >
          <View style={style.textContainer}>
            <Text style={style.headerText}>
              TAKE A LOOK AT OUR SAMPLE WORKS!
            </Text>
            <Text style={style.subHeader}>
              Here are some of the finished works
            </Text>
          </View>
          {image.map((item) => (
            <TouchableOpacity
              key={item.id}
              onPress={() => handleModal(item.id)}
            >
              <View style={style.imagesWrapper}>
                <View>
                  <Image
                    source={item.source}
                    style={style.image}
                  />
                </View>
              </View>
            </TouchableOpacity>
          ))}
          {/* modal */}
          <Modal
            animationType='fade'
            transparent={true}
            visible={modalVisible}
          >
            <View style={style.centeredView}>
              <View style={style.modalView}>
                <Pressable
                  onPress={() => setModalVisible(!modalVisible)}
                  // style={style.closeButton}
                >
                  <Image
                    source={activeImage.source}
                    style={style.imageModal}
                  />
                </Pressable>
              </View>
            </View>
          </Modal>
        </ScrollView>
      </View>
    </>
  )
}

const style = StyleSheet.create({
  mainContainer: {
    flex: 1,
    paddingHorizontal: 1,
    alignItems: 'center',
  },
  textContainer: {
    marginTop: 40,
    marginBottom: 20,
  },
  headerText: {
    fontSize: 20,
    fontWeight: '700',
  },
  imagesWrapper: {
    borderWidth: 1,
    padding: 8,
    marginBottom: 10,
  },
  image: {
    width: 370,
    height: 150,
    resizeMode: 'stretch',
  },
  imageModal: {
    width: 390,
    height: 250,
    resizeMode: 'stretch',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    flex: 1,
    justifyContent: 'center',
    width: 500,
    margin: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  closeButton: {
    alignSelf: 'flex-end',
  },
})
