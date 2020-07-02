import { createStackNavigator } from 'react-navigation-stack';
import { CHAT, INBOX } from '../../constants/routeNames';
import Messages from '../../screens/Messages';
import ChatRoom from '../../screens/Messages/ChatRoom';
import { navHeader } from '../../components/shared/styles';

const routeConfig = {
  [CHAT]: {
    screen: Messages,
    navigationOptions: { ...navHeader, headerTitle: 'Chats' }
  },
  [INBOX]: {
    screen: ChatRoom,
    navigationOptions: { ...navHeader }
  }
};

const ChatNavigator = createStackNavigator(routeConfig, {
  initialRouteName: CHAT
});

export default ChatNavigator;
