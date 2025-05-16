
import React from 'react';
    import ReactDOM from 'react-dom/client';
    import { BrowserRouter } from 'react-router-dom';
    import App from '@/App.jsx';
    import '@/index.css';
    import { ThemeProvider } from '@/components/theme-provider.jsx'; 
    import { Toaster } from '@/components/ui/toaster';

    ReactDOM.createRoot(document.getElementById('root')).render(
      <React.StrictMode>
        <BrowserRouter>
          <ThemeProvider defaultTheme="dark" storageKey="piracy-ui-theme">
            <App />
            <Toaster />
          </ThemeProvider>
        </BrowserRouter>
      </React.StrictMode>
    );