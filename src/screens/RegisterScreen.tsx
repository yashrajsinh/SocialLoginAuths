import { View, Text } from 'react-native';
import React from 'react';

type Props = {
  route: any;
};

const RegisterScreen = (props: Props) => {
  //accept provider here based on passed type
  const { provider, user } = props.route.params;
  return (
    <View>
      {user ? <Text>Sign in with {user.email}</Text> : <Text>Loading...</Text>}
    </View>
  );
};

export default RegisterScreen;
