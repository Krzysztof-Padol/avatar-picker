import 'babel-polyfill';

import React from 'react';
import {render} from 'react-dom';
import App from './app/containers/App';

import './index.scss';

render(
  <App/>,
  document.getElementById('root')
);
