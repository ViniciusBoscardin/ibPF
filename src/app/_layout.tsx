import { Slot, Stack } from "expo-router";
import React from "react";

import { StatusBar, View } from "react-native";

export default function RootLayout() {
  return (
    <View style={{ flex: 1 }}>
      <Slot />
      <StatusBar barStyle="light-content" backgroundColor="#229c93" />
    </View>
  );
}
