import React from "react";
import { Image, Text, TouchableOpacity } from "react-native";
import { COLORS, FONTS, SHADOWS, SIZES } from "../constants";
export const CircleButton = ({ imgUrl, handlePress, ...props }) => {
  return (
    <TouchableOpacity
      style={{
        width: 40,
        height: 40,
        backgroundColor: COLORS.white,
        position: "absolute",
        borderRadius: SIZES.extraLarge,
        alignItems: "center",
        justifyContent: "center",
        ...SHADOWS.light,
        ...props,
      }}
      onPress={handlePress}
    >
      <Image
        source={imgUrl}
        resizeMode="contain"
        style={{
          height: 24,
          width: 24,
        }}
      />
    </TouchableOpacity>
  );
};

export const RectButton = ({ minWidth, fontSize, handlePress,title, ...props }) => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: COLORS.primary,
        minWidth:minWidth,
        padding:SIZES.small,
        borderRadius: SIZES.extraLarge,
        ...props,
      }}
      onPress={handlePress}
    >
      <Text style={{
        fontFamily:FONTS.semiBold,
        fontSize:fontSize,
        color:COLORS.white,
        textAlign:'center',
      }}>{title}</Text>
    </TouchableOpacity>
  );
};
