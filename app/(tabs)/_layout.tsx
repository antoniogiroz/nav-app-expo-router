import { StyleSheet, Text, View, ViewProps } from 'react-native';
import { Stack, Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function TabsLayout() {
  return <Tabs screenOptions={{
    headerShown: false,
  }}>
    <Tabs.Screen name="(home)" options={{
      title: "Home",
      tabBarLabel: 'Home',
      tabBarIcon: ({ color, size }) => <Ionicons name="home" size={size} color={color}/>
    }}/>
    <Tabs.Screen name="drawer" options={{
      title: "Drawer",
      tabBarLabel: 'Drawer',
      tabBarIcon: ({ color, size }) => <Ionicons name="menu" size={size} color={color}/>
    }}/>
    <Tabs.Screen name="feed-section" options={{
      title: "Feed",
      headerShown: true,
      tabBarLabel: 'Feed',
      tabBarIcon: ({ color, size }) => <Ionicons name="book" size={size} color={color}/>
    }}/>
  </Tabs>;
}

const styles = StyleSheet.create({
  container: {},
});
