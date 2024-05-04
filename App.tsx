import React from 'react';
import {
  SafeAreaView,
  useColorScheme,
} from 'react-native';
import { PaperProvider } from 'react-native-paper';
import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';
import LandingScreen from './src/screen/LandingScreen';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    flex: 1,
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <PaperProvider>
       <SafeAreaView style={backgroundStyle}>
      <LandingScreen/>
    </SafeAreaView>
    </PaperProvider>
   
  );
}

export default App;
