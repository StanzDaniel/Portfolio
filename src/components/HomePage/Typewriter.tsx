import { useEffect, useState } from "react";
import styled from "styled-components";

const Text = styled.span`
  border-right: 0.15rem solid orange;
  white-space: nowrap;
  margin-left: 0.916rem;
  word-spacing: -0.125rem;
  padding-right: 0.5rem;
  animation: blink-caret 1s step-end infinite;

  @keyframes blink-caret {
    from,
    to {
      border-color: transparent;
    }
    50% {
      border-color: orange;
    }
  }
`;

interface TypewriterProps {
  text: string;
  delay: number;
}

function Typewriter({ text, delay }: TypewriterProps) {
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setCurrentText((currentText) => currentText + text[currentIndex]);
        setCurrentIndex((currentIndex) => currentIndex + 1);
      }, delay);

      return () => {
        clearTimeout(timeout);
      };
    }
  }, [currentIndex, delay, text]);

  return <Text>{currentText}</Text>;
}

export default Typewriter;
