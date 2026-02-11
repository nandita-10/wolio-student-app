import { View, Text, StyleSheet } from "react-native";

export default function MiniStatsRow() {
  return (
    <View style={styles.row}>
  <View style={styles.box}>
  <Text style={styles.boxNumber}>1.8h</Text>
  <Text style={styles.boxLabel}>Daily Avg</Text>
</View>

<View style={styles.box}>
  <Text style={styles.boxNumber}>23</Text>
  <Text style={styles.boxLabel}>Best Streak</Text>
</View>

<View style={styles.box}>
  <Text style={styles.boxNumber}>156</Text>
  <Text style={styles.boxLabel}>Notes</Text>
</View>

    </View>
  );
}

const styles = StyleSheet.create({
  row: { flexDirection: "row", justifyContent: "space-between", marginBottom: 20 },
  box: {
  backgroundColor: "#FFF",
  padding: 16,
  borderRadius: 16,
  width: "30%",
  alignItems: "center",
  elevation: 3,
},

boxNumber: {
  fontSize: 18,
  fontWeight: "700",   // darker/bold
  color: "#111827",    // near black
},

boxLabel: {
  fontSize: 12,
  color: "#6B7280",    // gray/light
  marginTop: 4,
},

});
