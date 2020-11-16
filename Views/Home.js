import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
// Views
import Product from '../Views/product';
class Home extends Component {
  constructor() {
    super();
  }
  render() {
    const Stack = createStackNavigator();
    return (
      <>
        <Stack.Navigator>
          <Stack.Screen name="Product" component={Product} />
        </Stack.Navigator>
        {/* <Text>111</Text> */}
      </>
    );
  }
}

export default Home;
