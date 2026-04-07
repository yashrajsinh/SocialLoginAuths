import { View, Text, Image, StyleSheet } from 'react-native';
import React from 'react';
import { SOCIALS } from '../providers/IconsProvide';

type Props = {
  route: any;
  navigation: any;
};
//logout button
import LogOutButton from '../components/LogOutButton/LogOutButton';

//logout function from auth
import { googleLogOut } from '../services/Auth/googleAuth';

const RegisterScreen = ({ route, navigation }: Props) => {
  const { provider, email, name, profilePic } = route.params;
  //function to handle log out
  const handleLogout = async () => {
    try {
      await googleLogOut();
      navigation.replace('SignUp');
    } catch (error) {
      console.log('Error logging out');
    }
  };
  //show image based on login type
  let icon = null;

  if (provider === 'Google') {
    icon = SOCIALS.google.icon;
  } else if (provider === 'Facebook') {
    icon = SOCIALS.facebook.icon;
  } else if (provider === 'Apple') {
    icon = SOCIALS.apple.icon;
  }

  if (!email) {
    return (
      <View style={styles.center}>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        {/* Top text + icon */}
        <View style={styles.row}>
          <Text style={styles.provider}>Signed in using </Text>
          {icon && <Image source={icon} style={styles.icon} />}
        </View>

        {/* Profile */}
        <Image source={{ uri: profilePic }} style={styles.avatar} />

        <Text style={styles.name}>{name}</Text>
        <Text style={styles.email}>{email}</Text>
        <LogOutButton onPress={handleLogout} />
      </View>
    </View>
  );
};

export default RegisterScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    width: '85%',
    padding: 20,
    borderRadius: 15,
    backgroundColor: '#fff',
    alignItems: 'center',
    elevation: 4,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  icon: {
    width: 20,
    height: 20,
    marginRight: 8,
  },
  provider: {
    fontSize: 14,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  email: {
    fontSize: 14,
    color: 'gray',
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
