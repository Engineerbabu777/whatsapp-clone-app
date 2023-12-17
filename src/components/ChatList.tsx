import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native'
import React from 'react'
import { Colors } from '../theme/Colors'
import User1 from '../assets/user1.jpeg'
import VectorIcon from '../utils/VectorIcons'
import { ChatListData } from '../data/ChatListData'
import {useNavigation} from '@react-navigation/native';

export default function ChatList () {

    const navigation = useNavigation();

    const onNavigate = () => {
        navigation.navigate('ChatScreen')
    }
    
  return (
    <View>
      {ChatListData?.map((item: any, ind: number) => {
        return (
          <TouchableOpacity style={styles.container} key={ind}     onPress={() => {
            onNavigate()
          }}>
            <View style={styles.leftContainer}>
              <Image source={item?.profile} style={styles.profileImg} />
            </View>
            <View style={{ flex: 1 }}>
              <Text style={styles.username}>{item?.name}</Text>
              <Text style={styles.message}>{item?.message}</Text>
            </View>
            <View style={styles.rightContainer}>
              <Text style={styles.timeStamp}>{item?.time}</Text>
              {item?.mute && (
                <VectorIcon
                  type='MaterialCommunityIcons'
                  name='volume-variant-off'
                  size={22}
                  color={Colors.textGrey}
                  style={styles.muteIcon}
                />
              )}
            </View>
          </TouchableOpacity>
        )
      })}
    </View>
  )
}

const styles = StyleSheet.create({
  profileImg: {
    borderRadius: 50,
    height: 40,
    width: 40,
    marginRight: 15
  },
  container: {
    backgroundColor: Colors.background,
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  username: {
    color: Colors.textColor,
    fontSize: 16
  },
  message: {
    color: Colors.textGrey,
    fontSize: 14,
    marginTop: 5
  },
  leftContainer: {
    flexDirection: 'row'
  },
  timeStamp: {
    color: Colors.textGrey,
    fontSize: 12
  },
  muteIcon: {
    marginTop: 5,
    marginLeft: 20
  }
})
