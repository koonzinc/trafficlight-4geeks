import React, {useState} from 'react';
import './App.css';

function App() {
  const [light, setLight] = useState(null)

  let redClass = '';
  let yellowClass = '';
  let greenClass = '';

  if (light == 'red'){
    redClass = 'selected';
  } else if (light == 'yellow'){
    yellowClass = 'selected';
  } else if (light == 'green'){
    greenClass = 'selected';
  }
  

  return (
    <div className="App">
      <div className='trafficTop'></div>
      <div className='trafficBody'>
        <div className={'redLight ' + redClass} onClick={() => setLight('red')}></div>
        <div className={'yellowLight ' + yellowClass} onClick={() => setLight('yellow')}></div>
        <div className={'greenLight ' + greenClass} onClick={() => setLight('green')}></div>
      </div>
    </div>
  );
}

export default App;

