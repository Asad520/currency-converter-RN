import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';

const App = () => {
  return (
    <SafeAreaView>
      <Text>Meow</Text>
      <Icon name="baidu" size={40} color="red" />
    </SafeAreaView>
  );
};

export default App;
