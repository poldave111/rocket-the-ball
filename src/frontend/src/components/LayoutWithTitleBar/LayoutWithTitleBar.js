import React from 'react';
import TitleBar from '../TitleBar/TitleBar';
import { Outlet } from 'react-router-dom';

const LayoutWithTitleBar = (props) => {
console.log(props);
console.log(props.children);
  return (
    <>
        <TitleBar />

        <Outlet /> 
    </>
  );
};


export default LayoutWithTitleBar;