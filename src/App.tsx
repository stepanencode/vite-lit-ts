import React, { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import { LearnLit as LearnLitClass } from './learn-lit.ts';
import { createComponent } from '@lit/react';

export const LearnLit = createComponent({
  tagName: 'learn-lit',
  elementClass: LearnLitClass,
  react: React,
});

function App() {
  const [count, setCount] = useState(0);
  const [hasLogo] = useState(true);

  return (
    <div className="App">
      <div>
        <LearnLit
          style={{ fontSize: '12px' }}
          name={`The count is ${count}`}
          hasLogo={hasLogo}
        >
          <img
            slot="logo"
            src={reactLogo}
            className="logo react"
            alt="React logo"
          />
        </LearnLit>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

export default App;
