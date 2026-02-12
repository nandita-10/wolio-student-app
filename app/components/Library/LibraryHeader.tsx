import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const LibraryHeader: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Library</Text>

      <TouchableOpacity>
        <Ionicons name="search-outline" size={22} color="#333" />
      </TouchableOpacity>
    </View>
  );
};

export default LibraryHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  title: {
    fontSize: 22,
    fontWeight: "700",
  },
});
