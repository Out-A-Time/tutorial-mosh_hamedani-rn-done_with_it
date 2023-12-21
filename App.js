import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback,
  TouchableHighlight,
  TouchableNativeFeedback,
} from "react-native";

export default function App() {
  const handlePress = () => {
    console.log("Text clicked");
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text numberOfLines={1} onPress={handlePress}>
        TouchableWithoutFeedback
      </Text>
      {/* <Image source={require("./assets/icon.png")} /> */}
      <TouchableWithoutFeedback onPress={() => console.log("Image tapped")}>
        <Image
          width={300}
          height={200}
          blurRadius={10}
          fadeDuration={1000}
          resizeMode="contain"
          source={{ uri: "https://picsum.photos/200/300" }}
        />
      </TouchableWithoutFeedback>

      <Text numberOfLines={1}>Touchable Opacity</Text>
      <TouchableOpacity onPress={() => console.log("Image tapped")}>
        <Image
          width={300}
          height={200}
          blurRadius={10}
          fadeDuration={1000}
          resizeMode="contain"
          source={{ uri: "https://picsum.photos/200/300" }}
        />
      </TouchableOpacity>
      <Text numberOfLines={1}>TouchableHeighlight</Text>
      <TouchableHighlight onPress={() => console.log("Image tapped")}>
        <Image
          width={300}
          height={200}
          blurRadius={10}
          fadeDuration={1000}
          resizeMode="contain"
          source={{ uri: "https://picsum.photos/200/300" }}
        />
      </TouchableHighlight>
      <Text numberOfLines={1}>TouchableNativFeedback (only Android)</Text>
      <TouchableNativeFeedback onPress={() => console.log("Image tapped")}>
        <View
          style={{ width: 200, height: 70, backgroundColor: "pink" }}
        ></View>
      </TouchableNativeFeedback>
      <StatusBar style="dark" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "dodgerblue",
    alignItems: "center",
    justifyContent: "center",
  },
});
