import React from 'react';
import ReactDOM from 'react-dom';

import Keypad from './components/Keypad';
import EyesOnMe from './components/EyesOnMe';

ReactDOM.render(
  <div>
    <Keypad />
    <hr/>
    <EyesOnMe />
  </div>,
  document.getElementById('root')
);
