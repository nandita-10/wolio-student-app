import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { Stack, router } from "expo-router";
import { useState } from "react";

export default function EmailScreen() {
  const [email, setEmail] = useState("");

  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />

      <View style={styles.container}>
        
        {/* Logo */}
        <View >
          <Image
            source={require("../assets/wolio/logo.png")}
            style={styles.logo}
            resizeMode="contain"
          />
        </View>

        {/* Heading */}
        <Text style={styles.title}>Your Wolio ID</Text>
        <Text style={styles.subtitle}>
          Enter your email to get started with your learning journey
        </Text>

        {/* Input */}
        <TextInput
          placeholder="Your Email ID"
          value={email}
          onChangeText={setEmail}
          style={styles.input}
          keyboardType="email-address"
        />

        {/* Button */}
        <TouchableOpacity
          style={styles.button}
          onPress={() => router.push("/login")} // later OTP
        >
          <Text style={styles.buttonText}>Continue</Text>
        </TouchableOpacity>

        {/* Footer */}
        <Text style={styles.footer}>
          We'll send you a verification code to confirm your email
        </Text>

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

  

  logo: {
    width: 70,
    height: 70,
  },

  title: {
    fontSize: 22,
    fontWeight: "600",
    marginBottom: 8,
  },

  subtitle: {
    textAlign: "center",
    color: "#6B7280",
    marginBottom: 24,
  },

  input: {
    width: "100%",
    height: 50,
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    paddingHorizontal: 16,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: "#E5E7EB",
  },

  button: {
    width: "100%",
    height: 50,
    backgroundColor: "#3B82F6",
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
  },

  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "600",
  },

  footer: {
    marginTop: 16,
    fontSize: 12,
    color: "#9CA3AF",
    textAlign: "center",
  },
});