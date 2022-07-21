import {Dimensions, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Boutons from '../Components/Boutons'
const {width} = Dimensions.get('window');

const Profil = ({route}) => {
  const {items} =route.params
  return (
    <View style={styles.profil_container}>
      <View style={styles.profile_header}>
        <FontAwesome name="user-circle" size={100} color="white" />
        <Text
          style={{
            color: 'white',
            fontFamily: 'roboto',
            fontWeight: 'bold',
            fontSize: 20,
          }}>
          {items.name}
        </Text>
      </View>
      <View style={styles.star}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            marginVertical: 5,
          }}>
          <FontAwesome name="star" size={30} color="#179cbc" />
          <FontAwesome name="star" size={30} color="#179cbc" />
          <FontAwesome name="star" size={30} color="#179cbc" />
          <FontAwesome name="star" size={30} color="gray" />
        </View>

        <Text style={{marginHorizontal: 30}}>
          Spécialiste en cardiologie avec une expérience de plus de 5 ans dans
          le domaine. Diplomé de l'université GANC puis de{' '}
        </Text>
      </View>
      <View style={styles.fonction}>
        <FontAwesome
          name="user-md"
          size={20}
          color="gray"
          style={{marginLeft: 40}}
        />
        <Text style={{marginLeft: 20, fontWeight: 'bold', fontSize: 18}}>
          Spécialité
        </Text>
        <Text style={{marginLeft: 50, fontSize: 18}}>{items.service}</Text>
      </View>
      <View style={styles.fonction}>
        <FontAwesome
          name="user-md"
          size={20}
          color="gray"
          style={{marginLeft: 40}}
        />
        <Text style={{marginLeft: 20, fontWeight: 'bold', fontSize: 18}}>
          Ville
        </Text>
        <Text style={{marginLeft: 100, fontSize: 18}}>{items.ville}</Text>
      </View>
      <View style={styles.fonction}>
        <FontAwesome
          name="user-md"
          size={20}
          color="gray"
          style={{marginLeft: 40}}
        />
        <Text style={{marginLeft: 20, fontWeight: 'bold', fontSize: 18}}>
          Patient suivis
        </Text>
        <Text
          style={{
            marginLeft: 40,
            fontSize: 15,
            backgroundColor: '#179cbc',
            color: 'white',
            padding: 5,
            borderRadius:140,
            width:70
          }}>
          10000
        </Text>
      </View>
      <View style={styles.bouton_container} >
       <Boutons  title="Prendre un rendez-vous" style={styles.button} styleTitre={styles.titre}/>
      <View style={{flexDirection:'row',justifyContent:'space-evenly',marginTop:30}}>
      <TouchableOpacity>
        <FontAwesome5 name='phone-alt' color='#179cbc' size={50}/>
      </TouchableOpacity>
      <TouchableOpacity>
      <FontAwesome5 name='comment' color='#179cbc' size={50}/>
      </TouchableOpacity>
      </View>
      
      </View>
    </View>
  );
};

export default Profil;

const styles = StyleSheet.create({
  profil_container: {
    width: width,
    flex: 1,
  },
  profile_header: {
    width: width,
    height: width / 2 - 20,
    backgroundColor: '#179cbc',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 5,
  },
  star: {
    height: width / 3,
    width: width,
    backgroundColor: 'white',
  },
  fonction: {
    flexDirection: 'row',
    marginTop: 3,
    backgroundColor: 'white',
    height: 45,
    alignItems: 'center',
  },
  bouton_container:{
    marginTop:3,
    backgroundColor:'white',
    flex:1
  },
  button:{
    alignItems:'center',
    borderWidth:1,
    borderColor:"#179cbc",
    backgroundColor:"#179cbc",
    marginHorizontal:30,
    height:40,
    borderRadius:50,
    marginTop:width/8
},
titre:{
   fontSize:20,
   fontWeight:'bold',
   alignSelf:'center',
   color:"white",
}
});
