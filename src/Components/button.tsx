import React from 'react';
import './button.style.css';

interface CustomButtonProps {
    text: string;
    bindtap?: () => void;
    color?:  "primary" | "secondary" | "danger" | "success";
  }

const CustomButton:React.FC<CustomButtonProps> = ({ text, bindtap, color="primary" }) => {
  return (
    <view className={`button-container ${color}`} bindtap={bindtap}>
      <text className="button-text">{text}</text>
    </view>
  );
};
export default CustomButton;