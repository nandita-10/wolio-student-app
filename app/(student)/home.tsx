import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";

export default function Dashboard() {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      
      <Text style={styles.welcome}>Welcome back</Text>
      <Text style={styles.subtitle}>What would you like to learn today?</Text>

      {/* Progress Cards */}
      <View style={styles.row}>
        <View style={styles.card}>
          <Text>Curriculum</Text>
          <Text style={styles.percent}>72%</Text>
        </View>

        <View style={styles.card}>
          <Text>Beyond Curriculum</Text>
          <Text style={styles.percentGreen}>58%</Text>
        </View>
      </View>

      {/* Continue Section */}
      <View style={styles.bigCard}>
        <Text style={styles.title}>Continue: Physics – Motion</Text>
        <Text style={styles.gray}>Chapter 3, 20 min left</Text>
      </View>

      {/* Practice */}
      <View style={styles.bigCard}>
        <Text style={styles.title}>Practice: Sketching</Text>
        <Text style={styles.gray}>15 min session</Text>
      </View>

      {/* Quote */}
      <View style={styles.quoteCard}>
        <Text>"Learning is about noticing patterns."</Text>
      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F5F6F8", padding: 16 },

  welcome: { fontSize: 22, fontWeight: "700" },
  subtitle: { color: "#6B7280", marginBottom: 20 },

  row: { flexDirection: "row", justifyContent: "space-between" },

  card: {
    backgroundColor: "#FFF",
    padding: 16,
    borderRadius: 16,
    width: "48%",
  },

  percent: { fontSize: 24, color: "#2563EB" },
  percentGreen: { fontSize: 24, color: "#16A34A" },

  bigCard: {
    backgroundColor: "#FFF",
    padding: 16,
    borderRadius: 16,
    marginTop: 16,
  },

  title: { fontWeight: "600" },
  gray: { color: "#6B7280" },

  quoteCard: {
    backgroundColor: "#FFF",
    padding: 16,
    borderRadius: 16,
    marginTop: 20,
  },
});

