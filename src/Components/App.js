import React, {useState} from 'react';
import './App.css';

import {CirclePicker} from 'react-color';
import Tippy from '@tippyjs/react';
import 'tippy.js/animations/perspective.css';
import 'tippy.js/themes/light.css'



function App() {
  const [selectedColor, setSelectedColor] = useState('rebeccapurple');
  return (
    <div className="App">
      <header className="App-header" style={{ backgroundColor: selectedColor}}>
        <h1 className="header-text">Hello World</h1>
      </header>
      <div className="area" style={{ backgroundColor: selectedColor}}>

      </div>
    <Tippy theme="nice" trigger="click" animation={'perspective'} interactive={true} placement={'bottom'} content={
      <CirclePicker
        className="colorBackground"
        color={selectedColor}
        onChangeComplete={color => setSelectedColor(color.hex)}
        
      />
    }>
      <button  className='ref-button'>Change Header Box Color</button>

    </Tippy>
    </div>
  );
}

export default App;
