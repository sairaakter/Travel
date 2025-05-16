import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  // ✅ Ensure initial state is always an array, not null
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem("cartItems");
    return savedCart ? JSON.parse(savedCart) : [];
  });
  const [wishlistItems, setWishlistItems] = useState(() => {
    const savedCartt = localStorage.getItem("wishlistItems");
    return savedCartt ? JSON.parse(savedCartt) : [];
  });
  const [wishlistItemstwo, setWishlistItemstwo] = useState(() => {
    const savedCartt = localStorage.getItem("wishlistItemstwo");
    return savedCartt ? JSON.parse(savedCartt) : [];
  });
  // ✅ Wishlist-এ অ্যাড করবে
  const WishToCart = (item) => {
    const isItemInWish = wishlistItems.find(
      (cartItem) => cartItem.id === item.id
    );
    if (isItemInWish) {
      return setWishlistItems(wishlistItems);
    } else {
      setWishlistItems([...wishlistItems, { ...item, amount: 1 }]);
    }
  };
  // ✅ Wishlisttwo-এ অ্যাড করবে
  const WishToCarttwo = (item) => {
    const isItemInWish = wishlistItemstwo.find(
      (cartItem) => cartItem.id === item.id
    );
    if (isItemInWish) {
      return setWishlistItemstwo(wishlistItemstwo);
    } else {
      setWishlistItemstwo([...wishlistItemstwo, { ...item, amount: 1 }]);
    }
  };
  // ✅ Remove one wish item
  const removeFromWish = (item) => {
    const isItemInWish = wishlistItems.find(
      (cartItem) => cartItem.id === item.id
    );
    if (isItemInWish.amount === 1) {
      setWishlistItems(
        wishlistItems.filter((cartItem) => cartItem.id !== item.id)
      );
    } else {
      setWishlistItems(
        wishlistItems.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, amount: cartItem.amount - 1 }
            : cartItem
        )
      );
    }
  };
  // ✅ Remove one wish itemtwo
  const removeFromWishtwo = (item) => {
    const isItemInWish = wishlistItemstwo.find(
      (cartItem) => cartItem.id === item.id
    );
    if (isItemInWish.amount === 1) {
      setWishlistItemstwo(
        wishlistItemstwo.filter((cartItem) => cartItem.id !== item.id)
      );
    } else {
      setWishlistItemstwo(
        wishlistItemstwo.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, amount: cartItem.amount - 1 }
            : cartItem
        )
      );
    }
  };
  // ✅ Get cart length
  const cartLength = cartItems.reduce((total, item) => total + item.amount, 0);

  useEffect(() => {
    const cartItems = localStorage.getItem("cartItems");
    if (cartItems) {
      setCartItems(JSON.parse(cartItems));
    }
  }, []);
  // ✅ Save Wish to localStorage **only when wishlistItems change**
  useEffect(() => {
    localStorage.setItem("wishlistItems", JSON.stringify(wishlistItems));
  }, [wishlistItems]);

  useEffect(() => {
    const wishlistItems = localStorage.getItem("wishlistItems");
    if (wishlistItems) {
      setWishlistItems(JSON.parse(wishlistItems));
    }
  }, []);
  // ✅ Save Wish to localStorage **only when wishlistItemstwo change**
  useEffect(() => {
    localStorage.setItem("wishlistItemstwo", JSON.stringify(wishlistItemstwo));
  }, [wishlistItemstwo]);

  useEffect(() => {
    const wishlistItemstwo = localStorage.getItem("wishlistItemstwo");
    if (wishlistItemstwo) {
      setWishlistItemstwo(JSON.parse(wishlistItemstwo));
    }
  }, []);
  return (
    <CartContext.Provider
      value={{
        cartItems,
        cartLength,
        WishToCart,
        WishToCarttwo,
        wishlistItems,
        wishlistItemstwo,
        removeFromWish,
        removeFromWishtwo,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
