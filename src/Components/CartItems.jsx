import { useSelector, useDispatch } from "react-redux";
import { FaRegTrashCan } from "react-icons/fa6";
import { removeItem, updateQuantity } from "../store/cartSlice";
import { Link, useNavigate } from "react-router-dom";
import { checkAuth } from "../API/authAPI";
import useCartInitialization from "../Hooks/getUserCart";
import { removeCartItemAPI } from "../API/cartAPI";

const CartItems = () => {
  useCartInitialization();

  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleUpdateQuantity = (id, newQuantity) => {
    dispatch(updateQuantity({ id, quantity: newQuantity }));
  };

  const handleRemoveItem = (id) => {
    const response = removeCartItemAPI(id);
    console.log(response, "ataldfasdf");
    dispatch(removeItem(id));
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

  console.log(cartItems, "asdfasdfas");
  return (
    <div className="">
      <div className="bg-black  text-white spacebetween px-4">
        {cartItems.length ? (
          <div className=" wrapper bg-headerbgcolor rounded-lg">
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
                  className="sm:grid flex flex-col  sm:grid-cols-12 gap-4 py-4 items-center "
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
                    <input
                      type="number"
                      min="1"
                      value={item?.quantity}
                      onChange={(e) =>
                        handleUpdateQuantity(item.id, e.target.value)
                      }
                      className="w-16 px-2 py-1 text-center text-black rounded"
                    />
                  </div>
                  <div className="col-span-1 text-right">
                    <h1 className="sm:hidden flex">Total</h1>₹
                    {(item.price * item.quantity).toFixed(2)}
                  </div>
                  <div className="col-span-1 flex justify-end items-start">
                    <button
                      onClick={() => handleRemoveItem(item.id)}
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
          <div className="wrapper flex flex-col items-center justify-center min-h-[70vh]  text-center p-4">
            {/* <img
              src="https://via.placeholder.com/300"
              alt="Empty Cart"
              className="w-60 h-60 mb-4"
            /> */}
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
