import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Header from '../components/Header'
import { useLocation, useNavigate } from 'react-router-dom'
import bk from "../assets/image/bk.jpeg";
import p from "../assets/image/p.png";
import Op from "../assets/image/op.png";

export default function Pop() {
const navigate = useNavigate();
const location = useLocation();

useEffect(() => {
  if(location.state == null){
    navigate("/");
  }
}, [navigate, location]);

const [imgState, setImgState] = useState(true);
const [count, setCount] = useState(0);

const start = () => {
  setCount(count + 1);
  setImgState(!imgState);
};
const end = () => {
  setImgState(true);
};

  return (
    <Wrap>
      <Header count={count} />
      <Count>{count}</Count>
      <CatImg
      src={imgState ? p : Op}
      alt="P"
      onTouchStart={start}
      onTouchEnd={end}
      />
    </Wrap>
  )
}

const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #fff;
  position: relative;
  &::before{
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
`

const CatImg = styled.img`
  width: 300px;
`

const Count = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  -webkit-text-stroke: 1px #000;
`
