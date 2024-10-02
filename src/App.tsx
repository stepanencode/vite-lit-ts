import React from 'react';

import './App.css';
import { DemoGreeting as DemoGreetingWC } from './demo-greeting.js';
import { createComponent } from '@lit/react';

export const DemoGreeting = createComponent({
  react: React,
  tagName: 'demo-greeting',
  elementClass: DemoGreetingWC,
});

function App() {
  return (
    <div>
      <DemoGreeting name="React" />
    </div>
  );
}

export default App;
