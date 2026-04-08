import { LoginManager, AccessToken } from 'react-native-fbsdk-next';

export const loginWithFacebook = async () => {
  try {
    // IMPORTANT: reset previous session
    await LoginManager.logOut();

    const result = await LoginManager.logInWithPermissions([
      'public_profile', // enough for name + photo
    ]);

    if (result.isCancelled) {
      return null;
    }

    const data = await AccessToken.getCurrentAccessToken();
    if (!data) return null;

    const token = data.accessToken.toString();

    // Only request what always works
    const response = await fetch(
      `https://graph.facebook.com/v18.0/me?fields=id,name,picture.type(large)&access_token=${token}`,
    );

    const user = await response.json();

    console.log('FB USER:', user);

    return {
      provider: 'Facebook',
      token,
      id: user.id,
      name: user.name,
      photo: user.picture?.data?.url,
    };
  } catch (error) {
    console.log('FB ERROR:', error);
    return null;
  }
};
