import { LoginManager, AccessToken } from 'react-native-fbsdk-next';

export const loginWithFacebook = async () => {
  try {
    // Reset previous session
    await LoginManager.logOut();

    // Start login
    const result = await LoginManager.logInWithPermissions(['public_profile']);

    if (result.isCancelled) {
      console.log('User cancelled login');
      return null;
    }

    // Get access token
    const data = await AccessToken.getCurrentAccessToken();

    if (!data) {
      console.log('No access token');
      return null;
    }

    const token = data.accessToken.toString();

    // Fetch user info (NO email to avoid error)
    const response = await fetch(
      `https://graph.facebook.com/v18.0/me?fields=id,name,picture.type(large)&access_token=${token}`,
    );

    const user = await response.json();

    const photo = user?.picture?.data?.url;

    return {
      provider: 'Facebook',
      token,
      id: user.id,
      name: user.name,
      photo,
    };
  } catch (error) {
    console.log('FB ERROR:', error);
    return null;
  }
};
