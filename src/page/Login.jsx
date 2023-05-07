import React from 'react'
import styled from 'styled-components';
import Header from '../components/Header';
import bk from '../assets/image/bk.jpeg'

export default function Login() {
  return (
    <Wrap>
        <Header/>
    </Wrap>
  )
}

const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  position: relative;
  &::before {
    content: "";
    position: absolute;
    width: 120%;
    height: 120%;
    top: 50%;
    left: 50%;
    z-index: -1;
    background-image: url(${bk});
    transform: translate(-50%, -50%) rotate(-3deg);
    background-repeat: repeat-x;
    background-size: contain;
  }
`;