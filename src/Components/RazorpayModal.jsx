import React from "react";
import toast from "react-hot-toast";

const RazorpayModal = ({
  amount, // Amount in INR (will be converted to paise)
  userDetails, // Object containing user's fullName, email, mobile, etc.
  onPaymentSuccess, // Callback function when payment is successful
  onPaymentError, // Callback function if the payment fails or the script doesn't load
  selectedAddress,
}) => {
  // Utility function to load the Razorpay checkout script dynamically
  const loadScript = (src) => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  // Open Razorpay modal with the provided options
  const openRazorpay = async () => {
    if (!selectedAddress) {
      toast.error("Please Add Address");
      return;
    }
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );
    if (!res) {
      onPaymentError("Razorpay SDK failed to load. Are you online?");
      return;
    }

    // Configure your Razorpay options. Replace "YOUR_RAZORPAY_KEY" with your actual key.
    const options = {
      key: "rzp_test_UDW3KoSzU0IARV", // Your Razorpay API key
      amount: amount * 100, // Amount is in paise
      currency: "INR",
      name: "Your Company Name",
      description: "Order Transaction",
      handler: (response) => {
        // Payment successful callback; pass the response to the parent component
        onPaymentSuccess(response);
      },
      prefill: {
        name: userDetails?.fullName || "",
        email: userDetails?.email || "",
        contact: userDetails?.mobile || "",
      },
      theme: {
        color: "#3399cc",
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };

  return (
    <div>
      <button onClick={openRazorpay} className="primary-btn">
        Pay with Razorpay
      </button>
    </div>
  );
};

export default RazorpayModal;
