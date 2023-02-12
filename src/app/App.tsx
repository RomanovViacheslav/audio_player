import React from 'react';
import { Route, Routes } from 'react-router-dom';

import MainPage from '../page/MainPage';
import { MainLayout } from '../ui';
import ErrorBoundary from './ErrorBoundary';

const App = () => (
  <ErrorBoundary>
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<MainPage />} />
      </Route>
    </Routes>
  </ErrorBoundary>
);

export default App;
