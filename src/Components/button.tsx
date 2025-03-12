import React from 'react';
import './button.style.css';

interface CustomButtonProps {
  text: string;
  bindtap?: () => void;
  icon?: string;
  color?: 'primary' | 'secondary' | 'danger' | 'success';
}

const CustomButton: React.FC<CustomButtonProps> = ({
  text,
  bindtap,
  color = 'primary',
  icon,
}) => {
  return (
    <view className={`button-container ${color}`} bindtap={bindtap}>
      {icon ? (
        <image className='button-icon'
          src={icon}
          auto-size={true}
          style={{ width: '20px', height: '20px' }}
        />
      ) : null}
      <text className="button-text">{text}</text>
    </view>
  );
};
export default CustomButton;
