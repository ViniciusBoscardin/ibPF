import React from "react";
import { Slot, Stack } from "expo-router";
import { TabBar } from "@/src/components/TabBar";

import { View } from "react-native";

export default function RootLayout() {
  return (
    <View style={{ flex: 1 }}>
      {/* Conteúdo da rota */}
      <Slot />
      {/* TabBar fixo na aplicação */}
      <TabBar />
    </View>
  );
}
