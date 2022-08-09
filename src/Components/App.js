import React, {useState} from 'react';
import './App.css';

import {BlockPicker} from 'react-color';
import Tippy from '@tippyjs/react';
import "tippy.js/animations/perspective.css";



function App() {
  const [selectedColor, setSelectedColor] = useState('#ccc');
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="header-text">Hello World</h1>
      </header>
      <div className="area" style={{ backgroundColor: selectedColor}}>

      </div>

    <Tippy trigger={"click"} interactive={true} animation={"perspective"} placement={'bottom'} content={
      <BlockPicker
        color={selectedColor}
        onChangeComplete={color => setSelectedColor(color.hex)}
      />
    }>
      <button className='ref-button'>Click to Change Box Color</button>
    </Tippy>
    </div>
  );
}

export default App;
