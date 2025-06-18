import React from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

type IconName = 'calendar' | 'document-text' | 'checkbox' | 'school';

const actions: { icon: IconName; label: string }[] = [
  { icon: 'calendar', label: 'Horario' },
  { icon: 'document-text', label: 'Carnet' },
  { icon: 'checkbox', label: 'Tareas' },
  { icon: 'school', label: 'Aula Virtual' },
];

export const NewsHero = () => {
  const insets = useSafeAreaInsets();
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../assets/eventos.jpg')}
        style={styles.background}
        imageStyle={styles.image}
      >
        {/* Header overlay */}
        <View style={[styles.header, { paddingTop: insets.top + 8 }]}> 
          <TouchableOpacity style={styles.menuButton}>
            <Ionicons name="menu" size={28} color="#fff" />
          </TouchableOpacity>
          <View style={styles.searchBar}>
            <Ionicons name="search" size={20} color="#00287A" />
            <Text style={styles.searchPlaceholder}>Buscar...</Text>
          </View>
          <TouchableOpacity style={styles.profileButton}>
            <Image
              source={require('../../assets/profile.jpg')}
              style={styles.profileImage}
            />
          </TouchableOpacity>
        </View>
        {/* Texto y botón flotante */}
        <View style={styles.overlayContent}>
          <Text style={styles.title}>Eventos y noticias</Text>
          <TouchableOpacity style={styles.fab}>
            <Text style={styles.fabText}>Ver boletín</Text>
            <Ionicons name="chevron-forward" size={20} color="#00287A" />
          </TouchableOpacity>
        </View>
        {/* Botones de acción rápida */}
        <View style={styles.actionsRow}>
          {actions.map((action, idx) => (
            <TouchableOpacity key={idx} style={styles.actionButton}>
              <Ionicons name={action.icon} size={28} color="#fff" />
              <Text style={styles.actionLabel}>{action.label}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 340,
    marginBottom: 24,
  },
  background: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  image: {
    width: '100%',
    height: 340,
    resizeMode: 'cover',
  },
  header: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    zIndex: 2,
  },
  menuButton: {
    padding: 8,
  },
  searchBar: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 20,
    marginHorizontal: 12,
    paddingHorizontal: 12,
    height: 40,
    borderWidth: 2,
    borderColor: '#00287A',
  },
  searchPlaceholder: {
    flex: 1,
    marginLeft: 8,
    color: '#00287A',
    fontWeight: '500',
  },
  profileButton: {
    padding: 4,
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: '#fff',
  },
  overlayContent: {
    position: 'absolute',
    top: 90,
    left: 0,
    right: 0,
    alignItems: 'center',
    zIndex: 2,
  },
  title: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    textShadowColor: 'rgba(0,0,0,0.3)',
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 4,
  },
  fab: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingVertical: 6,
    paddingHorizontal: 14,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 4,
    elevation: 4,
  },
  fabText: {
    color: '#00287A',
    fontWeight: 'bold',
    marginRight: 4,
    fontSize: 13,
  },
  actionsRow: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: -38,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    zIndex: 3,
    paddingHorizontal: 12,
  },
  actionButton: {
    backgroundColor: '#00287A',
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    width: 76,
    height: 76,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.12,
    shadowRadius: 4,
    elevation: 3,
  },
  actionLabel: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 13,
    marginTop: 6,
    textAlign: 'center',
  },
}); 