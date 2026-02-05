import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { router } from "expo-router";

export default function Login() {
  return (
    <View style={styles.container}>
      
      {/* Avatar Circle */}
      <View style={styles.avatar} />

      {/* Title */}
      <Text style={styles.title}>Your Wolio ID</Text>
      <Text style={styles.subtitle}>
        We’ve created your WOLIO ID — your learning identity.
      </Text>

      {/* Name */}
      <Text style={styles.label}>Name</Text>
      <TextInput style={styles.input} placeholder="" />

      {/* Class */}
      <Text style={styles.label}>Class / Grade</Text>
      <TextInput style={styles.input} placeholder="" />

      {/* Password */}
      <Text style={styles.label}>Wolio ID Password</Text>
      <TextInput style={styles.input} secureTextEntry />

      {/* Button */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push("/success")}
      >
        <Text style={styles.buttonText}>Start Learning</Text>
      </TouchableOpacity>

      {/* Privacy */}
      <Text style={styles.privacy}>
        We respect your privacy. No spam, ever
      </Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F2F3F5",
    paddingHorizontal: 24,
    justifyContent: "center",
  },
  avatar: {
    width: 90,
    height: 90,
    borderRadius: 45,
    backgroundColor: "#C9CCD1",
    alignSelf: "center",
    marginBottom: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: "700",
    textAlign: "center",
  },
  subtitle: {
    fontSize: 14,
    color: "#6B7280",
    textAlign: "center",
    marginBottom: 30,
    marginTop: 8,
  },
  label: {
    fontSize: 14,
    color: "#6B7280",
    marginBottom: 6,
    marginTop: 14,
  },
  input: {
    backgroundColor: "#E5E7EB",
    borderRadius: 12,
    padding: 14,
  },
  button: {
    backgroundColor: "#7C7C7C",
    borderRadius: 14,
    padding: 16,
    marginTop: 28,
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "600",
  },
  privacy: {
    fontSize: 12,
    color: "#9CA3AF",
    textAlign: "center",
    marginTop: 14,
  },
});