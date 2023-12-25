// import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Platform,
  StatusBar,
  Dimensions,
} from "react-native";
import {
  useDimensions,
  useDeviceOrientation,
} from "@react-native-community/hooks";
import { useWindowDimensions } from "react-native";

export default function App() {
  const handlePress = () => {
    console.log("Text clicked");
  };

  // Dimensions - screen is the size entire screen, window is the size of application window.
  // This is differ on Android, but is the same on iOS.
  console.log(Dimensions.get("screen"));

  // console.log(useDimensions());
  const orientation = useDeviceOrientation();
  console.log(orientation);

  // Destructuring - but 'landscape' is undefined :/ could by old npm package
  // const { landscape } = useDeviceOrientation();
  // console.log(landscape);

  console.log(useWindowDimensions());

  return (
    <SafeAreaView style={styles.containers}>
      <StatusBar style="dark" />

      <View style={styles.dimensions}></View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    // flex: 1,
    // backgroundColor: "dodgerblue",
  },
  dimensions: {
    backgroundColor: "yellow",
    // width: 150,
    width: "100%",
    // height: "50%",
    // height: landscape ? "100" : "30%",
  },
});
