import { Dimensions, FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import FontAwesome from 'react-native-vector-icons/FontAwesome'


const {width}=Dimensions.get("window")
const data=[
    {name:"Diallo Abdourhamane abdoulaye cissoko",service:"dermatologie",ville:"Conakry",hopital:"donka"},
    {name:"Diallo Abdou ",service:"Diabeto",ville:"labe",hopital:"donka"},
    {name:"Diallo Amadou oury ",service:"Diabeto",ville:"mamou",hopital:"donka"},
    {name:"Diallo Ibrahhima ",service:"Diabeto",ville:"Conakry",hopital:"donka"},
]

const TopMedecin = () => {
    const navigation=useNavigation()
  return (
    <View style={styles.top_medecin_container}>
        <View style={styles.header}>
        <Text style={{fontWeight:'bold',fontSize:20}}>Médecins actifs</Text>
        <TouchableOpacity onPress={()=>navigation.navigate('medecinactif')}>
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
    const navigation= useNavigation()
    
    return(
        <TouchableOpacity onPress={()=>navigation.navigate('profil',{items})} style={styles.medecin_info}>
            <Image source={require('../../Images/avatar.png')} style={{width:100,height:100,alignSelf:'center',marginVertical:15}}/>
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
           {/* <View style={{flexDirection:'row-reverse',marginHorizontal:10}}>
            <TouchableOpacity onPress={()=>navigation.navigate('profil',{items})} style={styles.joindr}>
                    <Text style={{color:'white',fontWeight:'bold'}}>Joindre</Text>
                    <FontAwesome name='arrow-right' style={{fontSize:20, color:'white',marginHorizontal:5}}/>
                </TouchableOpacity>
    </View>*/}
               
        
            
        </TouchableOpacity>
    )
}

export default TopMedecin

const styles = StyleSheet.create({
    top_medecin_container:{
        width:width,
        height:width/1-85,
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
       marginHorizontal:10,
       marginVertical:5,
       width:width/2-35,
       height:width/1-150,
       elevation:8,
       borderRadius:5
    },
    joindr:{
        flexDirection:'row',
        justifyContent:"flex-end",
        backgroundColor:"#179cbc",
        width:90,
        marginVertical:5,
        alignItems:'center',
        borderRadius:5,
        padding:5
    }
})
