import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useAppTheme } from '../theme';

export default function NoticiaExtra() {
  const { colors } = useAppTheme();

  return (
    <View style={[styles.card, { backgroundColor: colors.card }]}>
      <Text style={[styles.titulo, { color: colors.text }]}>Fortnite ganha novo crossover com Dragon Ball</Text>
      <Text style={{ color: colors.text }}>
        A Epic Games adicionou Goku Black e novas habilidades inspiradas no anime à nova temporada de Fortnite.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    margin: 16,
    padding: 16,
    borderRadius: 8,
  },
  titulo: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
});
