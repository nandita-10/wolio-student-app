import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { Stack, router } from "expo-router";
import { useState } from "react";
import { Image } from "react-native";


export default function SetPassword() {
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const hasLength = password.length >= 8;
  const hasUpper = /[A-Z]/.test(password);
  const hasNumber = /[0-9]/.test(password);

  const isValid = hasLength && hasUpper && hasNumber && password === confirm;

  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />

      <View style={styles.container}>

        {/* Progress */}
        <View style={styles.progressRow}>
          <View style={[styles.progressBar, styles.activeBar]} />
          <View style={[styles.progressBar, styles.activeBar]} />
          <View style={styles.progressBar} />
          <Text style={styles.stepText}>Step 2 of 3</Text>
        </View>

        {/* Logo */}
        <Image
  source={require("../assets/wolio/logo.png")}
  style={styles.logo}
  resizeMode="contain"
/>


        {/* Title */}
        <Text style={styles.title}>Set Your Password</Text>
        <Text style={styles.subtitle}>
          Create a secure password to protect your account
        </Text>

        {/* Password */}
        <View style={styles.inputBox}>
          <TextInput
            placeholder="Password"
            secureTextEntry={!showPass}
            value={password}
            onChangeText={setPassword}
            style={styles.input}
          />
          <Text style={styles.eye} onPress={() => setShowPass(!showPass)}>
            👁
          </Text>
        </View>

        {/* Confirm */}
        <View style={styles.inputBox}>
          <TextInput
            placeholder="Confirm Password"
            secureTextEntry={!showConfirm}
            value={confirm}
            onChangeText={setConfirm}
            style={styles.input}
          />
          <Text style={styles.eye} onPress={() => setShowConfirm(!showConfirm)}>
            👁
          </Text>
        </View>

        {/* Rules */}
        <View style={styles.rules}>
          <Text style={[styles.rule, hasLength && styles.ruleActive]}>
            ● At least 8 characters
          </Text>
          <Text style={[styles.rule, hasUpper && styles.ruleActive]}>
            ● Contains uppercase letter
          </Text>
          <Text style={[styles.rule, hasNumber && styles.ruleActive]}>
            ● Contains number
          </Text>
        </View>

        {/* Button */}
        <TouchableOpacity
                  style={styles.button}
                  onPress={() => router.push("/password-success")} 
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
  },

  progressRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 30,
  },

  progressBar: {
    width: 60,
    height: 6,
    borderRadius: 4,
    backgroundColor: "#D1D5DB",
    marginRight: 8,
  },

  activeBar: {
    backgroundColor: "#4F46E5",
  },

  stepText: {
    marginLeft: "auto",
    fontSize: 12,
    color: "#6B7280",
  },

 logo: {
  width: 90,
  height: 90,
  alignSelf: "center",
  marginBottom: 16,
},


  title: {
    fontSize: 22,
    fontWeight: "600",
    textAlign: "center",
  },

  subtitle: {
    textAlign: "center",
    color: "#6B7280",
    marginBottom: 24,
  },

  inputBox: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: "#E5E7EB",
  },

  input: {
    flex: 1,
    height: 50,
    paddingHorizontal: 16,
  },

  eye: {
    paddingHorizontal: 12,
    fontSize: 18,
  },

  rules: {
    marginVertical: 16,
  },

  rule: {
    color: "#9CA3AF",
    marginBottom: 6,
  },

  ruleActive: {
    color: "#16A34A",
  },

  button: {
    height: 50,
    borderRadius: 12,
    backgroundColor: "#9CA3AF",
    justifyContent: "center",
    alignItems: "center",
  },

  buttonActive: {
    backgroundColor: "#2563EB",
  },

  buttonText: {
    color: "#FFF",
    fontWeight: "600",
    fontSize: 16,
  },
});

