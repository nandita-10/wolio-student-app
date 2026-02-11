import { View, Text, StyleSheet } from "react-native";

export default function StatsRow() {
  return (
    <View style={styles.row}>
      <View style={[styles.card, { borderColor: "#FDBA74" }]}>
        <Text style={styles.number}>4</Text>
        <Text style={styles.label}>Day Streak</Text>
      </View>

      <View style={[styles.card, { borderColor: "#93C5FD" }]}>
        <Text style={styles.number}>355</Text>
        <Text style={styles.label}>Min This Week</Text>
      </View>

      <View style={[styles.card, { borderColor: "#86EFAC" }]}>
        <Text style={styles.number}>6</Text>
        <Text style={styles.label}>Books Active</Text>
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
    backgroundColor: "#FFF",
    width: "31%",
    padding: 16,
    borderRadius: 16,
    borderWidth: 1,
    elevation: 3,
  },
  number: {
    fontSize: 20,
    fontWeight: "700",
  },
  label: {
    fontSize: 12,
    color: "#6B7280",
  },
});
