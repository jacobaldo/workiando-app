import React from "react";
import { Pressable } from "react-native";
import { Props } from "./type";
import { Typography } from "../../Typography";
import { styles } from "./style";

const CardOffers = ({ onPress, item, style }: Props) => {
  return (
    <Pressable onPress={() => onPress(item)} style={[styles.cardStyle, style]}>
      <Typography variant={{ type: "h4" }} style={styles.detailStyle}>{item.title}</Typography>
    </Pressable>
  );
};
export default CardOffers;
