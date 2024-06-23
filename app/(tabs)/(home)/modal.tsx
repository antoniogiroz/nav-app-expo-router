import { StyleSheet, Text, View, ViewProps } from 'react-native';

export default function Modal(props: ViewProps) {
  return <View style={styles.container}>
    <Text>Modal</Text>
  </View>;
}

const styles = StyleSheet.create({
  container: {},
});
