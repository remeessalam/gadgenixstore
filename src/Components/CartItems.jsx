import { FaRegTrashCan } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import { checkAuth } from "../API/authAPI";
import useCartInitialization from "../Hooks/getUserCart";
import { removeCartItemAPI } from "../API/cartAPI";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const CartItems = () => {
  const { cartData, loading, error } = useCartInitialization();
  const [cartItems, setCartItems] = useState(cartData?.products || []);
  const [userID, setUserId] = useState(cartData?.userId || "");
  const navigate = useNavigate();

  // Update local state when cartData changes
  useEffect(() => {
    if (cartData?.products) {
      setCartItems(cartData.products);
      setUserId(cartData?.userId);
    }
  }, [cartData]);

  const handleRemoveItem = async (id) => {
    try {
      const response = await removeCartItemAPI(id, userID);
      if (response?.success) {
        setCartItems((prevItems) =>
          prevItems.filter((item) => item._id !== id)
        );
      }
    } catch (error) {
      console.error("Error removing item:", error);
    }
  };

  const handleUpdateQuantity = (id, newQuantity) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const calculateTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  const readyToCheckOut = () => {
    if (checkAuth()) {
      navigate("/checkout");
    } else {
      navigate("/login", { state: { from: "/checkout" } });
    }
  };

  if (loading) return <p>Loading cart...</p>;
  if (error) {
    toast.error(error);
  }
  return (
    <div className="">
      <div className="bg-black text-white spacebetween px-4">
        {cartItems.length ? (
          <div className="wrapper bg-headerbgcolor rounded-lg">
            <div className="grid grid-cols-12 gap-4 py-4 text-sm font-medium uppercase">
              <div className="col-span-6 md:col-span-6">PRODUCT</div>
              <div className="col-span-2 text-right sm:grid hidden">PRICE</div>
              <div className="col-span-2 text-center sm:grid hidden">
                QUANTITY
              </div>
              <div className="col-span-2 text-center sm:grid hidden">TOTAL</div>
            </div>

            <div className="divide-y divide-gray-700">
              {cartItems.map((item) => (
                <div
                  data-aos="fade-up"
                  key={item.id}
                  className="sm:grid flex flex-col sm:grid-cols-12 gap-4 py-4 items-center "
                >
                  <div className="col-span-6 md:col-span-6 flex sm:flex-row flex-col items-center gap-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 object-cover rounded"
                    />
                    <span className="font-medium">{item.name},</span>
                    <h1
                      className={`p-2 rounded-lg ml-2 !mt-1 ${
                        item.color === "white"
                          ? `bg-white text-black `
                          : `bg-black text-white `
                      }`}
                    >
                      {item?.color && item?.color}
                    </h1>
                  </div>
                  <div className="col-span-2 text-right">
                    <h1 className="sm:hidden flex">Price</h1>₹
                    <span className="line-through">
                      {item?.crossprice?.toFixed(2)}
                    </span>{" "}
                    {item.price.toFixed(2)}
                  </div>
                  <h1 className="sm:hidden flex">Quantity</h1>
                  <div className="col-span-2 flex justify-center">
                    <div className="bg-white px-4 text-center rounded-lg py-1 text-black">
                      {item?.quantity}
                    </div>
                    {/* <input
                      type="number"
                      min="1"
                      value={item?.quantity}
                      disabled
                      // onChange={(e) =>
                      //   handleUpdateQuantity(item.id, Number(e.target.value))
                      // }
                      className="w-16 px-2 py-1 text-center text-black rounded"
                    /> */}
                  </div>
                  <div className="col-span-1 text-right">
                    <h1 className="sm:hidden flex">Total</h1>₹
                    {(item.price * item.quantity).toFixed(2)}
                  </div>
                  <div className="col-span-1 flex justify-end items-start">
                    <button
                      onClick={() => handleRemoveItem(item._id)}
                      className="text-gray-400 hover:text-white"
                    >
                      <FaRegTrashCan />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div
              data-aos="fade-up"
              className="flex justify-end py-4 items-center gap-5 border-t border-gray-700 mt-4"
            >
              <div className="text-right">
                <span className="uppercase font-medium">Cart Total = </span>
                <span className="text-xl font-bold">
                  ₹{calculateTotal().toFixed(2)}
                </span>
              </div>
              <div>
                <button
                  onClick={readyToCheckOut}
                  className="mt-auto bg-transparent border border-orange-500 text-orange-500 py-2 px-4 rounded-lg hover:bg-orange-500 hover:text-white transition-colors flex items-center justify-center gap-2"
                >
                  Ready To Checkout
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="wrapper flex flex-col items-center justify-center min-h-[70vh] text-center p-4">
            <h2 className="text-2xl font-bold text-gray-100 mb-2">
              Your Cart is Empty
            </h2>
            <p className="text-white mb-4">
              Looks like you haven’t added anything to your cart yet. Start
              exploring and find something you love!
            </p>
            <Link to={"/products"} className="primary-btn">
              Shop Now
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartItems;
