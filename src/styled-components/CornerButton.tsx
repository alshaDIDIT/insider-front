import styled from "styled-components";

export const CornerButton = styled.div`
  position: absolute;
  bottom: .0001rem;
  width: 19.9rem;
  height: 6rem;
  border: .02rem dotted #838383;
  background-color: #608294;

  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  border-bottom-left-radius: 1.5rem;
  border-bottom-right-radius: 1.5rem;

  h4 {
    color: #efefef;
    font-size: 1rem;
    font-weight: 400;
    letter-spacing: .125rem;
    
    text-shadow: .08rem .08rem .02rem rgba(0,0,0,.5);
  }

  &:hover {
    animation: button-hov .25s linear forwards;

    h4 {
      animation: bigger .125s linear forwards;
    }

    @keyframes button-hov {
      0% {
        background-color: #969696;
      }
      100% {
        background-color: #5b5b5b;
      }
    }

    @keyframes bigger {
      0% {
        font-weight: 300;
      }
      100% {
        font-weight: 800;
        font-size: 1.25rem;
        letter-spacing: .0625rem;
      }
    }
  }

`;
