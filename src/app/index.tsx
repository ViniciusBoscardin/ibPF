import React from "react";
import { StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Routes from "../routes";

export default function Index() {
  return (
    <NavigationContainer independent={true}>
      <StatusBar barStyle="light-content" backgroundColor="#229c93" />
      <Routes />
    </NavigationContainer>
  );
}
