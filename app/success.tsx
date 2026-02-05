import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import { Stack, router } from "expo-router";

export default function SuccessScreen() {
  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />

      <View style={styles.container}>
        
        {/* Check Icon */}
        <View style={styles.checkCircle}>
          <Text style={styles.check}>✓</Text>
        </View>

        {/* Logo */}
        <View >
          <Image
            source={require("../assets/wolio/logo.png")}
            style={styles.logo}
            resizeMode="contain"
          />
        </View>

        {/* Title */}
        <Text style={styles.title}>All Set!</Text>

        {/* Subtitle */}
        <Text style={styles.subtitle}>
          Your WOLIO ID has been created. You're
          ready to start your learning journey.
        </Text>

        {/* Button */}
        <TouchableOpacity
          style={styles.button}
          onPress={() => router.replace("/(student)/home")}
        >
          <Text style={styles.buttonText}>Go to Home</Text>
        </TouchableOpacity>

      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E5E7EB",
    alignItems: "center",
    justifyContent: "center",
    padding: 24,
  },

  checkCircle: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: "#1D4ED8",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },

  check: {
    color: "#FFFFFF",
    fontSize: 32,
    fontWeight: "bold",
  },

  

  logo: {
    width: 70,
    height: 70,
  },

  title: {
    fontSize: 26,
    fontWeight: "700",
    marginBottom: 8,
  },

  subtitle: {
    textAlign: "center",
    color: "#6B7280",
    marginBottom: 30,
    lineHeight: 22,
  },

  button: {
    width: "100%",
    height: 52,
    backgroundColor: "#2563EB",
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