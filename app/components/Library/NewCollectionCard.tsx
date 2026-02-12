import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

interface Props {
  onPress?: () => void;
}

const NewCollectionCard: React.FC<Props> = ({ onPress }) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Ionicons name="add" size={28} color="#9CA3AF" />
      <Text style={styles.text}>New Collection</Text>
    </TouchableOpacity>
  );
};

export default NewCollectionCard;

const styles = StyleSheet.create({
  card: {
    width: "47%",
    height: 150,
    borderRadius: 20,
    borderWidth: 1.5,
    borderColor: "#D1D5DB",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 16,
  },
  text: {
    marginTop: 8,
    color: "#9CA3AF",
    fontSize: 14,
  },
});
