import { StyleSheet, Text, View, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Avatar } from 'react-native-paper';
import { TextInput } from 'react-native-paper';

const ChatScreen = ({ navigation }) => {
    const [message, setMessage] = useState('')
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', paddingHorizontal: 16, paddingVertical: 10, marginBottom: 10, backgroundColor: '#128C7E', elevation: 10 }}>
                <TouchableOpacity onPress={() => navigation.pop()}>
                    <Icon name="arrow-back" size={30} color="#000" style={{ marginRight: 10 }} />
                </TouchableOpacity>
                <Avatar.Image size={50} source={require('../common/Photo.jpg')} style={{ marginRight: 10 }} />
                <Text>Name</Text>



            </View>
            <ScrollView>
                <View style={{ borderRadius: 10, backgroundColor: '#fff', maxWidth: '70%', padding: 8, marginLeft: 8 }}>
                    <Text>
                        hello
                    </Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
                    <View style={{ borderRadius: 10, backgroundColor: '#fff', maxWidth: '70%', padding: 8, marginRight: 8 }}>
                        <Text>
                            hello
                        </Text>
                    </View>
                </View>
            </ScrollView>

            <View style={styles.input} >
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                    <TextInput
                        value={message}
                        onChangeText={text => setMessage(text)}
                        mode='outlined'
                        outlineStyle={{ borderRadius: 30, borderColor: '#fff' }}
                        style={{ width: '90%' }}

                    />

                    <Icon name="send" size={30} color="#000" style={{ width: '10%', marginLeft: 10 }} />

                </View>
            </View>
        </SafeAreaView>
    )
}

export default ChatScreen

const styles = StyleSheet.create({
    input: {
        position: 'absolute',
        width: '90%',
        marginHorizontal: 16,
        bottom: 4,


    },
})