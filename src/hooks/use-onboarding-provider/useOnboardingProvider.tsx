
import { useForm, FormProvider, useFormContext } from "react-hook-form";
import { OnboardingContext } from "../../providers/onboarding-provider/OnboardingProvider";
import { useContext } from "react";

export const useOnboardingProvider = () => {
  const context = useContext(OnboardingContext);

  const methods = useFormContext();

  return { context };
};
