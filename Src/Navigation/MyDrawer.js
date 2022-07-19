import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { NavigationContainer } from '@react-navigation/native'
import HomePage from '../Pages/HomePage'
import Header from '../Pages/Header'
import MyStack from './MyStack'


const Drawer = createDrawerNavigator()
const MyDrawer = () => {
  return (
    
      <Drawer.Navigator screenOptions={{ headerShown: false} } >
        <Drawer.Screen name='Home' component={MyStack}/>
        
        
        
      </Drawer.Navigator>
   
  )
}

export default MyDrawer

const styles = StyleSheet.create({})