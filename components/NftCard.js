import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, View } from "react-native";
import { assets, COLORS, SHADOWS, SIZES } from "../constants";
import { CircleButton, RectButton } from "./Button";
import { EthPrice, NftTitle, SubInfo } from "./SubInfo";


const NftCard = ({ data }) => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        backgroundColor: COLORS.white,
        borderRadius: SIZES.font,
        marginBottom: SIZES.extraLarge,
        margin: SIZES.base,
        ...SHADOWS.dark,
      }}
    >
      <View style={{ width: "100%", height: 250 }}>
        <Image
          source={data.image}
          style={{
            width: "100%",
            height: "100%",
            borderTopLeftRadius: SIZES.font,
            borderTopRightRadius: SIZES.font,
          }}
          resizeMode="cover"
        />
        <CircleButton imgUrl={assets.heart} right={10} top={10} />
      </View>
      <SubInfo />
      <View style={{ width: "100%", padding: SIZES.font }}>
        <NftTitle
          title={data.name}
          subTitle={data.creator}
          titleSize={SIZES.large}
          subTitleSize={SIZES.small}
        />
        <View
          style={{
            marginTop: SIZES.font,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <EthPrice price={data.price} />
          <RectButton title='Place a bid' minWidth={120} fontSize={SIZES.font} handlePress={() => navigation.navigate("Details", { data })} />
        </View>
      </View>
    </View>
  );
};

export default NftCard;
