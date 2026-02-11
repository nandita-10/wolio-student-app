import { View, Text, StyleSheet } from "react-native";

export default function Achievements() {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>Achievements</Text>
      <Text>🔥 ⚡ 🎓</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: { backgroundColor: "#fff", padding: 16, borderRadius: 20, marginBottom: 20 },
  title: { fontWeight: "700" },
});
