import { Image, type ImageSource } from 'expo-image';
import React, { useState } from 'react';
import { FlatList, Platform, Pressable, StyleSheet } from 'react-native';

type Props = {
    onSelect: (image: ImageSource) => void;
    onCloseModal: () => void;
}
export default function EmojiList({ onSelect, onCloseModal }: Props) {
    const [emoji] = useState<ImageSource[]>([
        require("../assets/images/emoji1.png"),
        require("../assets/images/emoji2.png"),
        require("../assets/images/emoji3.png"),
        require("../assets/images/emoji4.png"),
        require("../assets/images/emoji5.png"),
        require("../assets/images/emoji6.png"),
    ]);

    return (
        <FlatList
            horizontal
            showsHorizontalScrollIndicator={Platform.OS === "web"}
            data={emoji}
            contentContainerStyle={styles.listContainer}
            renderItem={({ item, index }) => (
                <Pressable onPress={() => {
                    onSelect(item);
                    onCloseModal();
                }}>
                    <Image source={item} key={index} style={styles.image} />
                </Pressable>
            )}
        />
    )
}

const styles = StyleSheet.create({
    listContainer: {
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 10,
        flexDirection: "row",
    },
    image: {
        width: 100,
        height: 100,
        marginRight: 16
    }
})