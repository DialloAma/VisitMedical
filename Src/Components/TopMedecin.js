import { Dimensions, FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const {width}=Dimensions.get("window")
const data=[
    {name:"Diallo Abdourhamane Aziz",service:"Diabeto",ville:"Conakry",hopital:"donka"},
    {name:"Diallo Abdourhamane Aziz",service:"Diabeto",ville:"Conakry",hopital:"donka"},
    {name:"Diallo Abdourhamane Aziz",service:"Diabeto",ville:"Conakry",hopital:"donka"},
    {name:"Diallo Abdourhamane Aziz",service:"Diabeto",ville:"Conakry",hopital:"donka"},
]

const TopMedecin = () => {
  return (
    <View style={styles.top_medecin_container}>
        <View style={styles.header}>
        <Text style={{fontWeight:'bold',fontSize:20}}>Médecins actifs</Text>
        <TouchableOpacity>
        <Text style={{fontWeight:'bold',color:"#179cbc"}}>Voir tous</Text>
        </TouchableOpacity>
        
        </View>
        <FlatList horizontal
         showsHorizontalScrollIndicator={false}
         data={data}
         renderItem={({item})=>{
            return(
                <AfficheDocteur items={item}/>
            )

         }}
         
         />
      
    </View>
  )
}

//une fonction pour afficher un seul docteur

const AfficheDocteur=({items})=>{
    return(
        <View style={styles.medecin_info}>
            <Image source={require('../../Images/avatar.png')} style={{width:100,height:100,alignSelf:'center',marginVertical:5}}/>
            <View style={{marginHorizontal:5}}>
            <Text style={{fontWeight:'bold'}}>{items.name}</Text>
            <Text style={{color:'lightgray',alignSelf:'center',fontWeight:'bold'}}>{items.service}</Text>
            <View style={{flexDirection:'row',alignItems:'center',marginVertical:5}}>
                <Image source={require('../../Images/market.png')} style={{width:15,height:20,marginRight:10}}/>
                <Text style={{fontWeight:'bold'}}>{items.ville}</Text>
            </View>
            <View style={{flexDirection:'row',alignItems:'center'}}>
            <Image source={require('../../Images/home.png')} style={{width:15,height:20,marginRight:10}}/>
                 <Text style={{fontWeight:'bold'}}>{items.hopital}</Text>
            </View>
            </View>
            <View style={{flexDirection:'row-reverse',marginHorizontal:10}}>
            <TouchableOpacity style={styles.joindr}>
                    <Text style={{color:'white',fontWeight:'bold'}}>Joindre</Text>
                </TouchableOpacity>
            </View>
               
        
            
        </View>
    )
}

export default TopMedecin

const styles = StyleSheet.create({
    top_medecin_container:{
        width:width,
        height:width/1-80,
        marginVertical:5,
        
    },
    header:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginHorizontal:20,
        marginVertical:5
    },
    medecin_info:{
       backgroundColor:'white',
       marginHorizontal:5,
       marginVertical:5,
       width:width/2,
       height:width/1-140,
       elevation:8,
       borderRadius:5
    },
    joindr:{
        flexDirection:'row',
        justifyContent:"flex-end",
        backgroundColor:"#179cbc",
        width:90,
        marginVertical:10,
        alignItems:'center',
        borderRadius:5,
        padding:5
    }
})
