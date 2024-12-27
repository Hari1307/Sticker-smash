import { MaterialIcons } from '@expo/vector-icons'
import React from 'react'
import { Pressable, StyleSheet, View } from 'react-native'

type props = {
    onPress: () => void
}
export default function CircleButton({ onPress }: props) {
    return (
        <View style={styles.container}>
            <Pressable style={styles.button} onPress={onPress}>
                <MaterialIcons name='add' size={40} />
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: 80,
        height: 80,
        marginHorizontal: 40,
        padding: 3,
        borderRadius: 40,
        borderWidth: 4,
        borderColor: "yellow"
    },
    button: {
        flex: 1,
        backgroundColor: "white",
        borderRadius: 40,
        justifyContent: "center",
        alignItems: "center"
    }
})