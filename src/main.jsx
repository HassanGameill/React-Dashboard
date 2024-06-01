import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// import reportWebVitals from './reportWebVitals';
// import  'react-multiple-select-dropdown-lite/dist/index.css'

//import '@splidejs/splide/css';

import { BrowserRouter as Router } from "react-router-dom";

// import {Provider} from "react-redux"
// import store from './RTK-STORE/store.js';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
)
