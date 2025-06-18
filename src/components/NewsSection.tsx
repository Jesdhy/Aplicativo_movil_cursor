import React from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export const NewsSection = ({ children }: { children?: React.ReactNode }) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../assets/eventos.jpg')}
        style={styles.backgroundImage}
        imageStyle={styles.image}
      >
        <View style={styles.overlay}>
          <Text style={styles.title}>Eventos y noticias</Text>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Ver boletín</Text>
            <Ionicons name="chevron-forward" size={20} color="#fff" />
          </TouchableOpacity>
        </View>
      </ImageBackground>
      {children && <View style={styles.childrenContainer}>{children}</View>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 24,
    borderRadius: 12,
    overflow: 'visible',
    position: 'relative',
    height: 260,
  },
  backgroundImage: {
    height: 180,
    width: '100%',
    justifyContent: 'flex-end',
  },
  image: {
    borderRadius: 12,
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)',
    padding: 20,
    justifyContent: 'space-between',
    borderRadius: 12,
  },
  title: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
    alignSelf: 'flex-start',
  },
  buttonText: {
    color: '#000',
    fontWeight: '600',
    marginRight: 4,
  },
  childrenContainer: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 140,
    alignItems: 'center',
    zIndex: 2,
  },
}); 