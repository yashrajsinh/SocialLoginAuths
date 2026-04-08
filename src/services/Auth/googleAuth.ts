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

//function to log in the user
export const googleLogIn = async () => {
  try {
    await GoogleSignin.hasPlayServices();
    const response = await GoogleSignin.signIn();
    //type safe check
    if (!isSuccessResponse(response)) {
      throw new Error('Google sign-in cancelled');
    }

    //Get secure token
    const { idToken } = await GoogleSignin.getTokens();
    const user = response.data.user;
    return {
      email: user.email,
      name: user.name,
      photo: user.photo,
      idToken,
    };
  } catch (error) {
    console.log('Error ' + error);
    throw error;
  }
};
//function to log out the user
export const googleLogOut = async () => {
  try {
    // check if user is signed in
    const user = await GoogleSignin.getCurrentUser();
    if (user) {
      await GoogleSignin.signOut();
    }
    console.log('Google logout success');
  } catch (e) {
    console.log('Error logging out ' + e);
  }
};
