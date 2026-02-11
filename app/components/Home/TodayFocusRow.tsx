import { View, Text, StyleSheet } from "react-native";

function StatBox({ title, value, subtitle }: any) {
  return (
    <View style={styles.box}>
      <Text style={styles.boxTitle}>{title}</Text>
      <Text style={styles.value}>{value}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
    </View>
  );
}

export default function TodayFocusRow() {
  return (
    <View style={styles.row}>
      <StatBox
        title="TODAY"
        value="2.1h"
        subtitle="Learning time"
      />

      <StatBox
        title="FOCUS"
        value="4"
        subtitle="Sessions"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },

  box: {
    backgroundColor: "#FFF",
    width: "48%",
    padding: 18,
    borderRadius: 20,
    elevation: 3,
  },

  boxTitle: {
    fontSize: 12,
    color: "#9CA3AF",
    marginBottom: 6,
  },

  value: {
    fontSize: 26,
    fontWeight: "700",
    marginBottom: 2,
  },

  subtitle: {
    fontSize: 12,
    color: "#6B7280",
  },
});
