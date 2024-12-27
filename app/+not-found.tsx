import { Link, Stack } from 'expo-router'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const NotFoundScreen = () => {
    return (
        <>
            <Stack.Screen options={{ title: "Oops.. Not found" }} />
            <View style={styles.container}>
                <Text style={styles.text}>NotFoundScreen</Text>
                {/* <Link href="/" style={styles.button} >Go back to Home page</Link> */}
            </View>
        </>
    )
}

export default NotFoundScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#25292e',
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        color: '#fff',
    },
    button: {
        fontSize: 20,
        color: "white",
        padding: 20,
        textDecorationLine: "underline"
    }
});