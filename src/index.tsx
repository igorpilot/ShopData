import React from 'react';
import ReactDOM from 'react-dom/client'; // Імпортуйте з 'react-dom/client'
import App from './App';

// Використовуємо createRoot замість render
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(<App />);
