import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

import { SOCIALS } from '../providers/IconsProvide';
import SocialMediaButton from '../components/SocialMediaButtons/SocailMediaButtons';

type Props = {
  navigation: any;
};

const SignUpScreen = ({ navigation }: Props) => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>Create Account</Text>
        <Text style={styles.subtitle}>Join us and start your journey 🚀</Text>
      </View>

      {/* Social Buttons */}
      <View style={styles.socialContainer}>
        {Object.values(SOCIALS).map((item, index) => (
          <SocialMediaButton
            key={index}
            text={item.text}
            bgColor={item.bgColor}
            icon={item.icon}
            onPress={() => navigation.navigate(item.screen)}
          />
        ))}
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>
          Already have an account? <Text style={styles.loginText}>Login</Text>
        </Text>
      </View>
    </View>
  );
};

export default SignUpScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F9FB',
    paddingHorizontal: 20,
    paddingTop: 70,
    paddingBottom: 30,
    justifyContent: 'space-between',
  },

  header: {
    gap: 8,
  },

  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#111827',
  },

  subtitle: {
    fontSize: 15,
    color: '#6B7280',
  },

  socialContainer: {
    gap: 15,
  },

  footer: {
    alignItems: 'center',
  },

  footerText: {
    color: '#6B7280',
    fontSize: 13,
  },

  loginText: {
    color: '#111827',
    fontWeight: '600',
  },
});
