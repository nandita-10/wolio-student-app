import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function UserCard() {
  return (
    <View style={styles.card}>
      {/* Top Row */}
      <View style={styles.topRow}>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>JM</Text>
        </View>

        <View>
          <Text style={styles.name}>Jordan Martinez</Text>
          <Text style={styles.id}>WOLIO ID: @jordan_m_2024</Text>
        </View>
      </View>

      {/* Divider */}
      <View style={styles.divider} />

      {/* Stats */}
      <View style={styles.statsRow}>
        <View style={styles.stat}>
          <Text style={styles.statNumber}>12</Text>
          <Text style={styles.statLabel}>Books Done</Text>
        </View>

        <View style={styles.stat}>
          <Text style={styles.statNumber}>127.5h</Text>
          <Text style={styles.statLabel}>Total Time</Text>
        </View>

        <View style={styles.stat}>
          <Text style={styles.statNumber}>4</Text>
          <Text style={styles.statLabel}>Day Streak</Text>
        </View>
      </View>

      {/* Share Button */}
      <TouchableOpacity style={styles.button}>
        <Ionicons name="share-social-outline" size={16} color="#E5E7EB" />
        <Text style={styles.buttonText}> Share Learning ID</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#5F6F64",
    borderRadius: 22,
    padding: 18,
    marginBottom: 20,
  },

  topRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },

  avatar: {
    width: 56,
    height: 56,
    borderRadius: 28,
    borderWidth: 2,
    borderColor: "#9CA3AF",
    justifyContent: "center",
    alignItems: "center",
  },

  avatarText: {
    color: "#E5E7EB",
    fontWeight: "700",
    fontSize: 16,
  },

  name: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "700",
  },

  id: {
    color: "#D1D5DB",
    fontSize: 12,
    marginTop: 2,
  },

  divider: {
    height: 1,
    backgroundColor: "#7A8F83",
    marginVertical: 16,
  },

  statsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 16,
  },

  stat: {
    alignItems: "center",
  },

  statNumber: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "700",
  },

  statLabel: {
    color: "#D1D5DB",
    fontSize: 11,
  },

  button: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#9CA3AF",
    borderRadius: 14,
    paddingVertical: 12,
  },

  buttonText: {
    color: "#E5E7EB",
    fontSize: 14,
    fontWeight: "500",
  },
});
