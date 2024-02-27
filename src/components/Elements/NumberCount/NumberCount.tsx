import { useEffect, useState } from "react";

type NumberCountProps = {
  value: number;
  duration?: number;
  initialValue?: number;
  resetValue?: boolean;
};

export const NumberCount = ({
  value = 0,
  duration = 3000,
  initialValue = 0,
  resetValue = false,
}: NumberCountProps) => {
  const [currentNumber, setCurrentNumber] = useState(initialValue);

  useEffect(() => {
    const handleInterval = setInterval(function () {
      if (currentNumber >= value) {
        setCurrentNumber(value);
      } else {
        setCurrentNumber((prev) => prev + 1);
      }
    }, duration / value);
    return () => {
      clearInterval(handleInterval);
    };
  }, [value, currentNumber, duration]);

  useEffect(() => {
    if (resetValue) {
      setCurrentNumber(initialValue);
    }
  }, [resetValue, initialValue]);

  return <span>{currentNumber}</span>;
};
