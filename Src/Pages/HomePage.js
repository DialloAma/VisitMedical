import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Categories from '../Components/Categories'
import PatientHisto from '../Components/PatientHisto'
import TopMedecin from '../Components/TopMedecin'
import Boutons from '../Components/Boutons'
import Header from './Header'
import { useNavigation } from '@react-navigation/native'

const HomePage = () => {
  const navigation = useNavigation();
  return (
    <View>
      <Header/>
      <Categories/>
      <PatientHisto/>
      <TopMedecin/>
      <Boutons onPress={()=>navigation.navigate("conseil")} title="Mes conseils du jour" style={styles.button} styleTitre={styles.titre}/>
    </View>
  )
}

export default HomePage

const styles = StyleSheet.create({
    button:{
        alignItems:'center',
        borderWidth:1,
        borderColor:"#179cbc",
        marginHorizontal:30,
        height:40
    },
    titre:{
       fontSize:20,
       fontWeight:'bold',
       marginVertical:5,
       color:"#179cbc",
    }
})