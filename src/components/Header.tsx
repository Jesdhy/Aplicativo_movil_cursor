import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export const Header = () => {
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      <View style={styles.statusBar}>
        <Text style={styles.time}>9:45</Text>
      </View>
      <View style={styles.header}>
        <Ionicons name="volume-medium" size={24} color="#00287A" />
        <Text style={styles.title}>Bolsa Laboral</Text>
        <Ionicons name="notifications-outline" size={24} color="#00287A" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
  statusBar: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingVertical: 2,
  },
  time: {
    fontSize: 12,
    color: '#000',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  title: {
    fontSize: 20,
    color: '#00287A',
    fontWeight: '500',
  },
}); 