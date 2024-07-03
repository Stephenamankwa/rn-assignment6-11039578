import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const CartScreen = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const loadCart = async () => {
      try {
        const storedCart = await AsyncStorage.getItem('cart');
        if (storedCart) {
          setCart(JSON.parse(storedCart));
        }
      } catch (error) {
        console.error('Failed to load the cart.', error);
      }
    };
    loadCart();
  }, []);

  const removeFromCart = async (product) => {
    try {
      console.log('Removing item:', product); // Add this line
      const updatedCart = cart.filter((item) => item.id !== product.id);
      console.log('Updated Cart:', updatedCart);
      setCart(updatedCart);
      await AsyncStorage.setItem('cart', JSON.stringify(updatedCart));
    } catch (error) {
      console.error('Failed to remove the item from the cart.', error);
    }
  };

  return (
    <View>
      {cart.length === 0 ? (
        <Text>Your cart is empty</Text>
      ) : (
        <FlatList
          data={cart}
          keyExtractor={(item) => item.id.toString()} // Ensure id is a string
          renderItem={({ item }) => (
            <View>
              <Text>{item.name} - ${item.price}</Text>
              <Button title="Remove from Cart" onPress={() => removeFromCart(item)} />
            </View>
          )}
        />
      )}
      <Text>Total: ${cart.reduce((sum, item) => sum + item.price, 0)}</Text>
    </View>
  );
};

export default CartScreen;
