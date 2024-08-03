import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App'; // Ensure this path is correct

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root') // Ensure 'root' matches the id in your index.html
);
