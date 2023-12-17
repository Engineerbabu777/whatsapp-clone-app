import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import CommunityScreen from '../screens/CommunityScreen'
import ChatListScreen from '../screens/ChatListScreen'
import StatusLiveScreen from '../screens/StatusLiveScreen'
import CallsScreen from '../screens/CallsScreen'
import { Colors } from '../theme/Colors'
import VectorIcon from '../utils/VectorIcons'
import { TabBarData } from '../data/Tabbardata'

const Top = createMaterialTopTabNavigator()

export default function TopTabBar () {
  return (
    <Top.Navigator
    initialRouteName={"Chats"}
      screenOptions={() => ({
        tabBarInactiveTintColor: Colors.secondaryColor,
        tabBarActiveTintColor: Colors.tertiary,
        tabBarIndicatorStyle: {
          backgroundColor: Colors.tertiary
        },
        tabBarStyle: {
          backgroundColor: Colors.primaryColor
        }
      })}
    >
      <Top.Screen
        name='Community'
        component={CommunityScreen}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ color }) => (
            <VectorIcon
              type='FontAwesome'
              name='users'
              color={color}
              size={20}
            />
          )
        }}
      />
      {TabBarData.map(tab => (
        <Top.Screen key={tab.id} name={tab.name} component={tab.route} />
      ))}
    </Top.Navigator>
  )
}

const styles = StyleSheet.create({})
