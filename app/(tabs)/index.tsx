import Button from "@/components/Button";
import CircleButton from "@/components/CircleButton";
import EmojiList from "@/components/EmojiList";
import EmojiPicker from "@/components/EmojiPicker";
import EmojiSticker from "@/components/EmojiSticker";
import IconButton from "@/components/IconButton";
import ImageViewer from "@/components/ImageViewer";
import type { ImageSource } from "expo-image";
import { launchImageLibraryAsync, useMediaLibraryPermissions } from "expo-image-picker";
import { saveToLibraryAsync } from "expo-media-library";
import { useRef, useState } from "react";
import { Platform, StyleSheet, View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { captureRef } from "react-native-view-shot";
import domtoimage from "dom-to-image";
// import * as ImagePicker from "expo-image-picker";
const placeholderImage = require("@/assets/images//background-image.png");

export default function Index() {
  const [selectedImage, setSelectedImage] = useState("");
  const [showAppOptions, setShowAppOptions] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [pickEmoji, setPickEmoji] = useState<ImageSource | undefined>(undefined);

  const [status, requestPermission] = useMediaLibraryPermissions();
  const imageRef = useRef<View>(null)

  if (status == null) {
    requestPermission();
  }

  const pickAnImage = async () => {
    let resultImage = await launchImageLibraryAsync({
      mediaTypes: "images",
      allowsEditing: true,
      quality: 1
    })

    if (!resultImage.canceled) {
      setSelectedImage(resultImage.assets[0].uri);
      setShowAppOptions(true);
    } else {
      alert("You didnt select any image")
    }
  }

  const onAddSticker = () => {
    setIsModalVisible(true);
  }

  const onClose = () => {
    setIsModalVisible(false);
  }

  const onReset = () => {
    setSelectedImage("");
    setShowAppOptions(false);
    setPickEmoji(undefined);
  }

  const onSave = async () => {
    if (Platform.OS === "web") {
      try {
        // @ts-ignore
        const webImageUrl = await domtoimage.toJpeg(imageRef.current, {
          quality: 1,
          width: 300,
          height: 440,
        });

        const link = document.createElement("a");
        link.download = "sticker-smash.jpeg";
        link.href = webImageUrl;
        link.click();
      } catch (e) {
        console.log(e);
      }
    } else {
      try {
        if (status === null) {
          requestPermission();
          alert("try saving now");
          return;
        }

        const localUri = await captureRef(imageRef, {
          height: 440,
          quality: 1
        })

        await saveToLibraryAsync(localUri);

        if (localUri) {
          alert("Saved a Image");
        }
      }
      catch (e) {
        console.log(e);
      }
    }
  }

  return (
    <GestureHandlerRootView style={style.container}>
      <View style={style.imageContainer}>
        <View ref={imageRef} collapsable={false}>
          <ImageViewer imgSource={placeholderImage} selectedImage={selectedImage} />
          {pickEmoji && <EmojiSticker stickerSource={pickEmoji} imageSize={40} />}
        </View>
      </View>
      {showAppOptions ? (
        <View style={style.optionsContainer}>
          <View style={style.optionsRow}>
            <IconButton icon="refresh" label="Reset" onPress={onReset} />
            <CircleButton onPress={onAddSticker} />
            <IconButton icon="save-alt" label="Save" onPress={onSave} />
          </View>
        </View>) :
        <View style={style.footerContainer}>
          <Button theme="primary" label="Choose a photo" onPress={pickAnImage} />
          <Button label="Use this photo" onPress={() => setShowAppOptions(true)} />
        </View>
      }
      <EmojiPicker isVisible={isModalVisible} onClose={onClose}>
        <EmojiList onSelect={setPickEmoji} onCloseModal={onClose} />
      </EmojiPicker>
    </GestureHandlerRootView>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#25292e",
    justifyContent: "center",
    alignItems: "center"
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
  button: {
    fontSize: 20,
    color: "white",
    padding: 20,
    textDecorationLine: "underline"
  },
  imageContainer: {
    flex: 1
  },
  footerContainer: {
    flex: 1 / 3,
    // alignItems: "center"
  },
  optionsContainer: {
    position: "absolute",
    bottom: 80
  },
  optionsRow: {
    flexDirection: "row",
    alignItems: "center"
  }
})
