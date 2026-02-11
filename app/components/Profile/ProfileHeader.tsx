import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function ProfileHeader() {
  return (
    <View style={styles.row}>
      <Text style={styles.title}>Profile</Text>
      <Ionicons name="settings-outline" size={22} color="#374151" />
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  title: {
    fontSize: 26,
    fontWeight: "700",
  },
});
