import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

function Row({ code, title, time, progress }: any) {
  return (
    <View style={styles.row}>
      {/* Left Code Box */}
      <View style={styles.codeBox}>
        <Text style={styles.codeText}>{code}</Text>
      </View>

      {/* Middle */}
      <View style={{ flex: 1 }}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.time}>{time}</Text>

        <View style={styles.progressBg}>
          <View style={[styles.progressFill, { width: progress }]} />
        </View>
      </View>

      {/* Arrow */}
      <Ionicons name="chevron-forward" size={18} color="#9CA3AF" />
    </View>
  );
}

export default function UpNext() {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.headerRow}>
        <Text style={styles.header}>Up Next</Text>
        <Text style={styles.viewAll}>View All</Text>
      </View>

      {/* Rows */}
      <Row
        code="PH"
        title="Chapter 12: Motion & Energy"
        time="15 min left"
        progress="60%"
      />

      <Row
        code="CF"
        title="Chapter 8: Calculus Fundamentals"
        time="28 min left"
        progress="35%"
      />

      <Row
        code="IR"
        title="Chapter 5: Industrial Revolution"
        time="1h 20min left"
        progress="20%"
      />
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
    marginBottom: 14,
  },

  header: {
    fontSize: 16,
    fontWeight: "700",
  },

  viewAll: {
    fontSize: 12,
    color: "#6B7280",
  },

  row: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },

  codeBox: {
    width: 38,
    height: 38,
    borderRadius: 10,
    backgroundColor: "#F3F4F6",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },

  codeText: {
    fontWeight: "600",
    color: "#6B7280",
  },

  title: {
    fontSize: 13,
    fontWeight: "600",
  },

  time: {
    fontSize: 12,
    color: "#9CA3AF",
    marginBottom: 6,
  },

  progressBg: {
    height: 6,
    backgroundColor: "#E5E7EB",
    borderRadius: 6,
  },

  progressFill: {
    height: 6,
    backgroundColor: "#4B5563",
    borderRadius: 6,
  },
});
