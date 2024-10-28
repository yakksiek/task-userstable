import { Provider } from 'react-redux';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from './App.tsx';
import './index.css';
import GlobalStyles from './styles/GlobalStyles.ts';

import setupStore from './store/store.ts';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <Provider store={setupStore()}>
            <GlobalStyles />
            <App />
        </Provider>
    </StrictMode>,
);
