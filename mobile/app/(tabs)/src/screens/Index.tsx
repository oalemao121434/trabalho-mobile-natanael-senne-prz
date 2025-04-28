// src/screens/Index.tsx

import React, { useContext } from 'react';
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { CartContext } from '../context/CartContext';

const produtos = [
  {
    id: '1',
    nome: 'Smartphone Galaxy S21',
    preco: 'R$ 3.499,00',
    imagem: 'https://images.unsplash.com/photo-1611186871348-9b4da3d60d82?auto=format&fit=crop&w=800&q=60',
  },
  {
    id: '2',
    nome: 'Notebook Dell Inspiron',
    preco: 'R$ 4.999,00',
    imagem: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=800&q=60',
  },
  {
    id: '3',
    nome: 'Fone de Ouvido Bluetooth',
    preco: 'R$ 299,00',
    imagem: 'https://images.unsplash.com/photo-1585386959984-a4155228efb0?auto=format&fit=crop&w=800&q=60',
  },
];

export default function Index() {
  const navigation = useNavigation();
  const { cartItems } = useContext(CartContext)!;

  const renderItem = ({ item }: { item: typeof produtos[0] }) => (
    <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Detalhes', { produto: item })}>
      <Image source={{ uri: item.imagem }} style={styles.image} />
      <Text style={styles.name}>{item.nome}</Text>
      <Text style={styles.price}>{item.preco}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🏪 Loja Virtual</Text>
      <FlatList
        data={produtos}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.list}
      />

      <TouchableOpacity
        style={styles.cartButton}
        onPress={() => navigation.navigate('Carrinho')}>
        <Text style={styles.cartText}>🛒 Carrinho ({cartItems.length})</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f5f5f5', paddingTop: 40 },
  title: { fontSize: 28, fontWeight: 'bold', textAlign: 'center', marginBottom: 20 },
  list: { paddingHorizontal: 16 },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 16,
    marginBottom: 16,
    alignItems: 'center',
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
  },
  image: { width: 150, height: 150, borderRadius: 8, marginBottom: 10 },
  name: { fontSize: 18, fontWeight: 'bold', marginBottom: 5, textAlign: 'center' },
  price: { fontSize: 16, color: '#4CAF50' },
  cartButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    backgroundColor: '#4CAF50',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 50,
    elevation: 3,
  },
  cartText: { color: '#fff', fontSize: 16 },
});
