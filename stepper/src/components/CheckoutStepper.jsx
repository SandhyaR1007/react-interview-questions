import { useState } from "react";

const CheckoutStepper = ({ checkoutSteps }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const handleStep = () => {
    if (currentStep < checkoutSteps.length) setCurrentStep((step) => step + 1);
  };
  const stepClass = (step) =>
    step === currentStep ? "active" : step < currentStep ? "completed" : "";
  return (
    <div className="container">
      <div className="checkoutStepsContainer">
        {checkoutSteps.map(({ name }, i) => (
          <div key={i} className="stepContainer">
            <span className={`step ${stepClass(i)}`}>
              {i < currentStep ? <span>&#10003;</span> : i + 1}
            </span>
            <span>{name}</span>
          </div>
        ))}
        <div className="progress-bar">
          <div className="progress"></div>
        </div>
      </div>

      <p>
        {currentStep === checkoutSteps.length
          ? checkoutSteps[currentStep - 1].Component()
          : checkoutSteps[currentStep].Component()}
      </p>
      <button onClick={handleStep}>Next</button>
    </div>
  );
};

export default CheckoutStepper;
