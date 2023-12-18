

import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ContactHeader from '../components/ContactHeader'
import ContactList from '../components/ContactList'

export default function ContactScreen() {
  return (
    <ScrollView contentContainerStyle={{flex:1}}>
        <View style={{marginTop:30,minHeight:'100%'}}>
        <ContactHeader />
        <ContactList />
        </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({})