import 'react-native-gesture-handler';
import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';

// Components
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
} from 'react-native';

// Views
import Home from './Views/Home';
import Detail from './Views/Detail';
import Product from './Views/product';
// Apis
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
class App extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <>
        <NavigationContainer>
          <Drawer.Navigator initialRouteName="Home">
            <Drawer.Screen name="Home" component={Home} />
            <Drawer.Screen name="Detail" component={Detail} />
          </Drawer.Navigator>
        </NavigationContainer>
      </>
    );
  }
  // render() {
  //   return (
  //     <>
  //       <NavigationContainer>
  //         <Stack.Navigator
  //           screenOptions={{
  //             headerStyle: {
  //               backgroundColor: 'pink',
  //             },
  //             headerTintColor: '#fff',
  //             headerTitleStyle: {
  //               fontWeight: 'bold',
  //             },
  //           }}>
  //           <Stack.Screen
  //             name="Home"
  //             component={Home}
  //             options={{
  //               title: '首页',
  //               headerRight: () => (
  //                 <Button
  //                   onPress={() => alert('This is a button!')}
  //                   title="Info"
  //                   color="blank"
  //                 />
  //               ),
  //             }}
  //           />
  //           <Stack.Screen
  //             name="Detail"
  //             component={Detail}
  //             // options={{
  //             //   title: '详情页',
  //             // }}
  //             options={({route}) => {
  //               return {
  //                 title: route.params.id,
  //               };
  //             }}
  //           />
  //           <Stack.Screen
  //             name="Product"
  //             component={Product}
  //             options={{
  //               title: '产品页',
  //             }}
  //           />
  //         </Stack.Navigator>
  //       </NavigationContainer>
  //     </>
  //   );
  // }
}

export default App;
