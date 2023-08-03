import React, { useEffect } from 'react';
import { Appearance, useColorScheme } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper'; // If you're using Paper UI library (optional)

const App = () => {
  const colorScheme = useColorScheme(); // Detects light/dark mode
  const isDarkMode = colorScheme === 'dark'; // Boolean value indicating if dark mode is enabled

  useEffect(() => {
    const subscription = Appearance.addChangeListener(({ colorScheme }) => {
      // Handle changes in appearance, e.g., update state or theme
    });

    return () => subscription.remove(); // Clean up the event listener on unmount
  }, []);

  // You can use 'isDarkMode' to conditionally apply dark mode styles or themes to your components
  // For example, using the 'PaperProvider' from 'react-native-paper':
  return (
    <PaperProvider theme={isDarkMode ? darkTheme : lightTheme}>
      {/* Your app content goes here */}
    </PaperProvider>
  );
};

export default App;