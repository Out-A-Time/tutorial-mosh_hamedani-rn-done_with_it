// import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  View,
  Text,
  Platform,
  StatusBar,
  Dimensions,
} from "react-native";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import AppButton from "./app/components/AppButton";

export default function App() {
  return <WelcomeScreen />;
  // return <ViewImageScreen />;
  // return (
  //   <View>
  //     <AppButton title="Login" onPress={() => console.log("Tapped")} />
  //   </View>
  // );
}

const styles = StyleSheet.create({});
