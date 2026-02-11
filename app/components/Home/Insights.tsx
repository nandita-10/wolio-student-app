import { View, Text, StyleSheet } from "react-native";

export default function Insights() {
  return (
    <View style={styles.card}>
      <Text style={styles.heading}>TODAY’S INSIGHTS</Text>

      <View style={styles.row}>
        <View style={[styles.dot, { backgroundColor: "#22C55E" }]} />
        <Text style={styles.text}>
          You’re 15% more focused this week
        </Text>
      </View>

      <View style={styles.row}>
        <View style={[styles.dot, { backgroundColor: "#374151" }]} />
        <Text style={styles.text}>
          4-day learning streak! Keep it up
        </Text>
      </View>

      <View style={styles.row}>
        <View style={[styles.dot, { backgroundColor: "#F59E0B" }]} />
        <Text style={styles.text}>
          Physics mastery increased by 12%
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#E5E7EB",
    borderRadius: 20,
    padding: 18,
    marginBottom: 30,
  },

  heading: {
    fontSize: 12,
    fontWeight: "700",
    color: "#4B5563",
    marginBottom: 12,
  },

  row: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },

  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginRight: 10,
  },

  text: {
    fontSize: 13,
    color: "#374151",
  },
});
