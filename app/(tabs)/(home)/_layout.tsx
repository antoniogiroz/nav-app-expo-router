import { StyleSheet, Text, View, ViewProps } from 'react-native';
import { Stack } from "expo-router";

export default function MainLayout() {
  return <Stack
    screenOptions={{
      headerStyle: {
        backgroundColor: '#f4511e',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}>
    <Stack.Screen name="index" options={{ title: "Your Home" }}/>
    <Stack.Screen name="profile" options={{ title: "Profile" }}/>

    <Stack.Screen name="modal" options={{ title: "My Modal", presentation: "modal" }}/>
  </Stack>;
}

const styles = StyleSheet.create({
  container: {},
});
