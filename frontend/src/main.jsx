import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import GlobalStyles from './styles/global';
import { dark, light } from './styles/themes';
import { ThemeProvider } from 'styled-components';

import { AuthProvider } from './hooks/auth';

import { Routes } from './routes';

function App() {
  const [selectedTheme, setSelectedTheme] = useState(dark);

  return (
    <React.StrictMode>
      <ThemeProvider theme={selectedTheme === dark ? dark : light}>
        <GlobalStyles />
        <AuthProvider>
          <Routes
            setSelectedTheme={setSelectedTheme}
            selectedTheme={selectedTheme}
          />
        </AuthProvider>
      </ThemeProvider>
    </React.StrictMode>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
