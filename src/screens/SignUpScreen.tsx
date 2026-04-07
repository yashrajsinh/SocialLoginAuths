import { View, Text, StyleSheet, ToastAndroid } from 'react-native';
import React, { useState } from 'react';

//const array
import { SOCIALS } from '../providers/IconsProvide';
//buttons component
import SocialMediaButton from '../components/SocialMediaButtons/SocailMediaButtons';
//auth service
import { googleLogIn } from '../services/Auth/googleAuth';

type Props = {
  navigation: any;
};
type GoogleUser = {
  id: string;
  name: string | null;
  email: string;
  photo: string | null;
  familyName: string | null;
  givenName: string | null;
};

const SignUpScreen = ({ navigation }: Props) => {
  //useState for user response
  const [user, setUser] = useState<GoogleUser | null>(null);
  //function to handle click
  const handleLogin = async () => {
    try {
      ToastAndroid.show('Click works ', ToastAndroid.SHORT);
      const res = await googleLogIn();
      ToastAndroid.show('Log in success ' + '' + res, ToastAndroid.LONG);
      setUser(res.user);

      // navigate ONLY after login finishes
      navigation.navigate('Register', {
        provider: 'Google',
        user: res.user,
      });
      console.log(res); // debug
    } catch (e) {
      console.log(e);
      ToastAndroid.show('error  ' + ' ' + e, ToastAndroid.LONG);
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
