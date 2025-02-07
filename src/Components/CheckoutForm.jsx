import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
// import { setUserDetails } from "../store/userSlice";
import { useNavigate } from "react-router-dom";
import { removeItem } from "../store/cartSlice";
import { useEffect, useState } from "react";
import useCartInitialization from "../Hooks/getUserCart";
import toast from "react-hot-toast";
import { addAddress } from "../API/authAPI";

const CheckoutForm = () => {
  const { cartData, loading, error } = useCartInitialization();
  const [cartItems, setCartItems] = useState(cartData?.products || []);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  // const cartItems = useSelector((state) => state.cart.items);
  useEffect(() => {
    if (cartData?.products) {
      setCartItems(cartData.products);
      // setUserId(cartData?.userId);
    }
  }, [cartData]);

  // if (cartItems?.length === 0) navigate("/products");
  const onSubmit = (data) => {
    console.log(data, "asdfsdfasdfasdf");
    // dispatch(setUserDetails(data));
    console.log("Form Submitted:", data);
    const response = addAddress(data);
    if (response.success) {
      console.log("Order Response:", response.data);
      alert("address added successfully");
      reset(); // Reset the form after submission
    } else {
      alert("Failed to place order. Please try again.");
    }
  };
  console.log(cartItems);
  if (loading) return <p>Loading cart...</p>;
  if (error) {
    toast.error(error);
  }
  return (
    <div className=" bg-black spacebetween">
      <div className="max-w-[50rem] mx-auto px-4 ">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="grid gap-8 md:grid-cols-1 pt-20"
        >
          {/* Billing Details Section */}
          <div className="space-y-4 bg-[#1a1a1a] rounded-lg p-6">
            <h2
              data-aos="fade-up"
              className="mb-6 text-2xl font-semibold text-white"
            >
              Billing Details
            </h2>

            {[
              { label: "Your Name", name: "name", type: "text" },
              { label: "Email Address", name: "email", type: "email" },
              { label: "Country / Region", name: "country", type: "text" }, // Changed to input field
              {
                label: "Street Address",
                name: "street",
                type: "text",
                placeholder: "1837 E Homer M Adams Pkwy",
              },
              { label: "Town / City", name: "city", type: "text" },
              { label: "State", name: "state", type: "text" }, // Changed to input field
              { label: "ZIP Code", name: "zip", type: "text" },
              { label: "Phone", name: "phone", type: "tel" },
            ].map((field) => (
              <div key={field.name} data-aos="fade-up">
                <label className="mb-1 block text-sm text-white">
                  {field.label} <span className="text-red-500">*</span>
                </label>
                <input
                  type={field.type}
                  {...register(field.name, {
                    required: `${field.label} is required`,
                  })}
                  placeholder={field.placeholder || ""}
                  className="w-full rounded border border-gray-700 bg-[#1a1a1a] p-2.5 text-white focus:border-orange-500 focus:outline-none"
                />
                {errors[field.name] && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors[field.name].message}
                  </p>
                )}
              </div>
            ))}

            {/* Order Notes */}
            <div data-aos="fade-up">
              <label className="mb-1 block text-sm text-white">
                Order Notes (Optional)
              </label>
              <textarea
                {...register("notes")}
                placeholder="Note About Your Order ..."
                rows={4}
                className="w-full rounded border border-gray-700 bg-[#1a1a1a] p-2.5 text-white focus:border-orange-500 focus:outline-none"
              />
            </div>
          </div>

          {/* Order Summary Section */}
          <div className="rounded-lg bg-[#1a1a1a] p-6">
            <h2
              data-aos="fade-up"
              className="mb-6 text-2xl font-semibold text-white"
            >
              Your Order
            </h2>
            <div data-aos="fade-up" className="space-y-4">
              <div className="flex justify-between border-b border-gray-700 pb-2">
                <span className="font-medium text-white">Products</span>
                <span className="font-medium text-white">Subtotal</span>
              </div>

              <div data-aos="fade-up" className="space-y-2">
                {cartItems.map((obj) => (
                  <div
                    key={obj?.id}
                    className="flex justify-between text-gray-300"
                  >
                    <span>{obj.name}</span>
                    <span>₹{obj.price}</span>
                  </div>
                ))}
              </div>

              <div
                data-aos="fade-up"
                className="flex justify-between border-t border-gray-700 pt-2"
              >
                <span className="font-medium text-white">Total</span>
                <span className="font-medium text-white">
                  ₹
                  {cartItems.reduce(
                    (total, item) => total + item.price * item.quantity,
                    0
                  )}
                </span>
              </div>

              <div data-aos="fade-up" className="rounded bg-[#222] p-4">
                <h3 className="mb-2 font-medium text-white">
                  Shipping Address
                </h3>
                <p className="text-sm text-gray-300">
                  281, Layout 1, Thub Square, Hitec City, Hyderabad Telangana
                </p>
              </div>

              <p data-aos="fade-up" className="text-sm text-gray-300">
                Your Personal Data Will Be Used To Process Your Order, Support
                Your Experience Throughout This Website.
              </p>

              <button data-aos="fade-up" type="submit" className="primary-btn">
                Place Order
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CheckoutForm;
