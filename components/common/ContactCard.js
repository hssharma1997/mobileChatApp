import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Avatar } from 'react-native-paper';


const ContactCard = () => {
  return (
    <View style={{flexDirection:'row',justifyContent:'space-between',marginVertical:18}}>
     <View style={{flexDirection:'row',width:'80%'}}>
        <View style={{marginRight:20}}>
        <Avatar.Image size={54} source={require('./Photo.jpg')} />
            </View>
    <View>
        <Text style={{fontWeight:'bold',color:'#000'}}>Name</Text>
        <Text style={{color:'#000'}}>Message</Text>
    </View>
     </View>
    
    </View>
  )
}

export default ContactCard

const styles = StyleSheet.create({})