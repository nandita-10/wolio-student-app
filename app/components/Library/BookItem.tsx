import React from "react";
import { Image, StyleSheet, TouchableOpacity } from "react-native";

interface Props {
  image: any;
  onPress?: () => void;
}

const BookItem: React.FC<Props> = ({ image, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Image source={image} style={styles.image} />
    </TouchableOpacity>
  );
};

export default BookItem;

const styles = StyleSheet.create({
  image: {
    width: 150,
    height: 200,
    borderRadius: 16,
    margin: 8,
  },
});
