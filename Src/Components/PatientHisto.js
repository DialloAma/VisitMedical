import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const {width}=Dimensions.get("window")

const PatientHisto = () => {
  return (
    <View style={styles.histo_container}>
      <TouchableOpacity activeOpacity={0.5} style={styles.histo}>
        <Image source={require('../../Images/historique.png')} style={{width:50,height:50,marginVertical:10}}/>
        <Text style={styles.titre}>Mon Historique</Text>
      </TouchableOpacity>
      <TouchableOpacity activeOpacity={0.5}  style={styles.histo}>
      <Image source={require('../../Images/medical-records.png')} style={{width:50,height:50,marginVertical:10}}/>
      <Text style={styles.titre}>Mon Dossier Médical</Text>
      </TouchableOpacity>
    </View>
  )
}

export default PatientHisto

const styles = StyleSheet.create({
    histo_container:{
        width:width,
        height:width/2-50,
        backgroundColor:"#179cbc",
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
    histo:{
        backgroundColor:'white',
        width:width/2-40,
        height:120,
        marginHorizontal:20,
        borderRadius:5,
        alignItems:'center'
        
    },
    titre:{
        fontWeight:'bold',
        fontSize:20
    }
})