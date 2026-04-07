import { View, Text } from 'react-native';
import React from 'react';

type Props = {
  route: any;
};

const RegisterScreen = (props: Props) => {
  //accept provider here based on passed type
  const { provider } = props.route.params;
  return (
    <View>
      <Text>Sign in with {provider}</Text>
    </View>
  );
};

export default RegisterScreen;
