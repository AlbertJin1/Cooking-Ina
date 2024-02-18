import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const CustomButton = ({ title, onPress, style, textStyle }) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.button, style]}>
      <Text style={[styles.buttonText, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = {
  button: {
    backgroundColor: '#6D9773',
    padding: 8,
    margin: 8,
    borderRadius: 11,
    width: 289,
    height: 55,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 25,
    textAlign: 'center',
    fontFamily: 'Poppins_600SemiBold'
  },
};

export default CustomButton;
