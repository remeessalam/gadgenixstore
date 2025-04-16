import toast from "react-hot-toast";

const RazorpayModal = ({
  //eslint-disable-next-line
  amount,
  //eslint-disable-next-line
  userDetails,
  //eslint-disable-next-line
  onPaymentSuccess,
  //eslint-disable-next-line
  onPaymentError,
  //eslint-disable-next-line
  selectedAddress,
}) => {
  const loadScript = (src) => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

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

    // key: "rzp_test_UDW3KoSzU0IARV", // Your Razorpay API key
    const options = {
      key: "rzp_live_8ptSVA4ZRmOESw", // Your Razorpay API key
      amount: amount * 100,
      currency: "INR",
      name: "Your Company Name",
      description: "Order Transaction",
      handler: (response) => {
        onPaymentSuccess(response);
      },
      prefill: {
        //eslint-disable-next-line
        name: userDetails?.fullName || "",
        //eslint-disable-next-line
        email: userDetails?.email || "",
        //eslint-disable-next-line
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
