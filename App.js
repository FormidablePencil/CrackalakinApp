import React, { useEffect, useState } from 'react';
import * as Font from 'expo-font'; //This is built in to expo and it help us to load custom font's we've downloaded
import { ThemeProvider } from 'styled-components'
import { theme } from './styles/globalStyles';
import { ContextMatchingGameProvider } from './context/ContextMatchingGame';
import { Provider } from 'react-redux';
import configureStore from './store';
const store = configureStore()

export const App = () => {
  const [fontLoaded, setFontLoaded] = useState(false)

  useEffect(() => {
    async function loadingFonts() {
      await Font.loadAsync({
        'fredoka-one-regular': require('./assets/fonts/FredokaOne-Regular.ttf'),
        'federant-regular': require('./assets/fonts/Federant-Regular.ttf'),
        'pangolin-regular': require('./assets/fonts/Pangolin-Regular.ttf'),
        'Raleway-Regular': require('./assets/fonts/Raleway-Regular.ttf'),
        'Poppins-Regular': require('./assets/fonts/Poppins-SemiBold.ttf'),
      });
      setFontLoaded(true);
    }
    loadingFonts()
  }, [])

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        {fontLoaded ?
          <ContextMatchingGameProvider />
          : null
        }
      </ThemeProvider>
    </Provider>
  );
}


export default App