import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useAppTheme } from '../theme';

export default function Index() {
  const { colors } = useAppTheme();

  return (
    <View style={[styles.container, { backgroundColor: colors.card }]}>
      <Text style={[styles.titulo, { color: colors.text }]}>Novo trailer de GTA VI é lançado</Text>
      <Text style={{ color: colors.text }}>
        A Rockstar Games revelou um novo trailer de GTA VI, mostrando gráficos impressionantes e novos personagens.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
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
