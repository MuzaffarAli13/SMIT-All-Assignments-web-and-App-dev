import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import reportWebVitals from './reportWebVitals';
import { Header } from './Header';
import Counter from './components/counter';
import Addtasker from './components/addtasker';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header/>
    <Counter/>
    <Addtasker/>
  </React.StrictMode>
);

reportWebVitals();
