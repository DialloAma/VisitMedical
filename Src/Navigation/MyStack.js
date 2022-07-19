import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Historique from '../Pages/Historique'
import HomePage from '../Pages/HomePage'
import DossierMedical from '../Pages/DossierMedical'
import Médecins from '../Pages/Médecins'
import Hopitaux from '../Pages/Hopitaux'
import Pharmacies from '../Pages/Pharmacies'
import Médicaments from '../Pages/Médicaments'
import MedecinsActif from '../Pages/MedecinsActif'
import JoindreMedecin from '../Pages/JoindreMedecin'
import Conseils from '../Pages/Conseils'
import Profil from '../Pages/Profil'


const Stack = createNativeStackNavigator()

const MyStack = () => {
  return (
    
      <Stack.Navigator initialRouteName='homapage'>
        <Stack.Screen options={{headerShown:false}} name='homepage' component={HomePage}/>
        <Stack.Screen options={{headerTitle:"Historique du Patient"}} name='histo' component={Historique}/>
        <Stack.Screen options={{headerTitle:"Dossier medical du Patient"}} name='dosierMedical' component={DossierMedical}/>
        <Stack.Screen options={{headerTitle:"Médecins"}} name='medecins' component={Médecins}/>
        <Stack.Screen options={{headerTitle:"Hopitaux"}} name='hopitaux' component={Hopitaux}/>
        <Stack.Screen options={{headerTitle:"Pharmacies"}} name='pharmacie' component={Pharmacies}/>
        <Stack.Screen options={{headerTitle:"Médicaments"}} name='medicament' component={Médicaments}/>
        <Stack.Screen options={{headerTitle:"Médecins Actifs"}} name='medecinactif' component={MedecinsActif}/>
        <Stack.Screen options={{headerTitle:"Joindre un Médecin"}} name='joindremedecin' component={JoindreMedecin}/>
        <Stack.Screen options={{headerTitle:"Mes conseils"}} name='conseil' component={Conseils}/>
        <Stack.Screen options={{headerTitle:"Mon Profil"}} name='profil' component={Profil}/>
      </Stack.Navigator>
    
  )
}

export default MyStack

const styles = StyleSheet.create({})