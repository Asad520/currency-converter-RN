import React from 'react';
import {TouchableOpacity} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Entypo from 'react-native-vector-icons/Entypo';

import {Home} from '../pages/home';
import {Options} from '../pages/options';
import {CurrencyList} from '../pages/currencyList';
import {colors} from '../utils/constants';

const MainStack = createStackNavigator();

const MainStackScreen = () => (
  <MainStack.Navigator>
    <MainStack.Screen
      name="Home"
      component={Home}
      options={{headerShown: false}}
    />
    <MainStack.Screen name="Options" component={Options} />
  </MainStack.Navigator>
);

const ModalStack = createStackNavigator();
const ModalStackScreen = () => (
  <ModalStack.Navigator mode="modal" initialRouteName="Main">
    <ModalStack.Screen
      name="Main"
      component={MainStackScreen}
      options={{headerShown: false}}
    />
    <ModalStack.Screen
      name="CurrencyList"
      component={CurrencyList}
      options={({navigation, route}) => ({
        title: route.params && route.params.title,
        headerLeft: null,
        headerRight: () => (
          <TouchableOpacity
            onPress={() => navigation.pop()}
            style={{paddingHorizontal: 10}}>
            <Entypo name="cross" size={30} color={colors.blue} />
          </TouchableOpacity>
        ),
      })}
    />
  </ModalStack.Navigator>
);

export default () => (
  <NavigationContainer>
    <ModalStackScreen />
  </NavigationContainer>
);
