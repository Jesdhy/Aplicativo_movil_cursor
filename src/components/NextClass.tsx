import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export const NextClass = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Próxima clase</Text>
      <View style={styles.card}>
        <View style={styles.iconContainer}>
          <Ionicons name="calendar" size={24} color="#D4AF37" />
        </View>
        <View style={styles.content}>
          <Text style={styles.className}>Marcos de Desarrollo</Text>
          <Text style={styles.schedule}>08/05/2025 – 08:00 a 10:00</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 24,
    marginTop: 48,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#000',
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  iconContainer: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#FFF8E1',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  content: {
    flex: 1,
  },
  className: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
    marginBottom: 4,
  },
  schedule: {
    fontSize: 14,
    color: '#666',
  },
}); 