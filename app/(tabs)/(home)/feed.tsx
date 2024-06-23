import { Button, StyleSheet, Text, View, ViewProps } from 'react-native';
import { useRouter } from "expo-router";

export default function FeedPage(props: ViewProps) {
  const router = useRouter();

  return <View style={styles.container}>
    <Text>Feed</Text>

    <Button title="Go Back" onPress={() => router.back()} />
  </View>;
}

const styles = StyleSheet.create({
  container: {},
});
