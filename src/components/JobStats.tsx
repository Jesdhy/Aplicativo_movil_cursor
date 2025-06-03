import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export const JobStats = () => {
  return (
    <View style={styles.container}>
      <View style={styles.remoteCard}>
        <Ionicons name="desktop-outline" size={32} color="#fff" />
        <Text style={styles.remoteNumber}>102</Text>
        <Text style={styles.remoteText}>Trabajo remoto</Text>
      </View>
      <View style={styles.statsColumn}>
        <View style={styles.statCard}>
          <View style={styles.statContent}>
            <Ionicons name="time-outline" size={20} color="#11228E" />
            <Text style={styles.statNumber}>1.2k</Text>
          </View>
          <Text style={styles.statText}>Tiempo completo</Text>
        </View>
        <View style={styles.statCard}>
          <View style={styles.statContent}>
            <Ionicons name="hourglass-outline" size={20} color="#11228E" />
            <Text style={styles.statNumber}>500</Text>
          </View>
          <Text style={styles.statText}>Medio tiempo</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 16,
    gap: 12,
  },
  remoteCard: {
    flex: 1,
    backgroundColor: '#11228E',
    borderRadius: 16,
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  remoteNumber: {
    color: '#fff',
    fontSize: 36,
    fontWeight: 'bold',
    marginVertical: 8,
  },
  remoteText: {
    color: '#fff',
    fontSize: 16,
  },
  statsColumn: {
    flex: 1,
    gap: 12,
  },
  statCard: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 12,
    borderWidth: 1,
    borderColor: '#D4AF37',
  },
  statContent: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 4,
  },
  statNumber: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
  },
  statText: {
    color: '#666',
    fontSize: 14,
  },
}); 