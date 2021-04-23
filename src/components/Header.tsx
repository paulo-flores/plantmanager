import React, { useEffect, useState } from "react";
import { StyleSheet, View, Platform, Text, Image } from "react-native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";

import colors from "../styles/colors";

import profileImg from "../assets/profile.jpg";
import fonts from "../styles/fonts";
import AsyncStorage from "@react-native-async-storage/async-storage";

export function Header() {
  const [username, setUserName] = useState<string>();

  useEffect(() => {
    async function loadStorageUserName() {
      const user = await AsyncStorage.getItem("@plantmanager:user");
      setUserName(user || "");
    }

    loadStorageUserName();
  }, [username]);

  return (
    <View
      style={[
        styles.container,
        Platform.OS == "ios"
          ? { marginTop: getStatusBarHeight() }
          : { marginTop: 0 },
      ]}
    >
      <View>
        <Text style={styles.greeting}>Olá, </Text>
        <Text style={styles.username}>{username} </Text>
      </View>
      <Image style={styles.image} source={profileImg} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 40,
  },
  greeting: {
    fontSize: 32,
    color: colors.heading,
    fontFamily: fonts.text,
  },
  username: {
    fontSize: 32,
    fontFamily: fonts.heading,
    color: colors.heading,
    lineHeight: 40,
  },
});
