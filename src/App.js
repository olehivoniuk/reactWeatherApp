import './App.css';
import Weather from './Weather';

import { Audio } from  'react-loader-spinner';

function App() {
  return (
    <div className="App">
      <header className="App-header">
     
        
     
        <Audio
    height = "80"
    width = "80"
    radius = "9"
    color = 'green'
    ariaLabel = 'three-dots-loading'     
    wrapperStyle
    wrapperClass
  />

  <Weather />
      </header>
    </div>
  );
}

export default App;
