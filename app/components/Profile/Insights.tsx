import { View, Text, StyleSheet } from "react-native";

export default function Insights() {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>Learning Insights</Text>
      <Text>Peak Performance: 2–4 PM</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: { backgroundColor: "#fff", padding: 16, borderRadius: 20, marginBottom: 20 },
  title: { fontWeight: "700" },
});
