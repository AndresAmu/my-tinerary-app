import React from "react"
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { NavigationContainer } from "@react-navigation/native"

//Screens
import HomeScreen from "./components/screens/HomeScreen"
import CitiesScreen from "./components/screens/CitiesScreen"
import StackScreen from "./components/screens/StackScreen"
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { SafeAreaView } from "react-native-safe-area-context";

const Tab = createMaterialBottomTabNavigator();

function MyTabs() {
    return (
        
        <Tab.Navigator
            barStyle={{ backgroundColor: 'black' }}
            initialRouteName="Home"
            screenOptions={{
                tabBarColor: 'black',
                tabBarActiveTintColor: 'black',
            }}>

            <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="home" size={24} color="#ffc107" />

                    ),
                    headerShown: true,
                }} />
            <Tab.Screen
                name="Cities"
                component={CitiesScreen}
                options={{
                    tabBarLabel: 'Cities',
                    tabBarIcon: ({ color, size }) =>(
                        <MaterialCommunityIcons name="airplane" size={24} color="#ffc107" />
                    ),
                    headerShown: false,
                }}/>
                <Tab.Screen
                name="User"
                component={CitiesScreen}
                options={{
                    tabBarLabel: 'User',
                    tabBarIcon: ({ color, size }) =>(
                        <MaterialCommunityIcons name="account" size={24} color="#ffc107" />
                    ),
                    headerShown: false,
                }}/>

        </Tab.Navigator>
        
    );
}

export default function Navigation() {
    return (
        <NavigationContainer>
            <MyTabs />
        </NavigationContainer>
    );
}
