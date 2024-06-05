import React, {useEffect, useState} from 'react';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {ToastProvider} from 'react-native-toast-notifications';

import Navigation from './src/Navigation';
import SplashScreen from './src/Components/SplashScreen';
import {NavigationContainer} from '@react-navigation/native';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    },
  },
});

function App() {
  const [isSplashVisible, setIsSplashVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsSplashVisible(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <ToastProvider
      successColor="green"
      duration={1000}
      placement="top"
      warningColor="darkred">
      <QueryClientProvider client={queryClient}>
        {isSplashVisible ? (
          <SplashScreen />
        ) : (
          <NavigationContainer>
            <Navigation />
          </NavigationContainer>
        )}
      </QueryClientProvider>
    </ToastProvider>
  );
}

export default App;
