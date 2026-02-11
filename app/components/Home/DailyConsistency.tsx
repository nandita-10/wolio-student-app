import { View, Text, StyleSheet } from "react-native";

export default function DailyConsistency() {
  const days = [true, true, false, true, true, false, true];

  return (
    <View style={styles.card}>
      <Text style={styles.title}>Daily Consistency</Text>
      <Text style={styles.subtitle}>You're doing great 🔥</Text>

      <View style={styles.row}>
        {days.map((active, index) => (
          <View
            key={index}
            style={[
              styles.dot,
              active ? styles.activeDot : styles.inactiveDot,
            ]}
          />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#FFF",
    padding: 18,
    borderRadius: 20,
    marginBottom: 20,
    elevation: 3,
  },

  title: {
    fontSize: 16,
    fontWeight: "600",
  },

  subtitle: {
    fontSize: 12,
    color: "#6B7280",
    marginBottom: 14,
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  dot: {
    width: 16,
    height: 16,
    borderRadius: 8,
  },

  activeDot: {
    backgroundColor: "#4F46E5",
  },

  inactiveDot: {
    backgroundColor: "#E5E7EB",
  },
});
