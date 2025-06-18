import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ScrollView, StyleSheet, View } from 'react-native';
import { MainHeader } from './src/components/MainHeader';
import { NewsHero } from './src/components/NewsHero';
import { NextClass } from './src/components/NextClass';
import { InfoBoard } from './src/components/InfoBoard';
import { BottomNav } from './src/components/BottomNav';

export default function App() {
  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
          <NewsHero />
          <NextClass />
          <InfoBoard />
        </ScrollView>
        <BottomNav />
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  content: {
    flex: 1,
  },
});
