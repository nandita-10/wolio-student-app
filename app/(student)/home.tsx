import { View, Text, Pressable } from "react-native";
import { router } from "expo-router";

export default function StudentHome() {
  return (
    <View>
      <Text>Student Home</Text>
      <Pressable onPress={() => router.replace("/")}>
        <Text>Logout</Text>
      </Pressable>
    </View>
  );
}