import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const Card = ({ uri, name, price, rating }) => {
  return (
    <View style={styles.card}>
      <Image source={{ uri }} style={styles.image} />
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.price}>{price}</Text>
      <Text style={styles.rating}>{rating}</Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Add To Cart</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    alignItems: 'center',
    margin: 20,
    backgroundColor: 'offwhite',
    padding: 30,
    borderRadius: 15,
    shadowColor: 'black',
    shadowRadius: 10,
    shadowOffset: { height: 5, width: 3 },
    shadowOpacity: 0.6,
  },
  image: {
    width: 250,
    height: 180,
    borderRadius: 20,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
  },
  price: {
    margin: 10,
    color: 'green',
  },
  rating: {
    color: 'orange',
  },
  button: {
    backgroundColor: 'blue',
    borderRadius: 10,
    padding: 8,
    marginTop: 15,
  },
  buttonText: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 15,
  },
});

export default Card;
