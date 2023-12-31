import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import HomeScreen from './src/screens/HomeScreen'
import { Colors } from './src/theme/Colors'
import { NavigationContainer } from '@react-navigation/native'
import TopTabBar from './src/navigation/TopTabBar'
import { createStackNavigator } from '@react-navigation/stack'
import ChatScreen from './src/screens/ChatScreen'
import ContactScreen from './src/screens/ContactScreen'
import AuthScreen from './src/screens/AuthScreen'
 
const Stack = createStackNavigator();

export default function App () {
  return (
    <NavigationContainer >
        <StatusBar backgroundColor={Colors.primaryColor} style='light' />
        
        <Stack.Navigator >
        <Stack.Screen name='AuthScreen' component={AuthScreen} options={{headerShown:false}} />

          <Stack.Screen name='HomeScreen' component={HomeScreen} options={{headerShown:false}} />
          <Stack.Screen name='ChatScreen' component={ChatScreen} options={{headerShown:false}}/>
          <Stack.Screen name='ContactScreen' component={ContactScreen} options={{headerShown:false}}/>


        </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {}
})
