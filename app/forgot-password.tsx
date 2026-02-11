import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  Alert,
} from "react-native";
import { Stack, router } from "expo-router";
import { useState } from "react";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");

  const handleContinue = async () => {
  if (!email.trim()) {
    Alert.alert("Error", "Please enter your email");
    return;
  }

  try {
    const response = await fetch(
      "http://192.168.1.15:5000/api/auth/reset-password",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      }
    );

    const data = await response.json();

    if (response.ok) {
      // Navigate to check email page
      router.push({
        pathname: "/check-mail",
        params: { email },
      });
    } else {
      Alert.alert("Error", data.message || "Something went wrong");
    }
  } catch (error) {
    console.log(error);
    Alert.alert("Error", "Server not reachable");
  }
};


  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />

      <View style={styles.container}>
        {/* Icon Circle */}
        <View style={styles.iconCircle}>
          <Text style={styles.icon}>✉️</Text>
        </View>

        {/* Title */}
        <Text style={styles.title}>Forget Password</Text>
        <Text style={styles.subtitle}>
          No worries! Enter your email and we'll send you reset instructions.
        </Text>

        {/* Input */}
        <TextInput
          placeholder="your.email@example.com"
          value={email}
          onChangeText={setEmail}
          style={styles.input}
          keyboardType="email-address"
        />

        {/* Button */}
        <TouchableOpacity style={styles.button} onPress={handleContinue}>
          <Text style={styles.buttonText}>Continue</Text>
        </TouchableOpacity>

        {/* Footer */}
        <View style={styles.footerRow}>
          <Text style={styles.footerText}>Remember your password? </Text>
          <TouchableOpacity onPress={() => router.push("/login")}>
            <Text style={styles.login}>Log In</Text>
          </TouchableOpacity>
        </View>
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
  },

  iconCircle: {
    width: 90,
    height: 90,
    borderRadius: 45,
    backgroundColor: "#6D8B74",
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },

  icon: {
    fontSize: 36,
    color: "#FFF",
  },

  title: {
    fontSize: 24,
    fontWeight: "700",
    textAlign: "center",
  },

  subtitle: {
    textAlign: "center",
    color: "#6B7280",
    marginTop: 8,
    marginBottom: 28,
  },

  input: {
    backgroundColor: "#FFF",
    borderRadius: 14,
    padding: 16,
    borderWidth: 1,
    borderColor: "#E5E7EB",
    marginBottom: 20,
  },

  button: {
    backgroundColor: "#6D8B74",
    borderRadius: 14,
    padding: 16,
  },

  buttonText: {
    color: "#FFF",
    textAlign: "center",
    fontWeight: "600",
    fontSize: 16,
  },

  footerRow: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20,
  },

  footerText: {
    color: "#6B7280",
  },

  login: {
    color: "#2563EB",
    fontWeight: "600",
  },
});
