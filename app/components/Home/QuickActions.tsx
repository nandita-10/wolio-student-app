import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function QuickActions() {
  return (
    <View style={styles.row}>
      {/* Library */}
      <View style={styles.card}>
        <Ionicons name="book-outline" size={26} color="#4B5563" />
        <Text style={styles.title}>Library</Text>
        <Text style={styles.sub}>6 active books</Text>
      </View>

      {/* AI Coach */}
      <View style={styles.card}>
        <Ionicons name="bulb-outline" size={26} color="#4B5563" />
        <Text style={styles.title}>AI Coach</Text>
        <Text style={styles.sub}>Get insights</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },

  card: {
    backgroundColor: "#FFFFFF",
    width: "48%",
    borderRadius: 18,
    padding: 16,
    elevation: 4,
  },

  title: {
    fontSize: 14,
    fontWeight: "600",
    marginTop: 10,
  },

  sub: {
    fontSize: 12,
    color: "#6B7280",
    marginTop: 2,
  },
});
