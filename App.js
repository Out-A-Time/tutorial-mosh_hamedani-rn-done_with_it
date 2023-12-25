// import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";

export default function App() {
  return (
    <View style={styles.dimensions}>
      <View style={styles.flexbox_1} />
      <View style={styles.flexbox_2} />
      <View style={styles.flexbox_3} />
      <View style={styles.flexbox_4}>
        <View style={styles.align1} />
        <View style={styles.align2} />
        <View style={styles.align3} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  dimensions: {
    backgroundColor: "yellow",
    flex: 1,
  },
  flexbox_1: {
    backgroundColor: "green",
    flex: 1,
  },
  flexbox_2: {
    backgroundColor: "red",
    flex: 1,
  },
  flexbox_3: {
    backgroundColor: "blue",
    flex: 1,
  },
  flexbox_4: {
    backgroundColor: "pink",
    flex: 1,
    flexDirection: "row-reverse",
    justifyContent: "center",
    alignItems: "baseline",
  },
  align1: {
    backgroundColor: "red",
    width: 50,
    height: 50,
  },
  align2: {
    backgroundColor: "yellow",
    width: 50,
    height: 100,
  },
  align3: {
    backgroundColor: "orange",
    width: 50,
    height: 150,
  },
});
