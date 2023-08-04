import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, Stack } from '@react-navigation/stack';
import KnowYou1 from './src/Components/knowYou1';
import KnowYou2 from './src/Components/knowYou2';
import KnowYou3 from './src/Components/knowYou3';
import KnowYou4 from './src/Components/knowYou4';
import Register from './src/Components/register';
import Demo from './src/Components/demo';
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="register" component={Register} />
        <Stack.Screen name="knowYou1" component={KnowYou1} />
        <Stack.Screen name="knowYou2" component={KnowYou2} />
        <Stack.Screen name="knowYou3" component={KnowYou3} />
        <Stack.Screen name="knowYou4" component={KnowYou4} />
        <Stack.Screen name="demo" component={Demo} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;