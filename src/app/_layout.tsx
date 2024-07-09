import "../styles/global.css";
import { Stack } from "expo-router";
import Constants from "expo-constants";

import { SQLiteProvider } from "expo-sqlite";
import { initializeDatabase } from "@/database/initializeDatabase";

export default function Layout() {
  return (
    <SQLiteProvider databaseName="quiz.db" onInit={initializeDatabase}>
      <Stack
        screenOptions={{
          headerStyle: {
            backgroundColor: "#303D50",
          },
          headerTintColor: "rgb(229 231 235)",
        }}
      >
        <Stack.Screen name="index" options={{ title: "Gincana PIB" }} />
        <Stack.Screen name="quiz/index" options={{ title: "Gincana PIB" }} />
        <Stack.Screen name="add/index" options={{ title: "Gincana PIB" }} />
        <Stack.Screen name="edit/index" options={{ title: "Gincana PIB" }} />
      </Stack>
    </SQLiteProvider>
  );
}
