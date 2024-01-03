// import { StatusBar } from "expo-status-bar";
import { StyleSheet, Platform, StatusBar, Dimensions } from "react-native";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";

export default function App() {
  // return <WelcomeScreen />;
  return <ViewImageScreen />;
}

const styles = StyleSheet.create({});
