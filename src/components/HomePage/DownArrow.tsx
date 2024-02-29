import { useEffect, useState } from "react";
import styled from "styled-components";

const ArrowContainer = styled.div`
  height: 115px;
  position: absolute;
  bottom: 0;
  animation: 3s ease fadeIn;

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

const Arrow = styled.div`
  position: relative;
  transform: rotate(45deg) skew(-27deg, -27deg);
  width: 3rem;
  height: 3rem;
  border: none;
  border-right: 5px solid orange;
  border-bottom: 5px solid orange;
  box-sizing: border-box;
  animation: 0.7s ease-out infinite slideDown;
  cursor: pointer;

  &:nth-child(1) {
    top: 0;
  }
  &:nth-child(2) {
    top: -30px;
    animation-delay: 0.15s;
  }
  &:nth-child(3) {
    top: -59px;
    animation-delay: 0.35s;
  }

  @keyframes slideDown {
    0% {
      transform: rotate(45deg) skew(-27deg, -27deg) translate(0, 0);
    }
    50% {
      opacity: 1;
    }
    100% {
      transform: rotate(45deg) skew(-27deg, -27deg) translate(30px, 30px);
      opacity: 0;
    }
  }
`;

function DownArrow() {
  const [showArrow, setShowArrow] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowArrow(true);
    }, 5000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      {showArrow && (
        <ArrowContainer>
          <Arrow />
          <Arrow />
          <Arrow />
        </ArrowContainer>
      )}
    </>
  );
}

export default DownArrow;
