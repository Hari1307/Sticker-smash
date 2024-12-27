import { Image, type ImageSource } from 'expo-image'
import React from 'react'
import { StyleSheet } from 'react-native'

type props = {
    imgSource: ImageSource,
    selectedImage?: string
}

export default function ImageViewer({ imgSource, selectedImage }: props) {
    const imageSource = selectedImage ? { uri: selectedImage } : imgSource;
    return (
        <Image source={imageSource} style={styles.image} />
    )
}

const styles = StyleSheet.create({
    image: {
        width: 300,
        height: 440,
        borderRadius: 15
    },

})