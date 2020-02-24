import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import './config/ReactotronConfig';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
  },
});

export default function App() {
  console.tron.log('test');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Test!</Text>
    </View>
  );
}
