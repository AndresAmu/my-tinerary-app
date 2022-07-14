import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native'
import Card from '../card'

const HomeScreen = () => {
    return (
        <>
            <View>
                <Text
                    style={{
                        fontSize: 40,
                        textAlign: 'center',
                        
                    }}
                >Cities Screen</Text>
            </View>
            <Card></Card>
        </>
    );
}

export default HomeScreen;