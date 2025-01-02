import { useForm } from "react-hook-form";

const CheckoutForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className=" bg-black spacebetween">
      <div className="wrapper">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className=" grid gap-8 md:grid-cols-[1.5fr,1fr]"
        >
          {/* Billing Details Section */}
          <div className="space-y-4 bg-[#1a1a1a] rounded-lg  p-6">
            <h2 className="mb-6 text-2xl font-semibold text-white">
              Billing Details
            </h2>
            <div>
              <label className="mb-1 block text-sm text-white">
                Your Name <span className="text-red-500">*</span>
              </label>
              <input
                {...register("name", { required: true })}
                className="w-full rounded border border-gray-700 bg-[#1a1a1a] p-2.5 text-white focus:border-orange-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="mb-1 block text-sm text-white">
                Email Address <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                {...register("email", { required: true })}
                className="w-full rounded border border-gray-700 bg-[#1a1a1a] p-2.5 text-white focus:border-orange-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="mb-1 block text-sm text-white">
                Company Name (Optional)
              </label>
              <input
                {...register("company")}
                className="w-full rounded border border-gray-700 bg-[#1a1a1a] p-2.5 text-white focus:border-orange-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="mb-1 block text-sm text-white">
                Country / Region <span className="text-red-500">*</span>
              </label>
              <select
                {...register("country", { required: true })}
                className="w-full rounded border border-gray-700 bg-[#1a1a1a] p-2.5 text-white focus:border-orange-500 focus:outline-none"
              >
                <option value="USA">United State America</option>
                <option value="UK">United Kingdom</option>
                <option value="CA">Canada</option>
              </select>
            </div>

            <div>
              <label className="mb-1 block text-sm text-white">
                Street Address <span className="text-red-500">*</span>
              </label>
              <input
                {...register("address", { required: true })}
                placeholder="1837 E Homer M Adams Pkwy"
                className="w-full rounded border border-gray-700 bg-[#1a1a1a] p-2.5 text-white focus:border-orange-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="mb-1 block text-sm text-white">
                Town / City <span className="text-red-500">*</span>
              </label>
              <input
                {...register("city", { required: true })}
                className="w-full rounded border border-gray-700 bg-[#1a1a1a] p-2.5 text-white focus:border-orange-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="mb-1 block text-sm text-white">
                State <span className="text-red-500">*</span>
              </label>
              <select
                {...register("state", { required: true })}
                className="w-full rounded border border-gray-700 bg-[#1a1a1a] p-2.5 text-white focus:border-orange-500 focus:outline-none"
              >
                <option value="GA">Georgia</option>
                <option value="OH">Ohio</option>
                <option value="NY">New York</option>
              </select>
            </div>

            <div>
              <label className="mb-1 block text-sm text-white">
                ZIP Code <span className="text-red-500">*</span>
              </label>
              <input
                {...register("zip", { required: true })}
                className="w-full rounded border border-gray-700 bg-[#1a1a1a] p-2.5 text-white focus:border-orange-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="mb-1 block text-sm text-white">
                Phone <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                {...register("phone", { required: true })}
                className="w-full rounded border border-gray-700 bg-[#1a1a1a] p-2.5 text-white focus:border-orange-500 focus:outline-none"
              />
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  {...register("createAccount")}
                  className="h-4 w-4 rounded border-gray-700 bg-[#1a1a1a] text-orange-500"
                />
                <label className="text-sm text-white">Create An Account?</label>
              </div>
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  {...register("differentAddress")}
                  className="h-4 w-4 rounded border-gray-700 bg-[#1a1a1a] text-orange-500"
                />
                <label className="text-sm text-white">
                  Ship To A Different Address?
                </label>
              </div>
            </div>

            <div>
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
            <h2 className="mb-6 text-2xl font-semibold text-white">
              Your Order
            </h2>
            <div className="space-y-4">
              <div className="flex justify-between border-b border-gray-700 pb-2">
                <span className="font-medium text-white">Products</span>
                <span className="font-medium text-white">Subtotal</span>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between text-gray-300">
                  <span>Charging Dock</span>
                  <span>$15.00</span>
                </div>
                <div className="flex justify-between text-gray-300">
                  <span>All-in-One Charger</span>
                  <span>$15.00</span>
                </div>
                <div className="flex justify-between text-gray-300">
                  <span>Charging Station</span>
                  <span>$15.00</span>
                </div>
                <div className="flex justify-between text-gray-300">
                  <span>Magnetic Charger</span>
                  <span>$15.00</span>
                </div>
                <div className="flex justify-between text-gray-300">
                  <span>Wireless Charger</span>
                  <span>$15.00</span>
                </div>
              </div>

              <div className="flex justify-between border-t border-gray-700 pt-2">
                <span className="font-medium text-white">Subtotal</span>
                <span className="font-medium text-white">$75.00</span>
              </div>

              <div className="rounded bg-[#222] p-4">
                <h3 className="mb-2 font-medium text-white">
                  Shipping Address
                </h3>
                <p className="text-sm text-gray-300">
                  281,Layout 1, Thub Square, Hitec City,Hyderabad Telangana
                </p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="payment"
                    value="bank"
                    className="h-4 w-4 border-gray-700 bg-[#1a1a1a] text-orange-500"
                  />
                  <label className="text-sm text-white">
                    Direct Bank Transfer
                  </label>
                </div>
                <div className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="payment"
                    value="check"
                    className="h-4 w-4 border-gray-700 bg-[#1a1a1a] text-orange-500"
                  />
                  <label className="text-sm text-white">Check Payments</label>
                </div>
                <div className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="payment"
                    value="cod"
                    className="h-4 w-4 border-gray-700 bg-[#1a1a1a] text-orange-500"
                  />
                  <label className="text-sm text-white">Cash On Delivery</label>
                </div>
              </div>

              <p className="text-sm text-gray-300">
                Your Personal Data Will Be Used To Process Your Order, Support
                Your Experience Throughout This Website.
              </p>

              <button type="submit" className="primary-btn">
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
