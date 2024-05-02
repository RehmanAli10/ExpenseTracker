import React, {useEffect, useState} from 'react';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';

import Navigation from './src/Navigation';
import SplashScreen from './src/Components/SplashScreen';

// const queryClient = new QueryClient({
//   defaultOptions: {
//     queries: {
//       staleTime: 0,
//     },
//   },
// });

function App() {
  const [isSplashVisible, setIsSplashVisible] = useState(true);

  useEffect(function () {
    setTimeout(function () {
      setIsSplashVisible(false);
    }, 3000);
  }, []);

  return isSplashVisible ? <SplashScreen /> : <Navigation />;
}

export default App;
