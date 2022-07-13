import React from 'react'
import {View, Text, StyleSheet, TouchableOpacity,ImageBackground} from 'react-native'

const HomeScreen = () => {

    return( 
        <View>
            <ImageBackground
                source={require('../assets/fondo.jpg')}
                style={{
                    backgroundColor: '#0000002f',
                    height: '100%'
                }}>
        <View>
            <Text
            style={{
                fontSize:30,
                textAlign: 'center',
                marginTop: '20%'
            }}
            >Cities Screen</Text>
        </View>
        </ImageBackground>
        </View>
    );
}

export default HomeScreen;