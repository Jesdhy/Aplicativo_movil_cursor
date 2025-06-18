import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

type IconName = 'calendar' | 'document-text' | 'checkbox' | 'school';

const actions: { icon: IconName; label: string }[] = [
  { icon: 'calendar', label: 'Horario' },
  { icon: 'document-text', label: 'Carnet' },
  { icon: 'checkbox', label: 'Tareas' },
  { icon: 'school', label: 'Aula Virtual' },
];

export const QuickActions = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Para ti</Text>
      <View style={styles.grid}>
        {actions.map((action, index) => (
          <TouchableOpacity key={index} style={styles.actionButton}>
            <View style={styles.iconContainer}>
              <Ionicons name={action.icon} size={24} color="#fff" />
            </View>
            <Text style={styles.actionLabel}>{action.label}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 24,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#000',
  },
  grid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  actionButton: {
    width: '23%',
    backgroundColor: '#00287A',
    borderRadius: 12,
    padding: 12,
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
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  actionLabel: {
    fontSize: 14,
    fontWeight: '600',
    color: '#fff',
  },
}); 