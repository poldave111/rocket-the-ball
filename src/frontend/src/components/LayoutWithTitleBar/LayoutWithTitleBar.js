import React from 'react';
import TitleBar from '../TitleBar/TitleBar';


const LayoutWithTitleBar = (props) => {
console.log(props);
console.log(props.children);
  return (
    <>
        <TitleBar />
        {props.children}
    </>
  );
};


export default LayoutWithTitleBar;