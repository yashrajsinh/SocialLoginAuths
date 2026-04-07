import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

type Props = {
  onPress: () => void;
};

const LogOutButton = ({ onPress }: Props) => {
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={onPress}
      activeOpacity={0.4}
    >
      <Text style={styles.text}>Log out</Text>
    </TouchableOpacity>
  );
};

export default LogOutButton;

const styles = StyleSheet.create({
  button: {
    marginTop: 25,
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 12,
    backgroundColor: '#f2f2f2',
    alignItems: 'center',
    borderColor: '#e5e5e5',
  },
  text: {
    color: '#e53935',
    fontSize: 16,
    fontWeight: '600',
  },
});
