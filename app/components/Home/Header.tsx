import { View, Text, StyleSheet } from "react-native";

export default function Header() {
  return (
    <View style={styles.container}>
      <Text style={styles.greeting}>Good Morning, Jordan</Text>
      <Text style={styles.date}>Monday, February 9</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  greeting: {
    fontSize: 22,
    fontWeight: "700",
  },
  date: {
    color: "#6B7280",
    marginTop: 4,
  },
});
