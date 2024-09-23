import React from "react";
import { Slot, Stack } from "expo-router";

import { StatusBar, View } from "react-native";

export default function RootLayout() {
  return (
    <View style={{ flex: 1 }}>
      <Slot />
    </View>
  );
}
