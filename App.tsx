import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Header } from './src/components/Header';
import { SearchBar } from './src/components/SearchBar';
import { JobStats } from './src/components/JobStats';
import { RecentJobs } from './src/components/RecentJobs';
import { BottomNav } from './src/components/BottomNav';

export default function App() {
  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <Header />
        <ScrollView style={styles.content}>
          <SearchBar />
          <JobStats />
          <RecentJobs />
        </ScrollView>
        <BottomNav />
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    flex: 1,
  },
});
