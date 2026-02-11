import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function WeekChart() {
  return (
    <View style={styles.card}>
      <View style={styles.row}>
        <View>
          <Text style={styles.title}>This Week</Text>
          <Text style={styles.hours}>9.6 hours</Text>
        </View>

        <TouchableOpacity>
          <Text style={styles.details}>Details</Text>
        </TouchableOpacity>
      </View>

      {/* Fake Bar Chart */}
      <View style={styles.chartRow}>
        {[40, 70, 30, 90, 50, 60, 80].map((h, i) => (
          <View key={i} style={styles.barContainer}>
            <View style={[styles.bar, { height: h }]} />
          </View>
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
    elevation: 4,
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },

  title: {
    fontSize: 16,
    fontWeight: "600",
  },

  hours: {
    fontSize: 22,
    fontWeight: "700",
  },

  details: {
  color: "#000",
  borderWidth: 1,
  borderColor: "#F3F4F6",
  backgroundColor: "#F3F4F6",
  paddingHorizontal: 10,
  paddingVertical: 4,
  borderRadius: 8,
},


  chartRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    height: 100,
  },

  barContainer: {
    width: 16,
    justifyContent: "flex-end",
  },

  bar: {
    width: "100%",
    backgroundColor: "#6B7280",
    borderRadius: 6,
  },
});
