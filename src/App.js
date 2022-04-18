//import logo from './logo.svg';
import './App.css';
import { BlockProvider } from './Context';
import Data from './Data';
// import { BlockContext } from './Context';
// import {useContext} from 'react'

function App() {
  
  
  return (
    <BlockProvider>
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <Data />
    </div>
    </BlockProvider>
  );
}

export default App;
