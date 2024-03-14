import React, { ReactNode, createContext, useContext } from "react";
import { useForm, FormProvider, useFormContext } from "react-hook-form";

interface OnboardingProviderProps {
  children: ReactNode;
}
interface OnboardingContextProps {}
export const OnboardingContext = createContext<OnboardingContextProps | null>(
  null
);

const OnboardingProvider: React.FC<OnboardingProviderProps> = ({
  children,
}) => {
  const value = {
    test: " hello",
  };

  return (
    <OnboardingContext.Provider value={value}>
      {children}
    </OnboardingContext.Provider>
  );
};

export default OnboardingProvider;
