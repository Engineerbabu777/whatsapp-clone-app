import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native'
import React from 'react'
import ChatList from '../components/ChatList'
import VectorIcon from '../utils/VectorIcons'
import { Colors } from '../theme/Colors'
import { NavigationProp } from '@react-navigation/native'

export default function ChatListScreen ({navigation}:{navigation:NavigationProp}) {

  return (
    <View style={styles.container}>
      <ScrollView>
        <ChatList />
      </ScrollView>
      <TouchableOpacity
        style={styles.contactIcon}
        onPress={() => navigation.navigate('ContactScreen')}
    
      >
        <VectorIcon
          name='message-reply-text'
          type='MaterialCommunityIcons'
          size={22}
          color={Colors.white}
        />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    backgroundColor: Colors.background,
    flex: 1
  },
  contactIcon: {
    backgroundColor: Colors.tertiary,
    height: 50,
    width: 50,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 20,
    right: 20
  }
})
