import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";


export default function ContinueCard() {
  return (
    <View style={styles.card}>
      <Text style={styles.small}>CONTINUE LEARNING</Text>

      <Text style={styles.title}>The Nature of Learning</Text>

      <Text style={styles.gray}>
        Physics · Chapter 12 · 15 mins left
      </Text>

      {/* Progress */}
      <View style={styles.progressBar}>
        <View style={styles.fill} />
      </View>

      <View style={styles.progressRow}>
        <Text style={styles.gray}>65% Complete</Text>
        <Text style={styles.gray}>145 / 223 pages</Text>
      </View>

      {/* Button */}
      <TouchableOpacity activeOpacity={0.8}>
  <LinearGradient
    colors={["#C27AFF", "#AD46FF", "#2B7FFF"]}
    start={{ x: 0, y: 0 }}
    end={{ x: 1, y: 1 }}
    style={styles.button}
  >
    <Text style={styles.buttonText}>Continue Learning →</Text>
  </LinearGradient>
</TouchableOpacity>

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

  small: {
    fontSize: 12,
    color: "#9CA3AF",
  },

  title: {
    fontSize: 18,
    fontWeight: "700",
    marginVertical: 4,
  },

  gray: {
    color: "#6B7280",
    fontSize: 12,
  },

  progressBar: {
    height: 8,
    backgroundColor: "#E5E7EB",
    borderRadius: 8,
    marginVertical: 10,
  },

  fill: {
    width: "65%",
    height: "100%",
    backgroundColor: "#BE70FE",
    borderRadius: 8,
  },

  progressRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 14,
  },

 button: {
  paddingVertical: 14,
  borderRadius: 14,
  alignItems: "center",
  shadowColor: "#AD46FF",
  shadowOffset: { width: 0, height: 6 },
  shadowOpacity: 0.4,
  shadowRadius: 12,
  elevation: 8,
},


  buttonText: {
    color: "#FFF",
    fontWeight: "600",
    fontSize: 14,
  },
});
