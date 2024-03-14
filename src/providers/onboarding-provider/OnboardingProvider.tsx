import React, {
  Dispatch,
  ReactNode,
  createContext,
  useState,
} from "react";

interface OnboardingProviderProps {
  children: ReactNode;
}

export interface OnboardingContextProps {
  handleIncrement: () => void;
  handleDecrement: () => void;
  current: number;
  setCurrent: Dispatch<number>;
}

export const OnboardingContext = createContext<OnboardingContextProps | null>(
  null
);

const OnboardingProvider: React.FC<OnboardingProviderProps> = ({
  children,
}) => {
  const [current, setCurrent] = useState<number>(1);

  const handleIncrement = () => {
    if (current < 4) {
      setCurrent((c) => c + 1);
    }
  };

  const handleDecrement = () => {
    if (current > 1) {
      setCurrent((c) => c - 1);
    }
  };

  const value: OnboardingContextProps = {
    handleIncrement,
    handleDecrement,
    current,
    setCurrent,
  };

  return (
    <OnboardingContext.Provider value={value}>
      {children}
    </OnboardingContext.Provider>
  );
};

export default OnboardingProvider;
