import { Dimensions, FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const {width}=Dimensions.get("window")

const Data=[
    {icone:require('../../Images/medicine.png'), titre:'Médecins'},
    {icone:require('../../Images/HOPITAL.png'), titre:'Hopitaux'},
    {icone:require('../../Images/PHARMACIE.png'), titre:'Pharmacies'},
    {icone:require('../../Images/MEDOC.png'), titre:'Médicaments'},
]

const Categories = () => {
  return (
    <View style={styles.categori_container} >
      <View style={styles.header}>
      <Text style={{fontWeight:'bold',fontSize:20}}>Que Recherchez-Vous</Text>
      <TouchableOpacity>
        <Image source={require('../../Images/search.png')} style={{width:20,height:20}}/>
      </TouchableOpacity>

      </View>
      
      <FlatList horizontal showsHorizontalScrollIndicator={false}
      data={Data}
      renderItem={({item})=>{
        return(
            <Afficher items={item}/>
        )
      }} />
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
      marginHorizontal:10,
      marginVertical:5
    },
    element:{
        marginHorizontal:10,
        marginVertical:15
    },
    titre:{
        fontSize:15,
        fontWeight:'bold'
    }
})