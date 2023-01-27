import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Avatar } from 'react-native-paper';


const ChatCard = () => {
    return (
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: 18 }}>
            <View style={{ flexDirection: 'row', width: '80%', alignItems: 'center' }}>
                <View style={{ marginRight: 20 }}>
                    <Avatar.Image size={54} source={require('./Photo.jpg')} />
                </View>
                <View >
                    <View>
                        <Text style={{ fontWeight: 'bold', color: '#fff',paddingVertical:4 }}>Name</Text>
                    </View>
                    <View>
                        <Text style={{ color: '#000' }}>Message</Text>
                    </View>


                </View>
            </View>
            <View>
                <Text>Yesterday</Text>
            </View>
        </View>
    )
}

export default ChatCard

const styles = StyleSheet.create({})