import FontAwesome from '@expo/vector-icons/FontAwesome'
import React from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'

type props = {
    label: string,
    theme?: string,
    onPress?: () => void
}

export default function Button({ label, theme, onPress }: props) {
    if (theme === "primary") {
        return (
            <View style={[styles.container, { borderColor: "yellow", borderWidth: 5, borderRadius: 18 }]}>
                <Pressable style={[styles.button, { backgroundColor: "white" }]} onPress={onPress}>

                    <FontAwesome name="picture-o" size={18} color="#25292e" style={styles.buttonIcon} />
                    <Text style={[styles.buttonLabel, { color: "black" }]}>{label}</Text>
                </Pressable>
            </View>
        )
    }
    return (
        <View style={styles.container}>
            <Pressable style={styles.button} onPress={onPress}>
                <Text style={styles.buttonLabel}>{label}</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: 320,
        height: 60,
        marginHorizontal: 20,
        justifyContent: "center",
        alignItems: "center",
        padding: 3,
    },
    button: {
        borderRadius: 10,
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'

    },
    buttonIcon: {
        paddingRight: 10
    },
    buttonLabel: {
        color: "white",
        fontSize: 15,
    }
})