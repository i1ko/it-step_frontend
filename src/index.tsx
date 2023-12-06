import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import NextUIProviderWrapper from "./providers/next-ui-provider";
import './index.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <NextUIProviderWrapper>
      <App />
    </NextUIProviderWrapper>
  </React.StrictMode>
);
