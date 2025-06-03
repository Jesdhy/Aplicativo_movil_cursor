import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const JobCard = ({ 
  title, 
  description, 
  tags, 
  postedTime, 
  salary 
}: {
  title: string;
  description: string;
  tags: string[];
  postedTime: string;
  salary: string;
}) => (
  <View style={styles.jobCard}>
    <View style={styles.jobHeader}>
      <Text style={styles.jobTitle}>{title}</Text>
      <Text style={styles.salary}>{salary}</Text>
    </View>
    <Text style={styles.description}>{description}</Text>
    <View style={styles.tagsContainer}>
      {tags.map((tag, index) => (
        <View key={index} style={styles.tag}>
          <Text style={styles.tagText}>{tag}</Text>
        </View>
      ))}
      <Text style={styles.postedTime}>{postedTime}</Text>
    </View>
  </View>
);

export const RecentJobs = () => {
  const jobs = [
    {
      title: 'Diseñador UI/UX',
      description: 'Se necesita senior diseñador UI/UX',
      tags: ['Diseñador', 'Tiempo completo'],
      postedTime: 'Publicado hace 2 horas',
      salary: '$450/month'
    },
    {
      title: 'PASANTE DE SISTEMAS',
      description: 'SERVICAT - En nuestra empresa estamos en búsqueda de un Pasante de Sistemas para unirse a nuestro equipo de Tecnología, Sistemas y Telecomunicaciones.',
      tags: ['Pasante', 'Medio tiempo'],
      postedTime: 'Publicado hace 3 horas',
      salary: '$150/month'
    }
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Trabajos recientes</Text>
      {jobs.map((job, index) => (
        <JobCard key={index} {...job} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#000',
  },
  jobCard: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 16,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  jobHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  jobTitle: {
    fontSize: 18,
    fontWeight: '500',
    color: '#11228E',
  },
  salary: {
    fontSize: 16,
    fontWeight: '500',
    color: '#D4AF37',
  },
  description: {
    fontSize: 14,
    color: '#666',
    marginBottom: 12,
  },
  tagsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    gap: 8,
  },
  tag: {
    backgroundColor: '#F5F5F5',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
  },
  tagText: {
    color: '#666',
    fontSize: 12,
  },
  postedTime: {
    fontSize: 12,
    color: '#999',
    marginLeft: 'auto',
  },
}); 