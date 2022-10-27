import styled from "styled-components";


export const HeartAnimation = styled.div`
  width: 100px;
  height: 100px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background: url("https://cssanimation.rocks/images/posts/steps/heart.png") no-repeat;
  cursor: pointer;
  animation: fave-heart 1s steps(28);

  background-position: -2800px 0;
  transition: background 1s steps(28);

  @keyframes fave-heart {
    0% {
      background-position: 0 0;
    }
    100% {
      background-position: -2800px 0;
    }
  }
`

export const DeleteMenu = () => {

}