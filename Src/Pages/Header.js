import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { useNavigation } from '@react-navigation/native'

const {width} = Dimensions.get("window")

const Header = () => {
  const navigation=useNavigation()
  return (
    <View style={styles.header_containent}>
      <TouchableOpacity onPress={()=>navigation.openDrawer()} style={styles.items}>
            <FontAwesome name='align-justify' style={{fontSize:30, color:'black'}}/>
      </TouchableOpacity>
      <Text style={styles.titre}>VISA MEDICAL</Text>
      <TouchableOpacity onPress={()=>navigation.navigate('notification')}  style={styles.items}>
      <FontAwesome name='bell' style={{fontSize:30, color:'black'}}/>
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