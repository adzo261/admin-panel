import React from 'react';
import ReactDOM from 'react-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import './index.css';
import AdminPanel from './components/AdminPanel/jsx/AdminPanel';

ReactDOM.render(<AdminPanel />, document.querySelector('#root'));
