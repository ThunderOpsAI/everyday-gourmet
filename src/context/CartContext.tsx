"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

export interface CartItem {
  id: string;
  name: string;
  category: string;
  price: number;
  priceFormatted: string;
  quantity: string;
  notes?: string;
}

interface CartContextType {
  items: CartItem[];
  addItem: (item: Omit<CartItem, "id">) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, newQty: string) => void;
  clearCart: () => void;
  totalEstimated: number;
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  toastMessage: string | null;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Load from localStorage on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem("everyday_gourmet_cart");
      if (saved) {
        setItems(JSON.parse(saved));
      }
    } catch {
      // Ignore storage errors
    }
  }, []);

  // Save to localStorage
  useEffect(() => {
    try {
      localStorage.setItem("everyday_gourmet_cart", JSON.stringify(items));
    } catch {
      // Ignore
    }
  }, [items]);

  const addItem = (newItem: Omit<CartItem, "id">) => {
    const id = Math.random().toString(36).substring(2, 9);
    setItems((prev) => [...prev, { ...newItem, id }]);
    setToastMessage(`Added "${newItem.name}" to your order`);
    setTimeout(() => {
      setToastMessage(null);
    }, 2800);
  };

  const removeItem = (id: string) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  const updateQuantity = (id: string, newQty: string) => {
    setItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, quantity: newQty } : item))
    );
  };

  const clearCart = () => {
    setItems([]);
  };

  // Estimate total: extract numeric multiplier if possible, else 1
  const totalEstimated = items.reduce((sum, item) => {
    let multiplier = 1;
    const lower = item.quantity.toLowerCase();
    if (lower.includes("500g")) multiplier = 0.5;
    else if (lower.includes("1.5kg")) multiplier = 1.5;
    else if (lower.includes("2kg")) multiplier = 2;
    else if (lower.includes("3kg")) multiplier = 3;
    else if (lower.includes("4kg")) multiplier = 4;
    else if (lower.includes("5kg")) multiplier = 5;
    else if (lower.includes("2 for") || lower.includes("2 pie")) multiplier = 1.5; // promo
    return sum + item.price * multiplier;
  }, 0);

  return (
    <CartContext.Provider
      value={{
        items,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
        totalEstimated,
        isOpen,
        setIsOpen,
        toastMessage,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
