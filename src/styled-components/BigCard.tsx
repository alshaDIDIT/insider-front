import styled from "styled-components";
import {CornerButton} from "./CornerButton";

export const BigCard = styled.div`
  position: relative;
  width: 20rem;
  height: 25rem;
  background-color: #eee;
  border-radius: 1.5rem;

  margin: 1rem;
  box-shadow: .1rem .1rem .25rem rgba(0, 0, 0, .2);

  h1 {
    font-size: 3rem;
    color: #608294;
    text-align: center;
    font-weight: 800;
    margin-bottom: 0;
  }

  h2 {
    font-size: 2rem;
    color: #b2b2b2;
    margin: 1.5rem 1.5rem 0 1.5rem;
    opacity: .5;
  }

  h3 {
    color: #91aab7;
    margin: 1rem 1.5rem 1rem 1.5rem;
    text-align: center;
    font-weight: 500;
    font-size: .8rem;
    text-shadow: .008rem .08rem .001rem rgba(96, 130, 148, 0.3);
  }
  
  &:hover {
    h2 {
      animation: clearer .25s linear forwards;
    }
    
    @keyframes clearer {
      0% {opacity: 0.5} 100% {opacity: 1;}
    }
    
    @keyframes turn {
      0% {
        transform: rotate3d(0, 1, 0, 0deg);
      } 
      100% {
        transform: rotate3d(0, 1, 0, 180deg) scale(2);
        position: fixed;
        z-index: 999;
      }
    }

    @keyframes around {
      0% {
        transform: rotate3d(0, 1, 0, 180deg) scale(2);
      }
      100% {
        transform: rotate3d(0, 1, 0, 0deg) scale(1);
        position: relative;
      }
    }
    
    
}
`;
