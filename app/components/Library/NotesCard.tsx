import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

interface NotesCardProps {
  title: string;
  description: string;
  book: string;
  time: string;
  onPress?: () => void;
}

const NotesCard: React.FC<NotesCardProps> = ({
  title,
  description,
  book,
  time,
  onPress,
}) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description} numberOfLines={2}>
        {description}
      </Text>

      <View style={styles.bottomRow}>
        <Text style={styles.book}>{book}</Text>
        <Text style={styles.time}>{time}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default NotesCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#F3F3F3",
    borderRadius: 18,
    padding: 16,
    marginHorizontal: 16,
    marginTop: 14,
  },
  title: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 6,
  },
  description: {
    color: "#555",
    fontSize: 13,
    marginBottom: 10,
  },
  bottomRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  book: {
    color: "#8A8A8A",
    fontSize: 12,
  },
  time: {
    color: "#8A8A8A",
    fontSize: 12,
  },
});
