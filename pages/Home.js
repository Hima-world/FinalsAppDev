import * as React from 'react';
import { Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Chatroom from './Chatroom';
import Settings from './Settings';
import Diary from './Diary';
import Calendar from './Calendar';
import SignIn from './SignIn'


const Stack = createStackNavigator();
export default class Home extends Component {
  render() {
    return (
      <NavigationContainer>
        <StatusBar style="auto" />
        <Stack.Navigator>
          <Stack.Screen name="SignIn" component={SignIn} options={{ title: 'Welcome' }} />
          {/* <Stack.Screen name="Profile" component={Profile} /> */}
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
function Chatroom() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' , backgroundColor: '#ffd23f' }}>
    </View>

  );
}

function Diary() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' , backgroundColor: '#ffd23f' }}>
      <Text>Diary</Text>
    </View>
  );
}
function Calendar() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' , backgroundColor: '#ffd23f'}}>
      <Text>Calendar</Text>
    </View>
  );
}

function Settings() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' , backgroundColor: '#ffd23f' }}>
      <Text>Settings</Text>
    </View>
  );
}
const Tab = createBottomTabNavigator();

function Home() {
  return (
    <NavigationContainer>
      <Tab.Navigator   screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Chatroom') {
              iconName = focused
                ? 'ios-chatbubbles'
                : 'ios-chatbubbles-outline';
            } else if (route.name === 'Diary') {
              iconName = focused 
              ? 'ios-list' 
              : 'ios-list-outline';
            } else if (route.name === 'Calendar') {
              iconName = focused 
              ? 'ios-calendar' 
              : 'ios-calendar-outline';
            } else if (route.name === 'Settings') {
              iconName = focused 
              ? 'ios-settings' 
              : 'ios-settings-outline';
            }
           

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#603808',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen name="Chatroom" component={Chatroom}/>
        <Tab.Screen name="Diary" component={Diary} />
        <Tab.Screen name="Calendar" component={Calendar} />
        <Tab.Screen name="Settings" component={Settings} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}