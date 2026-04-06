/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
//screens
import SignUpScreen from './src/screens/SignUpScreen';
function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1, backgroundColor: '#F8F9FB' }}>
        <SignUpScreen />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

export default App;
