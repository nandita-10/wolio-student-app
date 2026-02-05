import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import { router, Stack } from "expo-router";

export default function Screen2() {
  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />

      <View style={styles.container}>
        
        {/* Back */}
        <TouchableOpacity onPress={() => router.back()}>
          <Text style={styles.back}>‹ Back</Text>
        </TouchableOpacity>

        {/* Image */}
        <Image
          source={require("../../assets/wolio/abacus.png")}
          style={styles.image}
          resizeMode="contain"
        />

        {/* Title Row */}
        <View style={styles.titleRow}>
          <Text style={styles.title}>Understand, Not Memorize</Text>

          <TouchableOpacity onPress={() => router.replace("/email")}>
            <Text style={styles.skip}>Skip</Text>
          </TouchableOpacity>
        </View>

        {/* Description */}
        <Text style={styles.desc}>
          Learning is about clarity, not cramming.
          We focus on helping you truly understand
          each topic.
        </Text>

        {/* Dots */}
        <View style={styles.dotsRow}>
          <View style={styles.dot} />
          <View style={[styles.dot, styles.activeDot]} />
          <View style={styles.dot} />
        </View>

        {/* Bottom Navigation */}
        <View style={styles.bottomRow}>
          <TouchableOpacity
            style={styles.circleBtn}
            onPress={() => router.back()}
          >
            <Text>{"<"}</Text>
          </TouchableOpacity>

          <Text style={styles.continue}>Continue</Text>

          <TouchableOpacity
            style={styles.circleBtn}
            onPress={() => router.push("/screen3")}
          >
            <Text>{">"}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E5E7EB",
    padding: 20,
    justifyContent: "center",
  },

  image: {
    width: "100%",
    height: 260,
    borderRadius: 20,
    marginBottom: 20,
  },

  titleRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  title: {
    fontSize: 22,
    fontWeight: "600",
  },

  skip: {
    color: "#6B7280",
  },

  desc: {
    marginTop: 10,
    color: "#6B7280",
    lineHeight: 22,
  },

  dotsRow: {
    flexDirection: "row",
    marginTop: 20,
  },

  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#D1D5DB",
    marginRight: 6,
  },

  activeDot: {
    backgroundColor: "#111827",
    width: 18,
  },

  bottomRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 40,
  },

  circleBtn: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    alignItems: "center",
    elevation: 4,
  },

  continue: {
    color: "#9CA3AF",
  },
  back: {
  fontSize: 16,
  color: "#6B7280",
  marginBottom: 12,
},
});