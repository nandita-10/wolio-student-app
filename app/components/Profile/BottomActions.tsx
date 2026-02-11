import { View, Text, StyleSheet } from "react-native";

export default function BottomActions() {
  return (
    <View style={styles.card}>
      <Text>AI Coach</Text>
      <Text>Learning Preferences</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: { backgroundColor: "#fff", padding: 16, borderRadius: 20, marginBottom: 40 },
});
