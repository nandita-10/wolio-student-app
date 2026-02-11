import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { Stack, router, useLocalSearchParams } from "expo-router";
import { useState } from "react";

export default function CheckEmail() {
  const { email } = useLocalSearchParams();
  const [loading, setLoading] = useState(false);

  const handleResend = async () => {
    try {
      setLoading(true);

      await fetch("http://192.168.1.15:5000/api/auth/reset-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      alert("Email sent again!");
    } catch (err) {
      alert("Failed to resend");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />

      <View style={styles.container}>
        {/* Icon */}
        <View style={styles.iconCircle}>
          <Text style={styles.icon}>✉️</Text>

          {/* Tick */}
          <View style={styles.tickCircle}>
            <Text style={{ color: "#fff", fontSize: 12 }}>✓</Text>
          </View>
        </View>

        {/* Title */}
        <Text style={styles.title}>Check Your Email</Text>

        {/* Subtitle */}
        <Text style={styles.subtitle}>
          We've sent password reset instructions to your email address.
          Please check your inbox and follow the link to reset your password.
        </Text>

        {/* Button */}
        <TouchableOpacity
          style={styles.button}
          onPress={handleResend}
          disabled={loading}
        >
          <Text style={styles.buttonText}>
            {loading ? "Sending..." : "Resend Email"}
          </Text>
        </TouchableOpacity>

        {/* Footer */}
        <Text style={styles.footer}>Haven’t Received mail</Text>
      </View>
    </>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E5E7EB",
    padding: 24,
    justifyContent: "center",
    alignItems: "center",
  },

  iconCircle: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: "#6D8B74",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 24,
    position: "relative",
  },

  icon: {
    fontSize: 36,
    color: "#FFF",
  },

  tickCircle: {
    position: "absolute",
    bottom: 0,
    right: 0,
    backgroundColor: "#22C55E",
    width: 28,
    height: 28,
    borderRadius: 14,
    justifyContent: "center",
    alignItems: "center",
  },

  title: {
    fontSize: 24,
    fontWeight: "700",
    textAlign: "center",
    marginBottom: 10,
  },

  subtitle: {
    textAlign: "center",
    color: "#6B7280",
    marginBottom: 28,
    lineHeight: 22,
  },

  button: {
    width: "100%",
    backgroundColor: "#6D8B74",
    borderRadius: 14,
    padding: 16,
    marginBottom: 14,
  },

  buttonText: {
    color: "#FFF",
    textAlign: "center",
    fontWeight: "600",
    fontSize: 16,
  },

  footer: {
    color: "#6B7280",
  },
});
