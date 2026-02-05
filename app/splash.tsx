import { View, Text, StyleSheet } from "react-native";
import { useEffect } from "react";
import { router } from "expo-router";
import { Image } from "react-native";

export default function Splash() {
  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace("/screen1"); // go to login
    }, 2000); // 2 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      <View >
  <Image
    source={require("../assets/wolio/logo.png")}
    style={styles.logoImage}
    resizeMode="contain"
  />
</View>

      <Text style={styles.tagline}>
        “Every question is okay.”
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E5E7EB",
    justifyContent: "center",
    alignItems: "center",
  },
  
 


logoImage: {
  width: 140,
  height: 140,
},
  tagline: {
    marginTop: 24,
    fontSize: 16,
    color: "#111",
  },
});