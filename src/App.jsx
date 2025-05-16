
import React from 'react';
    import { Routes, Route } from 'react-router-dom';
    import Layout from '@/components/Layout';
    import HomePage from '@/pages/HomePage';
    import GamesPage from '@/pages/GamesPage';
    import AppsPage from '@/pages/AppsPage';
    import SettingsPage from '@/pages/SettingsPage';
    import NotFoundPage from '@/pages/NotFoundPage';

    function App() {
      return (
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/games" element={<GamesPage />} />
            <Route path="/apps" element={<AppsPage />} />
            <Route path="/settings" element={<SettingsPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Layout>
      );
    }

    export default App;