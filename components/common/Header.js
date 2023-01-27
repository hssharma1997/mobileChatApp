import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons';


const Header = () => {
    return (
        <View style={styles.headerContainer}>
            <View>
                <Text style={{ fontSize: 16 }}>MautChat</Text>
            </View>

            <Icon name="search" size={30} color="#000" />

        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
        paddingVertical: 10,
        marginBottom: 10,
        backgroundColor: '#128C7E',
        elevation: 10
    }
})