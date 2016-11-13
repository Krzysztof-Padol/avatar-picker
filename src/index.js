import 'babel-polyfill';

import React from 'react';
import {render} from 'react-dom';
import AppAvatarPicker from './app/containers/AppAvatarPicker';

import './index.scss';

render(
  <AppAvatarPicker/>,
  document.getElementById('root')
);
