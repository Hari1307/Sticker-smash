import { type ImageSource } from 'expo-image';
import React from 'react';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';

type props = {
    imageSize: number;
    stickerSource: ImageSource;
}
export default function EmojiSticker({ imageSize, stickerSource }: props) {
    const scaleImage = useSharedValue(imageSize);
    const translateX = useSharedValue(0);
    const translateY = useSharedValue(0);

    const doubleTap = Gesture.Tap()
        .numberOfTaps(2)
        .onStart(() => {
            if (scaleImage.value !== imageSize * 2) {
                scaleImage.value = scaleImage.value * 2;
            } else {
                scaleImage.value = Math.round(scaleImage.value / 2);
            }
        })

    const imageStyle = useAnimatedStyle(() => {
        return {
            width: withSpring(scaleImage.value),
            height: withSpring(scaleImage.value),
        }
    })

    const drag = Gesture.Pan().onChange(event => {
        translateX.value += event.changeX;
        translateY.value += event.changeY;
    });

    const animatedContainer = useAnimatedStyle(() => {
        return {
            transform: [
                {
                    translateX: translateX.value
                },
                {
                    translateY: translateY.value
                }
            ]
        }
    })

    return (
        <GestureDetector gesture={drag}>
            <Animated.View style={[animatedContainer, { top: -350 }]} >
                <GestureDetector gesture={doubleTap}>
                    <Animated.Image resizeMode="contain" source={stickerSource}
                        style={[imageStyle, { width: imageSize, height: imageSize }]} />
                </GestureDetector>
            </ Animated.View>
        </GestureDetector>
    )
}