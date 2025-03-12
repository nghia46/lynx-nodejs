import { useState } from '@lynx-js/react';
import './App.css';
import CustomButton from './Components/button.jsx';
import homeLogo from './assets/home.png';
import subtract from './assets/subtract-minus-remove.256x34.png'
import add from './assets/plus.256x256.png'

export function App() {
  const [count, setCount] = useState(0);
  function increment() {
    setCount((prevCount) => prevCount + 1);
  }

  function decrement() {
    setCount((prevCount) => prevCount - 1);
  }

  return (
    <view>
      <view className="container">
        <CustomButton text="Increment" bindtap={increment} color="secondary" icon={add} />
        <CustomButton text="Decrement" bindtap={decrement} color="success" icon={subtract} />
        <text className="count-text">Count: {count}</text>
        <image bindtap={increment} src={homeLogo} auto-size={true} style={{width:"100px" , height:"100px"}}/>
      </view>
      <scroll-view scroll-orientation="horizontal" style={{ height: '400px' }}>
        <image src="https://placehold.co/600x400/png" auto-size={true} />

        <image src="https://placehold.co/600x400/png" auto-size={true} />
        <image src="https://placehold.co/600x400/png" auto-size={true} />
        <image src="https://placehold.co/600x400/png" auto-size={true} />
        <image src="https://placehold.co/600x400/png" auto-size={true} />
        <image src="https://placehold.co/600x400/png" auto-size={true} />
        <image src="https://placehold.co/600x400/png" auto-size={true} />
        <image src="https://placehold.co/600x400/png" auto-size={true} />
        <image src="https://placehold.co/600x400/png" auto-size={true} />
        <image src="https://placehold.co/600x400/png" auto-size={true} />
        <image src="https://placehold.co/600x400/png" auto-size={true} />
        <image src="https://placehold.co/600x400/png" auto-size={true} />
        <image src="https://placehold.co/600x400/png" auto-size={true} />
        <image src="https://placehold.co/600x400/png" auto-size={true} />
        <image src="https://placehold.co/600x400/png" auto-size={true} />
        <image src="https://placehold.co/600x400/png" auto-size={true} />
        <image src="https://placehold.co/600x400/png" auto-size={true} />
        <image src="https://placehold.co/600x400/png" auto-size={true} />
        <image src="https://placehold.co/600x400/png" auto-size={true} />
        <image src="https://placehold.co/600x400/png" auto-size={true} />
      </scroll-view>
    </view>
  );
}
