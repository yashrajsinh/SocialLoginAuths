import {
  GoogleSignin,
  isSuccessResponse,
} from '@react-native-google-signin/google-signin';

GoogleSignin.configure({
  webClientId:
    '248255080713-vt59irbdalaht3tu2u85its89gschu3m.apps.googleusercontent.com',
  iosClientId:
    '248255080713-jgr15n2fmpq1r0bdu1ru1o685nqop5ib.apps.googleusercontent.com',
  offlineAccess: true,
});

export const googleLogIn = async () => {
  try {
    await GoogleSignin.hasPlayServices();
    const response = await GoogleSignin.signIn();
    //type safe check
    if (!isSuccessResponse(response)) {
      throw new Error('Google sign-in cancelled');
    }

    const user = response.data.user;
    const { idToken } = await GoogleSignin.getTokens();
    return { idToken, user };
  } catch (error) {
    console.log('Error ' + error);
    throw error;
  }
};
