import React from "react";
import { Text, StyleSheet } from "react-native";

interface Props {
  title: string;
}

const SectionTitle: React.FC<Props> = ({ title }) => {
  return <Text style={styles.title}>{title}</Text>;
};

export default SectionTitle;

const styles = StyleSheet.create({
  title: {
    marginHorizontal: 16,
    marginTop: 18,
    marginBottom: 8,
    fontWeight: "600",
    fontSize: 14,
    color: "#555",
  },
});
