import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import { Stack, router } from "expo-router";

export default function EmailSuccess() {
  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />

      <View style={styles.container}>

        {/* Check Circle */}
        <View style={styles.checkCircle}>
          <Text style={styles.check}>✓</Text>
        </View>

        {/* Logo */}
        <Image
          source={require("../assets/wolio/logo.png")}
          style={styles.logo}
          resizeMode="contain"
        />

        {/* Title */}
        <Text style={styles.title}>Email Verified</Text>

        {/* Subtitle */}
        <Text style={styles.subtitle}>
          Your email has been confirmed successfully
        </Text>

        {/* Button */}
        <TouchableOpacity
          style={styles.button}
          onPress={() => router.push("/set-password")} 
        >
          <Text style={styles.buttonText}>Continue</Text>
        </TouchableOpacity>

      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E5E7EB",
    padding: 24,
    alignItems: "center",
    justifyContent: "center",
  },

  checkCircle: {
    width: 72,
    height: 72,
    borderRadius: 36,
    backgroundColor: "#6D8B74",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },

  check: {
    color: "#FFFFFF",
    fontSize: 34,
    fontWeight: "bold",
  },

  logo: {
    width: 90,
    height: 90,
    marginBottom: 16,
  },

  title: {
    fontSize: 24,
    fontWeight: "700",
    marginBottom: 8,
  },

  subtitle: {
    textAlign: "center",
    color: "#6B7280",
    marginBottom: 28,
  },

  button: {
    width: "100%",
    height: 52,
    backgroundColor: "#6D8B74",
    borderRadius: 14,
    justifyContent: "center",
    alignItems: "center",
  },

  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "600",
  },
});
