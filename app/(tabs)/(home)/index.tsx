import { Button, Pressable, StyleSheet, Text, View, ViewProps } from 'react-native';
import { Link } from "expo-router";

export default function IndexPage(props: ViewProps) {
  return <View style={styles.container}>
    <Link href="/profile" asChild>
      <Button title="Profile"/>
    </Link>

    <Link href="/feed" asChild>
      <Button title="Feed"/>
    </Link>

    <Link href="/details/45" asChild>
      <Button title="Details 45"/>
    </Link>

    <Link href="/details/53" asChild>
      <Button title="Details 53"/>
    </Link>

    <Link href="/modal" asChild>
      <Button title="Open Modal"/>
    </Link>
  </View>;
}

const styles = StyleSheet.create({
  container: {},
});
