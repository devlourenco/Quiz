import { Stack } from "expo-router";
import "../styles/global.css";


export default function Layout() {
  return (
      <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: "#303D50"
        }
      }}
      
      >
        <Stack.Screen name="index" options={{title: ""}}/>
        <Stack.Screen name="quiz/index"/>
        <Stack.Screen name="add/index"/>
        <Stack.Screen name="edit/index"/>
      </Stack>
  );
}
