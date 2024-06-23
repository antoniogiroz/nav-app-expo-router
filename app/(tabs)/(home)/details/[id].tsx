import { Button, StyleSheet, Text, View } from 'react-native';
import { Stack, useLocalSearchParams, useRouter } from "expo-router";

export default function DetailsPage() {
  const { id } = useLocalSearchParams();
  const router = useRouter();

  return <View style={styles.container}>
    <Stack.Screen options={{ title: `Details ${id}` }} />
    <Text>Detail {id}</Text>

    <Button title="Update params" onPress={() => router.setParams({ id: '999' })} />
  </View>;
}

const styles = StyleSheet.create({
  container: {},
});
