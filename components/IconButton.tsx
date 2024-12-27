import { MaterialIcons } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

type props = {
    icon: keyof typeof MaterialIcons.glyphMap;
    label: string;
    onPress: () => void;
}

export default function IconButton({ icon, label, onPress }: props) {
    return (
        <View style={styles.container}>
            <MaterialIcons name={icon} size={30} color="white" onPress={onPress} />
            <Text style={styles.text} >{label}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        // justifyContent: "center",
        // alignItems: "center"
    },
    text: {
        color: "white",
    }
})