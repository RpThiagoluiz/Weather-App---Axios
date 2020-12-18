import React from "react";
import styled, { keyframes } from "styled-components";

//Styled-Componentes Loading

const BounceAnimation = keyframes`
  0% { margin-bottom: 0 ;}
  25% { margin-bottom: 25px; }
  50% { margin-bottom: 50px ;}
  75% { margin-bottom: 25px;}
  100% { margin-bottom: 0 ;}
`
const DotWrapper = styled.div`
  display: flex;
  align-items: flex-end;
`
const Dot = styled.div`
  background-color: white;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  margin: 0 50px;
  margin-top: 150px;
  
  /* Animation */
  animation: ${BounceAnimation} 0.7s linear infinite;
  animation-delay: ${props => props.delay};
`

const LoadingDots = _ => (
  <DotWrapper>
    <Dot delay="0s" />
    <Dot delay=".1s" />
    <Dot delay=".2s" />
  </DotWrapper>
)

export default LoadingDots