import {
  GoogleSignin,
  isSuccessResponse,
} from '@react-native-google-signin/google-signin';

//configure when app loads
GoogleSignin.configure({
  webClientId:
    '248255080713-vt59irbdalaht3tu2u85its89gschu3m.apps.googleusercontent.com',
  offlineAccess: true,
});

export const googleLogIn = async () => {
  try {
    //1. Check play service
    await GoogleSignin.hasPlayServices();
    //2. Sign in with google
    const response = await GoogleSignin.signIn();

    // Type-safe check
    if (!isSuccessResponse(response)) {
      throw new Error('Google sign-in cancelled');
    }
    // TS knows it's success response
    const user = response.data.user;
    // get tokens
    const { idToken } = await GoogleSignin.getTokens();
    return { idToken, user };
  } catch (error) {
    console.log('Error ' + error);
    throw error;
  } finally {
  }
};
