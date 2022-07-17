import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const Boutons = ({title,onPress,style,styleTitre}) => {
  return (
    <TouchableOpacity onPress={onPress} style={style}>
      <Text style={styleTitre}>{title}</Text>
    </TouchableOpacity>
  )
}

export default Boutons

const styles = StyleSheet.create({})