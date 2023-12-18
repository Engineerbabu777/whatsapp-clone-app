import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MyStatus from '../components/MyStatus'
import RecentStatus from '../components/RecentStatus'
import ViewedStatus from '../components/ViewedStatus'
import { ScrollView } from 'react-native-gesture-handler'
import { Colors } from '../theme/Colors'

export default function StatusLiveScreen () {
  return (
    <ScrollView
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
    >
      <MyStatus />
      <RecentStatus />
      <ViewedStatus />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.background,
    padding: 16,
    // flex: 1
    minHeight: '100%'
  }
})
