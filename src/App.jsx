import { useState } from 'react'
import logo from './logo.png'
import icon from './favicon.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h4>"Automating a better tomorrow"</h4>
        <p>
          <button type="button" onClick={() => setCount((count) => count + 1)}>
            count is: {count}
          </button>
        </p>
        <p>
          Run <code> npm init vite@latest</code> in your command line to try ViteJS<img src={icon} className="App-ico" alt="ico" height="20px" width="20px"/>.
        </p>
        <p>
          <a
            className="App-link"
            href="https://blog.adafruit.com/2020/10/16/building-embedded-linux-systems-embedded-linux-ee-jaydcarlson/"
            target="_blank"
            rel="noopener noreferrer"
          >
           About Embedded Systems
          </a>
          {' | '}
          <a
            className="App-link"
            href="mailto:adam@adammathewvaughn.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Contact Us 
          </a>
        </p>
      </header>
    </div>
  )
}

export default App