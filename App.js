import 'react-native-gesture-handler';
import React from 'react';
import {StyleSheet, useColorScheme} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import AppNavigation from './navigation/AppNavigation';

export const App = () => {
  return (
    <SafeAreaProvider style={styles.sectionContainer}>
      <AppNavigation />
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    flex: 1,
  },
});

export default App;
