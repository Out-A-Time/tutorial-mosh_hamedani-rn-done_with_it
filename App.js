// import { StatusBar } from "expo-status-bar";
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
  ScrollView,
  Button,
  Alert,
  Platform,
  StatusBar,
  Dimensions,
} from "react-native";

export default function App() {
  const handlePress = () => {
    console.log("Text clicked");
  };

  // Dimensions - screen is the size entire screen, window is the size of application window.
  // This is differ on Android, but is the same on iOS.
  console.log(Dimensions.get("screen"));

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" />
      <ScrollView>
        <Button
          title="Click Me - alert 1"
          color="orange"
          onPress={() => {
            alert("Button Alert");
            console.log("button clicked");
          }}
        />
        <Button
          title="Click Me - alert 2"
          color="orange"
          onPress={() => {
            Alert.alert("Alert title here", "Alert message here", [
              {
                text: "Yes",
                onPress: () => {
                  console.log("You pressed yes");
                },
              },
              {
                text: "No",
                onPress: () => {
                  console.log("You pressed no");
                },
              },
            ]);
          }}
        />
        <Button
          title="Click Me - prompt"
          color="green"
          onPress={() => {
            Alert.prompt("Prompt title here", "Prompt message here", (text) => {
              console.log(text);
              console.log("this prompt works only for iOS at the moment");
            });
          }}
        />
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
      </ScrollView>
      <View style={styles.dimensions}></View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    flex: 1,
    backgroundColor: "dodgerblue",
    alignItems: "center",
    justifyContent: "center",
  },
  dimensions: {
    backgroundColor: "yellow",
    // width: 150,
    width: "50%",
    height: 70,
  },
});
