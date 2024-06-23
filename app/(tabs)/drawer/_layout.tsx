import { StyleSheet } from 'react-native';
import { Drawer } from "expo-router/drawer";

export default function DrawerLayout() {
  return <Drawer
    screenOptions={{
      headerStyle: {
        backgroundColor: '#1e29f4',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}
  >
    <Drawer.Screen name="news" options={{ title: "My News", drawerLabel: "News" }}/>
    <Drawer.Screen name="profile" options={{ title: "Profile" }} />
  </Drawer>;
}

const styles = StyleSheet.create({
  container: {},
});
