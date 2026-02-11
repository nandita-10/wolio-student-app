import { View, Text, StyleSheet } from "react-native";

export default function StrengthChips() {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>Learning Strengths</Text>
      <View style={styles.row}>
        <Text style={styles.chipBlue}>Visual thinking</Text>
        <Text style={styles.chipGreen}>Pattern recognition</Text>
        <Text style={styles.chipPurple}>Deep focus</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: { backgroundColor: "#fff", padding: 16, borderRadius: 20, marginBottom: 20 },
  title: { fontWeight: "700", marginBottom: 8 },
  row: { flexDirection: "row", flexWrap: "wrap", gap: 8 },
  chipBlue: { backgroundColor: "#DBEAFE", padding: 8, borderRadius: 12 },
  chipGreen: { backgroundColor: "#DCFCE7", padding: 8, borderRadius: 12 },
  chipPurple: { backgroundColor: "#F3E8FF", padding: 8, borderRadius: 12 },
});
