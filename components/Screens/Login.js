import { StyleSheet, Text, View,SafeAreaView, TouchableOpacity } from 'react-native'
import React from 'react'

const Login = () => {
  return (
    <SafeAreaView style={{flex:1}}>
      <TouchableOpacity style={{flex:1,justifyContent:'center',alignItems:'center'}}>
        <View style={{backgroundColor:'green',width:100,padding:14}}>
            <Text style={{color:'#fff',textAlign:'center'}}>Login</Text>
        </View>
        </TouchableOpacity>
    </SafeAreaView>
  )
}

export default Login

const styles = StyleSheet.create({})