import CheckoutStepper from "./CheckoutStepper";
import "./stepper.styles.css";
const CheckoutContainer = () => {
  return (
    <div>
      <h1>Checkout</h1>
      <CheckoutStepper checkoutSteps={checkoutSteps} />
    </div>
  );
};

export default CheckoutContainer;

const checkoutSteps = [
  {
    name: "Customer Info",
    Component: () => <div>Provide your contact details.</div>,
  },
  {
    name: "Shipping Info",
    Component: () => <div>Enter your shipping address.</div>,
  },
  {
    name: "Payment",
    Component: () => <div>Complete payment for your order.</div>,
  },
  {
    name: "Delivered",
    Component: () => <div> Your order has been delivered.</div>,
  },
];
