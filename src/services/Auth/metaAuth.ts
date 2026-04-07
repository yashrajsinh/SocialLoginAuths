import { LoginManager, AccessToken } from 'react-native-fbsdk-next';

export const loginWithFacebook = async () => {
  try {
    const result = await LoginManager.logInWithPermissions(['public_profile']);

    if (result.isCancelled) {
      return null;
    }

    const data = await AccessToken.getCurrentAccessToken();

    if (!data) {
      return null;
    }

    return data.accessToken.toString(); // RETURN THIS
  } catch (error) {
    throw error;
  }
};
