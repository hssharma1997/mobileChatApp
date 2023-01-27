import { StyleSheet, Text, View,SafeAreaView, ScrollView, TouchableOpacity } from 'react-native'
import React, { useEffect,useState } from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons';
import ContactCard from '../common/ContactCard';



const ContactsList = ({navigation}) => {
const [contactsData,setContactsData]=useState([])


  return (
    <SafeAreaView style={{flex:1}}>
      <View style={{flexDirection:'row',justifyContent:'space-between',paddingHorizontal:16,paddingVertical:10,marginBottom:10,elevation:10}}>
        <View style={{flexDirection:'row',alignItems:'center'}}>
            <TouchableOpacity style={{marginRight:30}} onPress={()=>navigation.pop()}>
                <Icon name="arrow-back" size={30} color="#000" />
                </TouchableOpacity>
        
        <Text>Select Contact</Text>
        </View>
    
      <Icon name="search" size={30} color="#000" />
      </View>
      <ScrollView contentContainerStyle={{paddingHorizontal:16,backgroundColor:'#075E54'}}>
        <ContactCard/>
      </ScrollView>
      </SafeAreaView>
  )
}

export default ContactsList

const styles = StyleSheet.create({})