import { Ionicons } from '@expo/vector-icons'
import { Tabs } from 'expo-router'
import React from 'react'

export default function TabLayout() {
    return (
        <Tabs screenOptions={{
            tabBarActiveTintColor: "#ffd33d",
            headerStyle: {
                backgroundColor: "#25292e"
            },
            tabBarStyle: {
                backgroundColor: "#25292e"
            },
            headerTintColor: '#fff',
            headerShadowVisible: false, // see the mobile to see exact view or difference 
        }}>
            <Tabs.Screen name='index' options={{
                title: "Home",
                tabBarIcon: ({ color, focused }) => (
                    <Ionicons name={focused ? "home-sharp" : "home-outline"} color={color} size={24} />
                )

            }} />
            <Tabs.Screen name='about' options={{
                title: "About",
                tabBarIcon: ({ color, focused }) => (
                    <Ionicons name={focused ? "information-circle-sharp" : "information-circle-outline"} color={color} size={24} />
                )
            }} />
        </Tabs>
    )
}
