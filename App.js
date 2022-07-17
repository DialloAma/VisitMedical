import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from './Src/Pages/Header'
import HomePage from './Src/Pages/HomePage'

const App = () => {
  return (
    <View>
      <Header/>
      <HomePage/>
    </View>
  )
}

export default App

const styles = StyleSheet.create({})