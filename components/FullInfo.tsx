import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { gStyle } from "../styles/style";

export default function FullInfo(props: any) {
  return (
    <View style={gStyle.main}>
      {/* @ts-ignore  */}
      <Image source={{
          width: "100%",
          height: 200,
          uri: props.route.params.img,
        }}
      />
      <Text style={[gStyle.title, styles.header]}>{props.route.params.name}</Text>
      <Text style={styles.full}>{props.route.params.full}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  full: {
    fontFamily: "mt-light",
    fontSize: 16,
    textAlign: "center",
    marginTop: 20,
    color: "#f55151",
  },
  header: {
    fontSize: 25,
    marginTop: 25
  }
});
