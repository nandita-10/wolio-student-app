import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { Stack, router } from "expo-router";
import { useState, useRef } from "react";
import { useLocalSearchParams } from "expo-router";

export default function OtpScreen() {
  const [code, setCode] = useState(["", "", "", "", "", ""]);
  const inputs = useRef<Array<TextInput | null>>([]);
  const { email } = useLocalSearchParams();

  const handleChange = (text: string, index: number) => {
  const newCode = [...code];
  newCode[index] = text;
  setCode(newCode);

  if (text && index < 5) {
    inputs.current[index + 1]?.focus();
  }
};


  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />

      <View style={styles.container}>

        {/* Progress */}
        <View style={styles.progressRow}>
                  <View style={[styles.progressBar, styles.activeBar]} />
                  <View style={styles.progressBar} />
                  <View style={styles.progressBar} />
                  
        
                  <Text style={styles.stepText}>Step 1 of 3</Text>
                </View>


        {/* Logo */}
        <Image
          source={require("../assets/wolio/logo.png")}
          style={styles.logo}
          resizeMode="contain"
        />

        {/* Heading */}
        <Text style={styles.title}>Verify Your Email</Text>
        <Text style={styles.subtitle}>
          Enter the 6-digit code we sent to
        </Text>
        <Text style={styles.email}>{email}</Text>

        {/* OTP Boxes */}
        <View style={styles.otpRow}>
          {code.map((digit, index) => (
  <TextInput
    key={index}
    ref={(ref) => {
      if (ref) inputs.current[index] = ref;
    }}
    value={digit}
    onChangeText={(text) => handleChange(text, index)}
    style={styles.otpBox}
    keyboardType="number-pad"
    maxLength={1}
  />
))}

        </View>

        {/* Verify Button */}
        <TouchableOpacity
          style={styles.button}
          onPress={() => router.push("/email-success")}
        >
          <Text style={styles.buttonText}>Verify</Text>
        </TouchableOpacity>

        {/* Resend */}
        <Text style={styles.smallText}>Didn't receive the code?</Text>
        <TouchableOpacity>
          <Text style={styles.resend}>Resend Code</Text>
        </TouchableOpacity>

      <TouchableOpacity onPress={() => router.back()}>
  <Text style={styles.changeEmail}>Change email address</Text>
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
    marginBottom: 40,
  },

  progressBar: {
    width: 40,
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
    color: "#6B7280",
    fontSize: 12,
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
  },

  subtitle: {
    textAlign: "center",
    color: "#6B7280",
    marginTop: 6,
  },

  email: {
    textAlign: "center",
    fontWeight: "500",
    marginBottom: 24,
  },

  otpRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 24,
  },

  otpBox: {
  width: 48,
  height: 56,
  backgroundColor: "#FFFFFF",
  borderRadius: 12,
  textAlign: "center",
  fontSize: 20,
  borderWidth: 1,
  borderColor: "#D1D5DB",
  elevation: 2,
},



  button: {
    height: 50,
    backgroundColor: "#3B82F6",
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 16,
  },

  buttonText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "600",
  },

  smallText: {
    textAlign: "center",
    color: "#6B7280",
    fontSize: 12,
  },

  resend: {
    textAlign: "center",
    fontWeight: "600",
    marginTop: 4,
  },

  changeEmail: {
    textAlign: "center",
    marginTop: 20,
    color: "#6B7280",
  },
});
