import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Home from './Home';
import About from './About';
const App = () => {
  const Drawer = createDrawerNavigator();
  return (
    <NavigationContainer>
    <Drawer.Navigator screenOptions={({})=>({
      drawerStyle: {
        backgroundColor: '#ffffff'
      },
      drawerLabelStyle:{
        color:'#000000',
        fontSize:16
      },
      headerStyle:{backgroundColor:'green'},
      drawerPosition:'left'



   
   }

    )}>
    <Drawer.Screen name="Home" component={Home} />
    <Drawer.Screen name="About" component={About} />
  </Drawer.Navigator>
  </NavigationContainer>

  )
}

export default App

const styles = StyleSheet.create({})