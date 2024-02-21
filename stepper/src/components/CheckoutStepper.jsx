import { useState } from "react";

const CheckoutStepper = ({ checkoutSteps }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const handleStep = () => {
    if (currentStep < checkoutSteps.length - 1)
      setCurrentStep((step) => step + 1);
  };
  return (
    <div className="">
      <div className="checkoutStepsContainer">
        {checkoutSteps.map(({ name }, i) => (
          <div key={i}>
            <span className="circle"></span>
            <span>{name}</span>
          </div>
        ))}
      </div>
      <p>{checkoutSteps[currentStep].Component()}</p>
      <button onClick={handleStep}>Next</button>
    </div>
  );
};

export default CheckoutStepper;
