import React from 'react';
import { TouchableOpacity, Text, StyleSheet, Image, View } from 'react-native';

type Props = {
  text: string;
  bgColor: string;
  icon: any;
  onPress?: () => void; // optional (good practice)
};

const SocialMediaButton = ({ text, bgColor, icon, onPress }: Props) => {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: bgColor }]}
      activeOpacity={0.5}
      onPress={onPress}
    >
      <View style={styles.content}>
        <Image source={icon} style={styles.icon} />
        <Text style={styles.text}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default SocialMediaButton;

const styles = StyleSheet.create({
  button: {
    borderRadius: 12,
    paddingVertical: 14,
    paddingHorizontal: 16,
  },

  content: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  icon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },

  text: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '600',
  },
});
