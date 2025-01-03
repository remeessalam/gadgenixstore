import { useState } from "react";
import homeproduct2 from "../assets/images/homeproducts/homeproduct2.png";
const products = [
  {
    id: 1,
    name: "Magnetic Charger",
    price: 12.99,
    quantity: 2,
    image: homeproduct2,
  },
  {
    id: 2,
    name: "Wireless Charging",
    price: 50.0,
    quantity: 1,
    image: homeproduct2,
  },
  {
    id: 3,
    name: "Charging Dock",
    price: 45.99,
    quantity: 1,
    image: homeproduct2,
  },
  {
    id: 4,
    name: "Charging Mat",
    price: 99.99,
    quantity: 2,
    image: homeproduct2,
  },
  {
    id: 5,
    name: "Wireless Charger",
    price: 25.98,
    quantity: 1,
    image: homeproduct2,
  },
];

const CartItems = () => {
  const [cartItems, setCartItems] = useState(products);

  const updateQuantity = (id, newQuantity) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id ? { ...item, quantity: parseInt(newQuantity) } : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const calculateTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  return (
    <div className="">
      <div className="bg-black  text-white spacebetween px-4">
        <div className=" wrapper bg-headerbgcolor rounded-lg">
          <div className="grid grid-cols-12 gap-4 py-4 text-sm font-medium uppercase">
            <div className="col-span-6 md:col-span-6">PRODUCT</div>
            <div className="col-span-2 text-right">PRICE</div>
            <div className="col-span-2 text-center">QUANTITY</div>
            <div className="col-span-2 text-center">TOTAL</div>
          </div>

          <div className="divide-y divide-gray-700">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="grid grid-cols-12 gap-4 py-4 items-center"
              >
                <div className="col-span-6 md:col-span-6 flex items-center gap-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 object-cover rounded"
                  />
                  <span className="font-medium">{item.name}</span>
                </div>
                <div className="col-span-2 text-right">
                  ${item.price.toFixed(2)}
                </div>
                <div className="col-span-2 flex justify-center">
                  <input
                    type="number"
                    min="1"
                    value={item.quantity}
                    onChange={(e) => updateQuantity(item.id, e.target.value)}
                    className="w-16 px-2 py-1 text-center text-black rounded"
                  />
                </div>
                <div className="col-span-1 text-right">
                  ${(item.price * item.quantity).toFixed(2)}
                </div>
                <div className="col-span-1 flex justify-end">
                  <button
                    onClick={() => removeItem(item.id)}
                    className="text-gray-400 hover:text-white"
                  >
                    ✕
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-end py-4 border-t border-gray-700 mt-4">
            <div className="text-right">
              <span className="uppercase font-medium">Cart Total = </span>
              <span className="text-xl font-bold">
                ${calculateTotal().toFixed(2)}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
