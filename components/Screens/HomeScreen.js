import { StyleSheet, Text, View, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import Header from '../common/Header'
import ChatCard from '../common/ChatCard'
import { FAB } from 'react-native-paper';


const HomeScreen = ({ navigation }) => {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#075E54' }}>
            <Header />
            <ScrollView contentContainerStyle={{ paddingHorizontal: 16 }}>
                <TouchableOpacity onPress={() => navigation.navigate('ChatScreen')}>
                    <ChatCard />
                </TouchableOpacity>

                <ChatCard />
                <ChatCard />
                <ChatCard />

            </ScrollView>
            <FAB
                icon="message-plus"
                style={styles.fab}
                onPress={() => navigation.navigate('Contacts')}
            />

        </SafeAreaView>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    fab: {
        position: 'absolute',
        margin: 16,
        right: 0,
        bottom: 0,
        borderRadius: 50,
        backgroundColor: '#fff'
    },
})