import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export const BottomNav = () => {
  return (
    <>
      <View style={styles.container}>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="briefcase-outline" size={24} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="stats-chart" size={24} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.activeNavItem}>
          <Ionicons name="home" size={28} color="#11228E" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="person-outline" size={24} color="#fff" />
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.floatingButton}>
        <Ionicons name="add" size={24} color="#11228E" />
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#11228E',
    paddingVertical: 12,
    paddingHorizontal: 24,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  navItem: {
    padding: 8,
  },
  activeNavItem: {
    backgroundColor: '#fff',
    borderRadius: 24,
    padding: 8,
  },
  floatingButton: {
    position: 'absolute',
    right: 24,
    bottom: 80,
    backgroundColor: '#fff',
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#11228E',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
}); 