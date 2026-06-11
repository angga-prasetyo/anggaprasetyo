import React from 'react';

import ReactDOM from 'react-dom/client';

import App from './App.tsx';
import { CTErrorBoundary } from './components/ct-error-boundary/component.tsx';

import './index.css';

// Add Initial Dark Theme
document.body.classList.add('dark');

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <CTErrorBoundary>
      <App />
    </CTErrorBoundary>
  </React.StrictMode>,
);
