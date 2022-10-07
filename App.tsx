import React from "react";

import { NativeBaseProvider } from "native-base";

import { Page } from "./src/components/Page";
import Dashboard from "./src/screens/Dashboard";
import { StatusBar } from "expo-status-bar";

export default function App() {
  return (
    <NativeBaseProvider>
      <StatusBar style="auto" />
      <Dashboard />
    </NativeBaseProvider>
  );
}
