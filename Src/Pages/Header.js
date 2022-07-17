import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const {width} = Dimensions.get("window")

const Header = () => {
  return (
    <View style={styles.header_containent}>
      <TouchableOpacity style={styles.items}>
        <Image source={require('../../Images/profil.png')} style={{width:30,height:30}}/>
      </TouchableOpacity>
      <Text style={styles.titre}>VISIT MEDICAL</Text>
      <TouchableOpacity style={styles.items}>
      <Image source={require('../../Images/profil.png')} style={{width:30,height:30}}/>
      </TouchableOpacity>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    header_containent:{
        width:width,
        height:width/6,
        backgroundColor:"white",
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        elevation:8
    },
    items:{
      marginHorizontal:10
    },
    titre:{
        fontSize:20,
        fontWeight:"bold",
        fontStyle:"normal"
    }
})