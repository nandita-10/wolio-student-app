import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import { Stack, router } from "expo-router";
import { useLocalSearchParams } from "expo-router";


export default function ResetPasswordSuccess() {
    const { wolioId } = useLocalSearchParams();

  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />

      <View style={styles.container}>

        {/* Check Icon */}
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
        <Text style={styles.title}>Set Password</Text>

        {/* Subtitle */}
        <Text style={styles.subtitle}>
          Your Password has been Set successfully
        </Text>

        {/* Continue Button */}
        <TouchableOpacity
          style={styles.button}
          onPress={() =>
  router.push({
    pathname: "/login",
    params: { wolioId },
  })
}
 
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
    alignItems: "center",
    justifyContent: "center",
    padding: 24,
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
    marginBottom: 6,
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
