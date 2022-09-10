import React, {useState} from 'react';
import './App.css';

function App() {
 const [glow, setGlow] = useState(null)

 let redGlow = ''
 let yellowGlow = ''
 let greenGlow = ''

 if (glow == 'red') {
   redGlow = 'selectedRed'
 } else if (glow == 'yellow') {
   yellowGlow = 'selectedYellow'
 } else if (glow == 'green') {
   greenGlow = 'selectedGreen'
 }

  return (
    <div className="App">
      <div className='trafficTop'></div>
      <div className='trafficBody'>
        <div className={'redLight ' + redGlow} onClick={() => setGlow('red')}></div>
        <div className={'yellowLight ' + yellowGlow} onClick={() => setGlow('yellow')}></div>
        <div className={'greenLight ' + greenGlow} onClick={() => setGlow('green')} ></div>
      </div>
    </div>
  );
}

export default App;

// on click it needs to turn on the selected glow

