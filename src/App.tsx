import { useState } from '@lynx-js/react';
import './App.css';
import CustomButton from './Components/button.jsx';

export function App() {
  const [count, setCount] = useState(0);
  function increment() {
    setCount(prevCount => prevCount + 1);
  }
  
  function decrement() {
    setCount(prevCount => prevCount - 1);
  }
  
  return (
    <view className="container">
      <CustomButton
        text="Increment"
        bindtap={increment}
        color='secondary'
      />
      <CustomButton
        text="Decrement"
        bindtap={decrement}
        color='success'
      />
      <text className="count-text">Count: {count}</text>

    </view>
  );
}
