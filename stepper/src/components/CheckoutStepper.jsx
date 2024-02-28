import { useEffect, useRef, useState } from "react";

const CheckoutStepper = ({ checkoutSteps = [] }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [margins, setMargins] = useState({
    marginLeft: 0,
    marginRight: 0,
  });

  const stepRef = useRef([]);
  useEffect(() => {
    if (stepRef.current.length)
      setMargins({
        marginLeft: stepRef.current[0].offsetWidth / 2,
        marginRight: stepRef.current[checkoutSteps.length - 1].offsetWidth / 2,
      });
  }, [checkoutSteps.length, stepRef]);

  const handleStep = () => {
    if (currentStep < checkoutSteps.length) setCurrentStep((step) => step + 1);
  };
  const stepClass = (step) =>
    step === currentStep ? "active" : step < currentStep ? "completed" : "";
  const calculateProgress = () => (currentStep / checkoutSteps.length) * 100;
  if (!checkoutSteps.length) return <></>;
  return (
    <div className="container">
      <div className="checkoutStepsContainer">
        {checkoutSteps.map(({ name }, i) => (
          <div
            key={name}
            className="stepContainer"
            ref={(el) => {
              stepRef.current.push(el);
            }}
          >
            <span className={`step ${stepClass(i)}`}>
              {i < currentStep ? <span>&#10003;</span> : i + 1}
            </span>
            <span>{name}</span>
          </div>
        ))}
        <div
          className="progress-bar"
          style={{
            width: `calc(100% - ${margins.marginLeft + margins.marginRight}px)`,
            marginLeft: margins.marginLeft,
            marginRight: margins.marginRight,
          }}
        >
          <div
            className="progress"
            style={{ width: `${calculateProgress()}%` }}
          ></div>
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
