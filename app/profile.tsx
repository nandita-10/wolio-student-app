import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";
import { router, useLocalSearchParams } from "expo-router";
import { useState } from "react";

export default function Profile() {
  const { wolioId } = useLocalSearchParams();

  const [name, setName] = useState("");
  const [grade, setGrade] = useState("");
  const [board, setBoard] = useState("");

  const handleCreateProfile = async () => {
    if (!name || !grade || !board) {
      Alert.alert("Error", "Please fill all fields");
      return;
    }

    try {
      const response = await fetch(
        "http://localhost:5000/api/studentsProfile/", // CHANGE IP
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            wolioId,
            name,
            grade,
            board,
          }),
        }
      );

      const data = await response.json();

      if (response.ok) {
        router.push("/success");
      } else {
        Alert.alert("Error", data.message || "Profile creation failed");
      }
    } catch (error) {
      console.log(error);
      Alert.alert("Error", "Server not reachable");
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.avatar} />

      <Text style={styles.title}>Your Wolio ID</Text>
      <Text style={styles.subtitle}>
        We’ve created your WOLIO ID — your learning identity.
      </Text>

      <Text style={styles.label}>Name</Text>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={setName}
      />

      <Text style={styles.label}>Class / Grade</Text>
      <TextInput
        style={styles.input}
        value={grade}
        onChangeText={setGrade}
      />

      <Text style={styles.label}>Board</Text>
      <TextInput
        style={styles.input}
        value={board}
        onChangeText={setBoard}
      />

      <TouchableOpacity
        style={styles.button}
        onPress={handleCreateProfile}
      >
        <Text style={styles.buttonText}>Start Learning</Text>
      </TouchableOpacity>

      <Text style={styles.privacy}>
        We respect your privacy. No spam, ever
      </Text>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F2F3F5",
    paddingHorizontal: 24,
    justifyContent: "center",
  },
  avatar: {
    width: 90,
    height: 90,
    borderRadius: 45,
    backgroundColor: "#C9CCD1",
    alignSelf: "center",
    marginBottom: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: "700",
    textAlign: "center",
  },
  subtitle: {
    fontSize: 14,
    color: "#6B7280",
    textAlign: "center",
    marginBottom: 30,
    marginTop: 8,
  },
  label: {
    fontSize: 14,
    color: "#6B7280",
    marginBottom: 6,
    marginTop: 14,
  },
  input: {
    backgroundColor: "#E5E7EB",
    borderRadius: 12,
    padding: 14,
  },
  button: {
    backgroundColor: "#7C7C7C",
    borderRadius: 14,
    padding: 16,
    marginTop: 28,
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "600",
  },
  privacy: {
    fontSize: 12,
    color: "#9CA3AF",
    textAlign: "center",
    marginTop: 14,
  },
});