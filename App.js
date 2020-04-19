import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useFonts } from '@use-expo/font';
import { AppLoading } from 'expo';
import Home from './Home';
import Dah from './Dah';
import Third from './Third';
import VideoPlays from './VideoPlays';
import TanggalUltah from './TanggalUltah';
import Ngilang from './Ngilang';
import HappyBirthDay from './HappyBirthDay';
const Stack = createStackNavigator();

function App() {
  const [fontsLoaded] = useFonts({
    'Roboto-Regular': require('./assets/fonts/roboto/Roboto-Regular.ttf'),
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={'Home'}
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Dah" component={Dah} />
        <Stack.Screen name="Third" component={Third} />
        <Stack.Screen name="VideoPlays" component={VideoPlays} />
        <Stack.Screen name="Ngilang" component={Ngilang} />
        <Stack.Screen name="TanggalUltah" component={TanggalUltah} />
        <Stack.Screen name="HappyBirthDay" component={HappyBirthDay} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
