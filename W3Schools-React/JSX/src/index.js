import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import JSXExamples from './JSXExamples';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

//const myElement = <h1>I Love JSX!</h1>;
const JSXexamples = ReactDOM.createRoot(document.getElementById('jsx-examples'));
//JSXexamples.render(myElement);
JSXexamples.render(
  <React.StrictMode>
    <JSXExamples />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
