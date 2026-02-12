import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

interface Props {
  title: string;
  count: number;
  color: string;
  onPress?: () => void;
}

const CollectionCard: React.FC<Props> = ({
  title,
  count,
  color,
  onPress,
}) => {
  return (
    <TouchableOpacity
      style={[styles.card, { backgroundColor: color }]}
      onPress={onPress}
    >
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{count} books</Text>
    </TouchableOpacity>
  );
};

export default CollectionCard;

const styles = StyleSheet.create({
  card: {
    width: "47%",
    height: 150,
    borderRadius: 20,
    padding: 18,
    justifyContent: "center",
    marginBottom: 16,
  },
  title: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 6,
  },
  subtitle: {
    color: "#EAEAEA",
    fontSize: 13,
  },
});
