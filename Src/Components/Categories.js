import { Dimensions, FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'


const {width}=Dimensions.get("window")

const Data=[
    {path:"medecins", icone:require('../../Images/medicine.png'), titre:'Médecins'},
    {icone:require('../../Images/HOPITAL.png'), titre:'Hopitaux'},
    {icone:require('../../Images/PHARMACIE.png'), titre:'Pharmacies'},
    {icone:require('../../Images/MEDOC.png'), titre:'Médicaments'},
]

const Categories = () => {
  const navigation = useNavigation()
  const [click,setClick]=useState(false)
  return (
    <View style={styles.categori_container} >
      <View style={styles.header}>
      <Text style={{fontWeight:'bold',fontSize:20}}>Que Recherchez-Vous</Text>

      <TouchableOpacity>
        
        <Image source={require('../../Images/search.png')} style={{width:20,height:20}}/>
      </TouchableOpacity>

      </View>
      <View style={{flexDirection:'row',marginTop:15}}>
        <TouchableOpacity onPress={()=>navigation.navigate("medecins")} style={styles.element}>
          <View style={{borderRadius:50,backgroundColor:"#e8f9fd",alignItems:'center',padding:10,width:60}}>
          <Image source={require('../../Images/medicine.png')} style={{width:30,height:35}}/>
          </View>
            
            <Text style={styles.titre}>Médecins</Text>
        </TouchableOpacity>
   

        <TouchableOpacity onPress={()=> navigation.navigate("hopitaux")}  style={styles.element}>
          <View style={{borderRadius:200,backgroundColor:"#e8f9fd",alignItems:'center',padding:10,width:60}}>
          <Image source={require('../../Images/HOPITAL.png')} style={{width:30,height:35}}/>
          </View>
            
            <Text style={styles.titre}>Hopitaux</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=> navigation.navigate("pharmacie")} style={styles.element}>
          <View style={{borderRadius:200,backgroundColor:"#e8f9fd",alignItems:'center',padding:10,width:60,marginLeft:10}}>
          <Image source={require('../../Images/PHARMACIE.png')} style={{width:30,height:35}}/>
          </View>
            
            <Text style={styles.titre}>Pharmacies</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=> navigation.navigate("medicament")} style={styles.element}>
          <View style={{backgroundColor:"#e8f9fd",alignItems:'center',padding:10,width:60,marginLeft:10,borderRadius:50}}>
          <Image source={require('../../Images/MEDOC.png')} style={{width:30,height:35}}/>
          </View>
  
            <Text style={styles.titre}>Médicaments</Text>
          
            
        </TouchableOpacity>

      </View>
      
   
       <TouchableOpacity style={{flexDirection:'row-reverse',marginHorizontal:10}}>
        <Text style={{fontWeight:'bold',color:"#179cbc"}}>Voir tous</Text>
        </TouchableOpacity>
    </View>
  )
}

//component pour afficher une categorie
const Afficher=({items})=>{
 
    return(
        <TouchableOpacity style={styles.element}>
          <View style={{borderRadius:50,backgroundColor:"#e8f9fd",alignItems:'center',padding:10}}>
          <Image source={items.icone} style={{width:30,height:35}}/>
          </View>
            
            <Text style={styles.titre}>{items.titre}</Text>
        </TouchableOpacity>
    )
}
export default Categories

const styles = StyleSheet.create({
    categori_container:{
      width:width,
      height:width/2-50,
      backgroundColor:"white",
      marginVertical:5,
      elevation:8
    },
    header:{
      flexDirection:'row',
      justifyContent:'space-between',
      marginHorizontal:15,
      marginVertical:5
    },
    element:{
      marginHorizontal:10,
        
    },
    titre:{
        fontSize:15,
        fontWeight:'bold'
    }
})