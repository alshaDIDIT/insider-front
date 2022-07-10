import styled from "styled-components";

export const CardFace = styled.section`
  width: 20rem;
  height: 23rem;

  @keyframes appear {
    0% {
      opacity: 0;
      transform: rotate3d(0, 1, 0, 0deg);
    }
    50% {
      opacity: 0;
    }
    100% {
      opacity: 1;
      transform: rotate3d(0, 1, 0, 180deg);
    }
  }

  @keyframes rise {
    0% {
      margin-top: 10rem;
    }
    100% {
      margin-top: 2rem;
    }
  }
  
  h1, h2, h3 {
    
  }

  @keyframes descend {
    0% {
      opacity: 0;
      bottom: 2rem;
    }
    60% {
      opacity: 0;
      height: 1rem;
    }
    65% {
      opacity: 1;
      bottom: 0;
    } 72.5% {height: 4.25rem;}
    100% {
      bottom: 0;
      height: 4.25rem;
    }
  }
  
`;
