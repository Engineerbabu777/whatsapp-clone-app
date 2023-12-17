import CallsScreen from '../screens/CallsScreen'
import ChatListScreen from '../screens/ChatListScreen'
import StatusLiveScreen from '../screens/StatusLiveScreen'

export const TabBarData = [
  {
    id: 1,
    route: ChatListScreen,
    name: 'Chats'
  },
  {
    id: 2,
    route: StatusLiveScreen,
    name: 'Status'
  },
  {
    id: 3,
    route: CallsScreen,
    name: 'Calls'
  }
]
