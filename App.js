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
import Card from "./app/components/Card";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
import ListItem from "./app/components/ListItem";
import MessagesScreen from "./app/screens/MessagesScreen";

export default function App() {
  // return <ListingDetailsScreen />;
  // return (
  //   <View style={{ backgroundColor: "#f8f4f4", padding: 20, paddingTop: 100 }}>
  //     <Card
  //       title="Red jacket for sale"
  //       subTitle={"$108"}
  //       image={require("./app/assets/jacket.jpg")}
  //     />
  //   </View>
  // );
  // return <WelcomeScreen />;
  // return <ViewImageScreen />;
  return <MessagesScreen />;

  // return (
  //   <View>
  //     <AppButton title="Login" onPress={() => console.log("Tapped")} />
  //   </View>
  // );
}

const styles = StyleSheet.create({});
