import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function FocusTime() {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.headerRow}>
        <Text style={styles.header}>Focus Time</Text>

        <View style={styles.toggleRow}>
          <TouchableOpacity style={styles.activeToggle}>
            <Text style={styles.activeText}>Week</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.toggle}>
            <Text style={styles.toggleText}>Month</Text>
          </TouchableOpacity>
        </View>
      </View>

      <Text style={styles.sub}>This week</Text>

      {/* Fake Chart */}
      <View style={styles.chartBox}>
        <View style={[styles.dot, { top: 40, left: 10 }]} />
        <View style={[styles.dot, { top: 20, left: 50 }]} />
        <View style={[styles.dot, { top: 60, left: 90 }]} />
        <View style={[styles.dot, { top: 30, left: 130 }]} />
        <View style={[styles.dot, { top: 90, left: 170 }]} />
      </View>

      {/* Legend */}
      <View style={styles.legendRow}>
        <Text style={styles.legend}>● Focus Time</Text>
        <Text style={styles.goal}>○ Goal (60min)</Text>

        <Text style={styles.growth}>+15%</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    padding: 16,
    marginBottom: 20,
    elevation: 4,
  },

  headerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  header: {
    fontSize: 16,
    fontWeight: "700",
  },

  toggleRow: {
    flexDirection: "row",
  },

  activeToggle: {
    backgroundColor: "#4B5563",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 10,
    marginRight: 6,
  },

  toggle: {
    backgroundColor: "#E5E7EB",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 10,
  },

  activeText: {
    color: "#FFFFFF",
    fontSize: 12,
  },

  toggleText: {
    fontSize: 12,
    color: "#6B7280",
  },

  sub: {
    fontSize: 12,
    color: "#6B7280",
    marginVertical: 10,
  },

  chartBox: {
    height: 120,
    backgroundColor: "#F9FAFB",
    borderRadius: 12,
    position: "relative",
    marginBottom: 12,
  },

  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#4B5563",
    position: "absolute",
  },

  legendRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  legend: {
    fontSize: 12,
    color: "#4B5563",
  },

  goal: {
    fontSize: 12,
    color: "#9CA3AF",
  },

  growth: {
    fontSize: 12,
    color: "#16A34A",
    fontWeight: "600",
  },
});
