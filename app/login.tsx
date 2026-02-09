import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  Alert,
  SafeAreaView,
} from "react-native";
import { Stack, router } from "expo-router";
import { useState } from "react";
import { Ionicons } from "@expo/vector-icons";

export default function LoginScreen() {
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = async () => {
    if (!identifier.trim() || !password.trim()) {
      Alert.alert("Validation Error", "Please fill in all fields");
      return;
    }

    try {
      const response = await fetch(
        "http://192.168.1.15:5000/api/auth/login", // Update with your actual endpoint
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ identifier, password }),
        }
      );

      let data: any = {};
      try {
        data = await response.json();
      } catch (e) {
        console.log("JSON Parse Failed");
      }

      console.log("STATUS:", response.status);
      console.log("DATA:", data);

      if (response.ok) {
        // Clear stack and go to home
        router.replace("/(student)/home");
        return;
      }

      // Unified Alert for errors (Matches your EmailScreen style)
      Alert.alert(
        "Login Failed",
        data?.error || data?.message || "Invalid credentials"
      );
    } catch (error) {
      console.log("NETWORK ERROR:", error);
      Alert.alert("Network Error", "Backend not reachable");
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Stack.Screen options={{ headerShown: false }} />

      <View style={styles.content}>
        {/* Logo - Matching your style */}
        <Image
          source={require("../assets/wolio/logo.png")}
          style={styles.logo}
          resizeMode="contain"
        />

        {/* Heading */}
        <Text style={styles.title}>Welcome Back</Text>
        <Text style={styles.subtitle}>
          Log in to continue your learning journey
        </Text>

        {/* Wolio ID / Email Input */}
        <TextInput
          placeholder="Wolio Id / Email Id"
          value={identifier}
          onChangeText={setIdentifier}
          style={styles.input}
          autoCapitalize="none"
        />

        {/* Password Input with Eye Icon */}
        <View style={styles.passwordContainer}>
          <TextInput
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            style={[styles.input, { marginBottom: 0, flex: 1 }]}
            secureTextEntry={!showPassword}
          />
          <TouchableOpacity
            style={styles.eyeIcon}
            onPress={() => setShowPassword(!showPassword)}
          >
            <Ionicons
              name={showPassword ? "eye-outline" : "eye-off-outline"}
              size={20}
              color="#9CA3AF"
            />
          </TouchableOpacity>
        </View>

        {/* Forgot Password Link */}
        <TouchableOpacity 
          onPress={() => router.push("/forgot-password")}
          style={styles.forgotContainer}
        >
          <Text style={styles.forgotText}>Forgot Password?</Text>
        </TouchableOpacity>

        {/* Login Button */}
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Log In</Text>
        </TouchableOpacity>

        {/* Footer Link to Sign Up */}
        <View style={styles.signUpRow}>
          <Text style={styles.signUpLabel}>Don't have an account? </Text>
          <TouchableOpacity onPress={() => router.push("/email")}>
            <Text style={styles.signUpLink}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E5E7EB", // Matches your EmailScreen bg
  },
  content: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
  },
  logo: {
    width: 90,
    height: 90,
    alignSelf: "center",
    marginBottom: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: "600",
    textAlign: "center",
    marginBottom: 8,
    color: "#000",
  },
  subtitle: {
    textAlign: "center",
    color: "#6B7280",
    marginBottom: 32,
  },
  input: {
    width: "100%",
    height: 50,
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    paddingHorizontal: 16,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: "#E5E7EB",
  },
  passwordContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    marginBottom: 16,
  },
  eyeIcon: {
    position: "absolute",
    right: 16,
  },
  forgotContainer: {
    alignSelf: "flex-end",
    marginBottom: 24,
  },
  forgotText: {
    color: "#2563EB",
    fontSize: 13,
    fontWeight: "600",
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
  signUpRow: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 24,
  },
  signUpLabel: {
    color: "#6B7280",
    fontSize: 13,
  },
  signUpLink: {
    color: "#2563EB",
    fontSize: 13,
    fontWeight: "600",
  },
});