import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

type IconName = 'book' | 'clipboard-outline' | 'home' | 'map' | 'person';

const navItems: { icon: IconName; label: string }[] = [
  { icon: 'book', label: 'Libro' },
  { icon: 'clipboard-outline', label: 'Tareas' },
  { icon: 'home', label: 'Inicio' },
  { icon: 'map', label: 'Mapa' },
  { icon: 'person', label: 'Perfil' },
];

export const BottomNav = () => {
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.container, { paddingBottom: insets.bottom }]}>
      {navItems.map((item, index) => (
        <TouchableOpacity
          key={index}
          style={[styles.navItem, index === 2 && styles.centerItem]}
        >
          {index === 2 ? (
            <View style={styles.centerCircle}>
              <Ionicons name={item.icon} size={32} color="#D4AF37" />
            </View>
          ) : (
            <Ionicons name={item.icon} size={24} color="#fff" />
          )}
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#00287A',
    paddingTop: 12,
    paddingHorizontal: 16,
    borderTopWidth: 1,
    borderTopColor: '#E5E5E5',
  },
  navItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: 48,
  },
  centerItem: {
    marginTop: -24,
    zIndex: 2,
  },
  centerCircle: {
    backgroundColor: '#fff',
    width: 56,
    height: 56,
    borderRadius: 28,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 4,
    elevation: 4,
  },
}); 