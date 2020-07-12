import React from 'react';
import styled from 'styled-components';

const Loader = styled.div`
  position: fixed;
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  z-index: 9999;
  overflow: hidden;
  background: rgba(251, 254, 255, 0.5);

  display: flex;
  justify-content: center;
  align-items: center;

  && .spinner {
    width: 70px;
    text-align: center;
  }

  .spinner > div {
    width: 18px;
    height: 18px;
    background-color: #3182ce;

    border-radius: 100%;
    display: inline-block;
    -webkit-animation: sk-bouncedelay 1.4s infinite ease-in-out both;
    animation: sk-bouncedelay 1.4s infinite ease-in-out both;
  }

  .spinner .bounce1 {
    -webkit-animation-delay: -0.32s;
    animation-delay: -0.32s;
  }

  .spinner .bounce2 {
    -webkit-animation-delay: -0.16s;
    animation-delay: -0.16s;
  }

  @-webkit-keyframes sk-bouncedelay {
    0%,
    80%,
    100% {
      -webkit-transform: scale(0);
    }
    40% {
      -webkit-transform: scale(1);
    }
  }

  @keyframes sk-bouncedelay {
    0%,
    80%,
    100% {
      -webkit-transform: scale(0);
      transform: scale(0);
    }
    40% {
      -webkit-transform: scale(1);
      transform: scale(1);
    }
  }
`;

function Loading() {
  return (
    <Loader>
      <div className="spinner">
        <div className="bounce1" />
        <div className="bounce2" />
        <div className="bounce3" />
      </div>
    </Loader>
  );
}

export default Loading;
