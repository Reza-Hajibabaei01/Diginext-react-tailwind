import { createContext, useContext, useState } from "react";
import { toast } from "react-toastify";

export const CartContext = createContext(null);
export const CartProvider = ({ children }) => {
  const [cartItem, setCartItem] = useState([]);
  const addToCart = (product) => {
    const itemInCart = cartItem.find((item) => item.id === product.id);
    if (itemInCart) {
      // اگر از قبل در سبد خرید موجود باشه تعداد را افزایش بده
      const updataCart = cartItem.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      setCartItem(updataCart);
      toast.success("تعداد محصول افزایش پیدا کرد");
    } else {
      setCartItem([...cartItem, { ...product, quantity: 1 }]);
      toast.success("محصول به سبد خرید اضافه شد");
    }
  };

  const updateQuantity = (cartItem, productId, action) => {
    setCartItem(
      cartItem
        .map((item) => {
          if (item.id === productId) {
            let newUnit = item.quantity;
            if (action === "increase") {
              newUnit = newUnit + 1;
              toast.success("تعداد افزایش پیدا کرد");
            } else if (action === "decrease") {
              newUnit = newUnit - 1;
              toast.success("تعداد کاهش پیدا کرد");
            }
            return newUnit > 0 ? { ...item, quantity: newUnit } : null;
          }
          return item;
        })
        .filter((item) => item != null)
    ); //حذف کامل محصولی که تعدادش به صفر رسیده
  };

  const deleteItem = (productId) => {
    setCartItem(cartItem.filter((item) => item.id !== productId));
    toast.error("محصول از سبد خرید حذف شد");
  };
  return (
    <CartContext.Provider
      value={{ cartItem, setCartItem, addToCart, updateQuantity, deleteItem }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
