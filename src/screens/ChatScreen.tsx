import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ChatFooter from '../components/ChatFooter'
import ChatHeader from '../components/ChatHeader'
import ChatBody from '../components/ChatBody'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ImageBackground } from 'react-native'


export default function ChatScreen () {
  return (
    <>
      <>
        <ChatHeader />
        <ImageBackground
          source={require('../assets/wallpaper.jpeg')}
          style={styles.wallpaper}
        >
          <ChatBody />
        </ImageBackground>
        <ChatFooter />
      </>
    </>
  )
}

const styles = StyleSheet.create({
  wallpaper: {
    flex: 1,
    paddingHorizontal: 12,
    paddingBottom: 5
  }
})
