import { Alert, StyleSheet, Text, View } from 'react-native'
import React, { useRef } from 'react'
import VectorIcon from '../utils/VectorIcons'
import { Colors } from '../theme/Colors'
import { MessagesData } from '../data/MessageData'
import { ScrollView } from 'react-native-gesture-handler'

export default function ChatBody () {
  const scrollViewRef = useRef < any > (null)

  const userId = '1jdfnvchjkd'
  const UserMessageView = ({ message, time }: { message: any, time: any }) => {
    return (
      <View style={styles.userContainer}>
        <View style={styles.userInnerContainer}>
          <Text style={styles.message}>{message}</Text>
          <Text style={styles.time}>{time}</Text>
          <VectorIcon
            name='check-double'
            type='FontAwesome5'
            color={Colors.blue}
            size={12}
            style={styles.doubleCheck}
          />
        </View>
      </View>
    )
  }

  const OtherUserMessageView = ({
    message,
    time
  }: {
    message: any,
    time: any
  }) => {
    return (
      <View style={styles.otherUserContainer}>
        <View style={styles.otherUserInnerContainer}>
          <Text style={styles.message}>{message}</Text>
          <Text style={styles.time}>{time}</Text>
        </View>
      </View>
    )
  }

  const scrollToBottom = () => {
    scrollViewRef?.current?.scrollToEnd({ animated: true })
  }

  return (
    <>
      <ScrollView
        showsVerticalScrollIndicator={false}
        ref={scrollViewRef}
        onContentSizeChange={scrollToBottom}
      >
        {MessagesData.map((message: any) => (
          <>
            {userId === message?.id ? (
              <UserMessageView
                message={message?.message}
                time={message?.time}
              />
            ) : (
              <OtherUserMessageView
                message={message?.message}
                time={message?.time}
              />
            )}
          </>
        ))}
      </ScrollView>
      <View style={styles.scrollIcon}>
        <View style={styles.scrollDownArrow}>
          <VectorIcon
            name='angle-dobule-down'
            type='Fontisto'
            size={12}
            color={Colors.white}
            onPress={scrollToBottom}
          />
        </View>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  userContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginVertical: 5
  },
  otherUserContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5
  },
  userInnerContainer: {
    backgroundColor: Colors.teal,
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderTopLeftRadius: 30,
    borderBottomRightRadius: 30,
    borderBottomLeftRadius: 30,
    flexDirection: 'row',
    alignItems: 'flex-end'
  },
  message: {
    fontSize: 13,
    color: Colors.white
  },
  time: {
    fontSize: 9,
    color: Colors.white,
    marginLeft: 5
  },
  doubleCheck: {
    marginLeft: 5
  },
  otherUserInnerContainer: {
    backgroundColor: Colors.primaryColor,
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderTopRightRadius: 30,
    borderBottomRightRadius: 30,
    borderBottomLeftRadius: 30,
    flexDirection: 'row',
    alignItems: 'flex-end'
  },
  scrollDownArrow: {
    backgroundColor: Colors.primaryColor,
    borderRadius: 50,
    height: 30,
    width: 30,
    alignItems: 'center',
    justifyContent: 'center'
  },
  scrollIcon: {
    flexDirection: 'row',
    justifyContent: 'flex-end'
  }
})
