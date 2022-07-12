import { StyleSheet, Text, View, Button } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View>
        <Text>Another text view you are view here!</Text>
      </View>
      <Text style={styles.headline}>FREECODECLOUD.COM</Text>
      <Text>Hello World!</Text>

      <Button title="Click Here" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  headline: {
    color: "red",
    margin: 16,
    padding: 16,
    borderColor: "red",
    borderWidth: 1,
  },
});
