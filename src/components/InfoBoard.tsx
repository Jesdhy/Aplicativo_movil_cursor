import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export const InfoBoard = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tablero informativo</Text>
      <ScrollView 
        horizontal 
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {/* Recomendación de estudio */}
        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <Ionicons name="calculator" size={20} color="#00287A" />
            <Ionicons name="book" size={20} color="#00287A" style={styles.headerIcon} />
          </View>
          <Text style={styles.cardTitle}>Recomendación de estudio del día</Text>
          <Text style={styles.cardSubtitle}>Tema: Álgebra Lineal</Text>
          <Text style={styles.cardContent}>
            Te dejamos 2 temas clave y 3 preguntas tipo examen
          </Text>
          <TouchableOpacity style={styles.cardButton}>
            <Text style={styles.buttonText}>Ver más información</Text>
          </TouchableOpacity>
        </View>

        {/* Oferta de trabajo */}
        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <Ionicons name="briefcase" size={20} color="#00287A" />
          </View>
          <Text style={styles.cardTitle}>Oferta de trabajo destacada</Text>
          <Text style={styles.cardContent}>
            Se busca pasante en Desarrollo Web
          </Text>
          <TouchableOpacity style={styles.cardButton}>
            <Text style={styles.buttonText}>Ver más información</Text>
          </TouchableOpacity>
        </View>

        {/* Racha de estudio */}
        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <Ionicons name="flame" size={20} color="#FF6B6B" />
            <Ionicons name="happy" size={20} color="#FF6B6B" style={styles.headerIcon} />
          </View>
          <Text style={styles.cardTitle}>¡Llevas 4 días consecutivos estudiando!</Text>
        </View>
      </ScrollView>
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
  scrollContent: {
    paddingRight: 16,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginRight: 16,
    width: 280,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  cardHeader: {
    flexDirection: 'row',
    marginBottom: 12,
  },
  headerIcon: {
    marginLeft: 8,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
    marginBottom: 8,
  },
  cardSubtitle: {
    fontSize: 14,
    color: '#666',
    marginBottom: 8,
  },
  cardContent: {
    fontSize: 14,
    color: '#666',
    marginBottom: 12,
  },
  cardButton: {
    backgroundColor: '#00287A',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
    alignSelf: 'flex-start',
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 14,
  },
}); 