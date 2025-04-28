// src/screens/CartScreen.tsx

import React, { useContext } from 'react';
import { View, Text, FlatList, Button, StyleSheet } from 'react-native';
import { CartContext } from '../context/CartContext';

export default function CartScreen({ navigation }: any) {
  const { cartItems, removeFromCart } = useContext(CartContext)!;

  const handleRemoveFromCart = (productId: string) => {
    removeFromCart(productId);
  };

  const renderItem = ({ item }: { item: any }) => (
    <View style={styles.card}>
      <Text style={styles.name}>{item.nome}</Text>
      <Text style={styles.price}>{item.preco}</Text>
      <Button title="Remover do Carrinho" onPress={() => handleRemoveFromCart(item.id)} />
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Carrinho de Compras</Text>

      {cartItems.length === 0 ? (
        <Text style={styles.empty}>Seu carrinho está vazio!</Text>
      ) : (
        <FlatList
          data={cartItems}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
          contentContainerStyle={styles.list}
        />
      )}

      {cartItems.length > 0 && (
        <Button title="Finalizar Compra" onPress={() => alert('Compra finalizada!')} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f5f5f5', paddingTop: 40, padding: 20 },
  title: { fontSize: 28, fontWeight: 'bold', textAlign: 'center', marginBottom: 20 },
  list: { paddingBottom: 20 },
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
  name: { fontSize: 18, fontWeight: 'bold', marginBottom: 5, textAlign: 'center' },
  price: { fontSize: 16, color: '#4CAF50' },
  empty: { fontSize: 16, textAlign: 'center', color: '#888' },
});
