import { Ionicons } from '@expo/vector-icons';
import React, { type PropsWithChildren } from 'react';
import { Modal, Pressable, StyleSheet, Text, View } from 'react-native';

type Props = PropsWithChildren<{
    isVisible: boolean,
    onClose: () => void
}>;
export default function EmojiPicker({ isVisible, onClose, children }: Props) {
    return (
        <Modal animationType="slide" transparent={true} visible={isVisible}>
            <View style={styles.modalContainer}>
                <View style={styles.titleTextContainer}>
                    <Text style={styles.title}>Choose a sticker</Text>
                    <Pressable onPress={onClose}>
                        <Ionicons name="close" size={25} color="white" />
                    </Pressable>
                </View>

                {children}
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    modalContainer: {
        height: "30%",
        width: "100%",
        backgroundColor: '#25292e',
        position: "absolute",
        bottom: 0,
        borderTopRightRadius: 18,
        borderTopLeftRadius: 18,
    },
    titleTextContainer: {
        backgroundColor: "#464C55",
        flexDirection: "row",
        justifyContent: "space-between",
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
        alignItems: "center",
        height: "20%",
        paddingHorizontal: 15,
    },
    title: {
        color: "white",
        fontSize: 16
    }
})