import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  ToastAndroid,
} from 'react-native';
import React, { useState } from 'react';

// const array
import { SOCIALS } from '../providers/IconsProvide';

// buttons component
import SocialMediaButton from '../components/SocialMediaButtons/SocailMediaButtons';

// auth service
import { googleLogIn } from '../services/Auth/googleAuth';
import { loginWithFacebook } from '../services/Auth/metaAuth';

type Props = {
  navigation: any;
};

const SignUpScreen = ({ navigation }: Props) => {
  const [loading, setLoading] = useState(false);

  // ✅ Google login
  const handleLogin = async () => {
    try {
      setLoading(true);

      const res = await googleLogIn();

      if (!res) {
        ToastAndroid.show('Google login cancelled', ToastAndroid.SHORT);
        return;
      }

      ToastAndroid.show('Google login success 🎉', ToastAndroid.SHORT);

      navigation.navigate('Register', {
        provider: 'Google',
        ...res,
      });
    } catch (e) {
      console.log('GOOGLE ERROR:', e);
      ToastAndroid.show('Google login failed', ToastAndroid.SHORT);
    } finally {
      setLoading(false);
    }
  };

  // ✅ Facebook login (FIXED)
  const handleFaceBookLogIn = async () => {
    try {
      setLoading(true);

      const res = await loginWithFacebook();

      if (!res) {
        ToastAndroid.show('Facebook login cancelled', ToastAndroid.SHORT);
        return;
      }

      ToastAndroid.show('Facebook login success 🎉', ToastAndroid.SHORT);

      // 🔥 PASS FULL OBJECT
      navigation.navigate('Register', res);
    } catch (e) {
      console.log('FB ERROR:', e);
      ToastAndroid.show('Facebook login failed', ToastAndroid.SHORT);
    } finally {
      setLoading(false);
    }
  };

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
            onPress={() => {
              if (item.provider === 'Google') {
                handleLogin();
              } else if (item.provider === 'Facebook') {
                handleFaceBookLogIn();
              }
            }}
          />
        ))}
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>
          Already have an account? <Text style={styles.loginText}>Login</Text>
        </Text>
      </View>

      {/* Loader */}
      {loading && (
        <View style={styles.loader}>
          <ActivityIndicator size="large" color="#111827" />
        </View>
      )}
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

  loader: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.2)',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
