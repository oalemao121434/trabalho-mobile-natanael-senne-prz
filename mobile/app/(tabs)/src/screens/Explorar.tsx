import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ActivityIndicator, ScrollView } from 'react-native';
import { useAppTheme } from '../theme';
import { fetchJogosPopulares } from '../api/rawg';
import NoticiaExtra from './NoticiaExtra';

export default function Explorar() {
  const { colors } = useAppTheme();
  const [jogos, setJogos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchJogosPopulares().then(data => {
      setJogos(data);
      setLoading(false);
    });
  }, []);

  return (
    <ScrollView style={{ flex: 1, backgroundColor: colors.background }}>
      <View style={[styles.card, { backgroundColor: colors.card }]}>
        <Text style={[styles.titulo, { color: colors.text }]}>Sony anuncia o PlayStation 6</Text>
        <Text style={{ color: colors.text }}>
          Durante o evento PlayStation Showcase, a Sony confirmou que o PS6 será lançado em 2026.
        </Text>
      </View>

      <NoticiaExtra />

      <Text style={[styles.titulo, { color: colors.text, marginLeft: 16 }]}>Jogos populares:</Text>
      {loading ? (
        <ActivityIndicator size="large" color="#00f" style={{ marginTop: 16 }} />
      ) : (
        jogos.map(jogo => (
          <View key={jogo.id} style={[styles.card, { backgroundColor: colors.card }]}>
            <Text style={[styles.jogo, { color: colors.text }]}>{jogo.name}</Text>
            <Text style={{ color: colors.text }}>Nota: {jogo.rating}</Text>
          </View>
        ))
      )}
    </ScrollView>
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
  jogo: {
    fontSize: 16,
    fontWeight: '600',
  },
});
