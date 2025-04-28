// src/screens/ProductDetailScreen.tsx

import React, { useContext } from 'react';
import { View, Text, Image, StyleSheet, Button } from 'react-native';
import { CartContext } from '../context/CartContext';

export default function ProductDetailScreen({ route, navigation }: any) {
  const { produto } = route.params;
  const { addToCart } = useContext(CartContext)!;

  const handleAddToCart = () => {
    addToCart(produto);
    navigation.goBack(); 
  };

  return (
    <View style={styles.container}>
      <Image source={{ uri: produto.imagem }} style={styles.image} />
      <Text style={styles.name}>{produto.nome}</Text>
      <Text style={styles.price}>{produto.preco}</Text>

      <Text style={styles.description}>
        Produto de alta qualidade. Excelente custo-benefício. Perfeito para suas necessidades diárias!
      </Text>

      <Button title="Adicionar ao Carrinho" onPress={handleAddToCart} />
      <Button title="Voltar para a Loja" onPress={() => navigation.goBack()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, alignItems: 'center', backgroundColor: '#f5f5f5' },
  image: { width: 200, height: 200, borderRadius: 8, marginBottom: 20 },
  name: { fontSize: 24, fontWeight: 'bold', marginBottom: 10, textAlign: 'center' },
  price: { fontSize: 20, color: '#4CAF50', marginBottom: 20 },
  description: { fontSize: 16, textAlign: 'center', marginBottom: 30 },
});
