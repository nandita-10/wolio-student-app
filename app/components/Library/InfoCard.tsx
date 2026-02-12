import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

interface Props {
  title: string;
  subtitle: string;
}

const InfoCard: React.FC<Props> = ({ title, subtitle }) => {
  return (
    <TouchableOpacity style={styles.card}>
      <View>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
      </View>

      <Ionicons name="chevron-forward" size={20} color="#777" />
    </TouchableOpacity>
  );
};

export default InfoCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#EFEFEF",
    marginHorizontal: 16,
    padding: 16,
    borderRadius: 14,
    marginTop: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10
  },
  title: { fontWeight: "600" },
  subtitle: { color: "#777", fontSize: 12 },
});
