import React from 'react';
import styled, { keyframes } from 'styled-components';
import useLockBodyScroll from '../Hooks/useLockBodyScroll';

const LoadingModal = () => {
  return (
    <>
      <HideScreenLoading />
      <LoadingBox />
      {useLockBodyScroll()}
    </>
  );
};
const HideScreenLoading = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1000;
  opacity: 1;
`;

const loadingAnimation = keyframes`

     0% {
       width: 0px;
    }
     70% {
       width: 100%;
       opacity: 1;
     }
     90% {
             opacity: 0;
       width: 100%;
     }

     100% {
       opacity: 0;
              width: 0px;
     }
 `;

const LoadingBox = styled.div`
  position: absolute;
  width: 150px;
  height: 200px;
  left: 50%;
  top: 50%;
  z-index: 1000;

  &::after {
    content: 'LOADING ...';
    color: #fff;
    font-family: Lato, 'Helvetica Neue';
    font-weight: 200;
    font-size: 16px;
    position: absolute;
    width: 100%;
    height: 20px;
    line-height: 20px;
    left: 0;
    top: 0;
    background-color: #e74c3c;
    z-index: 1;
  }

  &::before {
    content: '';
    position: absolute;
    background-color: #fff;
    top: -5px;
    left: 0px;
    height: 30px;
    width: 0px;
    z-index: 0;
    opacity: 1;
    transform-origin: 100% 0%;
    animation: ${loadingAnimation} 10s ease-in-out infinite;
  }
`;

export default LoadingModal;
