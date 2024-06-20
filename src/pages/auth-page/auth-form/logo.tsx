import React from 'react';
import { ReactSVG } from 'react-svg';
import logo from '../images/logo.svg';

// const Logo = () => (
//   <div style={{marginBottom: '12px'}}>
//     <ReactSVG src={logo} />
//   </div>
// );

interface LogoProps {
  style?: React.CSSProperties;
}

const Logo: React.FC<LogoProps> = ({ style }) => (
  <div style={style}>
    <ReactSVG src={logo} />
  </div>
);

export default Logo;
