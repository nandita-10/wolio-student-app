import { View, Text, StyleSheet } from "react-native";

export default function MasteryMap() {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>Mastery Map</Text>
      <Text style={{ color: "#6B7280" }}>Radar chart coming soon...</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: { backgroundColor: "#fff", padding: 16, borderRadius: 20, marginBottom: 20 },
  title: { fontWeight: "700" },
});
