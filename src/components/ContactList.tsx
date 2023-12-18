import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Colors } from '../theme/Colors'
import { useNavigation } from '@react-navigation/native'

const ContactList = () => {
  const navigation = useNavigation()

  const [users, setUsers] = useState([
    { id: 1, profile: require('../assets/user11.jpeg'), name: 'Khan' },
    { id: 2, profile: require('../assets/user11.jpeg'), name: 'Khan' },
    { id: 3, profile: require('../assets/user11.jpeg'), name: 'Khan' }
  ])

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contacts on Whatsapp</Text>
      {users.map(item => (
        <View key={item.id}>
          <TouchableOpacity onPress={() => {}} style={styles.contactContainer}>
            <Image source={item?.profile} style={styles.imgStyle} />
            <Text style={styles.username}>{item?.name}</Text>
          </TouchableOpacity>
        </View>
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.background,
    padding: 16,
    minHeight:"100%"
  },
  imgStyle: {
    height: 40,
    width: 40,
    borderRadius: 50
  },
  username: {
    fontSize: 16,
    color: Colors.textColor,
    marginLeft: 15
  },
  title: {
    fontSize: 12,
    color: Colors.textGrey,
    marginVertical: 5
  },
  contactContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15
  }
})

export default ContactList
