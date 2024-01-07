import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearitem } from "../utils/cartSLice";

const Cart = () => {
  const dispatch = useDispatch();
  const handleClearcart = () => {
    dispatch(clearitem());
  };
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);
  return (
    <div className="text-center m-4 p-4">
      <h1 className="text-2xl font-bold">Cart</h1>
      <button
        onClick={handleClearcart}
        className="p-4 font-bold bg-black text-white rounded-full"
      >
        {cartItems.length === 0 ? (
          <h1>Please add some items to the cart and come back here</h1>
        ) : (
          <>  Clear cart</>
        )}
      
      </button>
      <div className="w-6/12 m-auto">
        <ItemList items={cartItems} />
      </div>
    </div>
  );
};

export default Cart;
