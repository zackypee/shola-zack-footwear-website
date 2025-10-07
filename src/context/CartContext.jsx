import React, { createContext, useContext, useEffect, useMemo, useState } from "react";

const CartContext = createContext(undefined);

export const useCart = () => {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
};

export const CartProvider = ({ children }) => {
  const [items, setItems] = useState(() => {
    try {
      const raw = localStorage.getItem("cart_items_v1");
      return raw ? JSON.parse(raw) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem("cart_items_v1", JSON.stringify(items));
    } catch {
      // ignore persistence errors
    }
  }, [items]);

  const addToCart = (product) => {
    if (!product || !product.id) return;
    setItems((prev) => {
      const existing = prev.find((p) => p.id === product.id);
      if (existing) {
        return prev.map((p) =>
          p.id === product.id ? { ...p, quantity: p.quantity + (product.quantity || 1) } : p
        );
      }
      const { id, title, price, thumbnail } = product;
      return [...prev, { id, title, price, thumbnail, quantity: product.quantity || 1 }];
    });
  };

  const removeFromCart = (productId) => {
    setItems((prev) => prev.filter((p) => p.id !== productId));
  };

  const updateQuantity = (productId, delta) => {
    setItems((prev) =>
      prev
        .map((p) => (p.id === productId ? { ...p, quantity: Math.max(1, p.quantity + delta) } : p))
        .filter((p) => p.quantity > 0)
    );
  };

  const clearCart = () => setItems([]);

  const totals = useMemo(() => {
    const count = items.reduce((acc, p) => acc + p.quantity, 0);
    const subtotal = items.reduce((acc, p) => acc + p.price * p.quantity, 0);
    return { count, subtotal };
  }, [items]);

  const value = { items, addToCart, removeFromCart, updateQuantity, clearCart, totals };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export default CartContext;


