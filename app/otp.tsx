import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { Stack, router } from "expo-router";
import { useState, useRef, useEffect } from "react";
import { useLocalSearchParams } from "expo-router";
import { Alert } from "react-native";


export default function OtpScreen() {
  const [code, setCode] = useState(["", "", "", "", "", ""]);
  const inputs = useRef<Array<TextInput | null>>([]);
  const { email } = useLocalSearchParams();
  const [timer, setTimer] = useState(0);
const [resentSuccess, setResentSuccess] = useState(false);

useEffect(() => {
  let interval: ReturnType<typeof setInterval>;

  if (timer > 0) {
    interval = setInterval(() => {
      setTimer((prev) => prev - 1);
    }, 1000);
  }

  return () => {
    if (interval) clearInterval(interval);
  };
}, [timer]);



  const handleChange = (text: string, index: number) => {
  const newCode = [...code];
  newCode[index] = text;
  setCode(newCode);

  if (text && index < 5) {
    inputs.current[index + 1]?.focus();
  }
};

const handleVerifyOtp = async () => {
  const otp = code.join("");

  if (otp.length !== 6) {
    Alert.alert("Error", "Please enter 6 digit OTP");
    return;
  }

  try {
    const response = await fetch("http://localhost:5000/api/auth/verify-otp", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        otp,
      }),
    });

    const data = await response.json();

    if (response.ok) {
  

  router.push({
    pathname: "/set-password",
    params: { wolioId: data.wolioId },
  });
}
 else {
      Alert.alert("Invalid OTP", data.message || "Try again");
    }
  } catch (error) {
    console.log(error);
    Alert.alert("Error", "Server not reachable");
  }
};

const handleResendOtp = async () => {
  if (timer > 0) return; // prevent spam

  try {
    const response = await fetch(
      "http://192.168.1.15:5000/api/auth/resend-otp",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      }
    );

    const data = await response.json();

    if (response.ok) {
      setCode(["", "", "", "", "", ""]);
      inputs.current[0]?.focus();

      setResentSuccess(true); // show tick
      setTimer(30); // start cooldown

      setTimeout(() => setResentSuccess(false), 2000); // hide tick
    } else {
      Alert.alert("Error", data.message || "Failed to resend OTP");
    }
  } catch (error) {
    Alert.alert("Network Error", "Server not reachable");
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
          onPress={handleVerifyOtp}

        >
          <Text style={styles.buttonText}>Verify</Text>
        </TouchableOpacity>

        {/* Resend */}
        <Text style={styles.smallText}>Didn't receive the code?</Text>
       <View style={{ alignItems: "center", marginTop: 8 }}>
  <TouchableOpacity
    onPress={handleResendOtp}
    disabled={timer > 0}
  >
    <Text style={[styles.resend, timer > 0 && { color: "#9CA3AF" }]}>
      {timer > 0 ? `Resend Code (${timer}s)` : "Resend Code"}
    </Text>
  </TouchableOpacity>

  {resentSuccess && (
    <Text style={{ color: "green", marginTop: 4 }}>✔ OTP Sent</Text>
  )}
</View>



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
    backgroundColor: "#6D8B74",
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
    backgroundColor: "#6D8B74",
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
