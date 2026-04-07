/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
//navigation
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './src/navigation/AppNavigation';

function App() {
  return (
    <SafeAreaProvider style={{ backgroundColor: '#F8F9FB' }}>
      <NavigationContainer>
        <SafeAreaView style={{ flex: 1, backgroundColor: '#F8F9FB' }}>
          <AppNavigator />
        </SafeAreaView>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default App;
