import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';
import type { RootState } from './store';  

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string[];
}

interface CartState {
  items: CartItem[];
}

const initialState: CartState = {
  items: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    // Adding a product with a unique ID
    addToCart: (state, action: PayloadAction<CartItem>) => {
      const item = state.items.find((item) => item.id === action.payload.id);

      // If the item exists, just update the quantity
      if (item) {
        item.quantity += action.payload.quantity;
      } else {
        // If the item does not exist, add a new item with the provided ID or generate one
        const newItem = {
          ...action.payload,
          id: action.payload.id || uuidv4(), // Use the provided ID if available, otherwise generate a new one
        };
        state.items.push(newItem);
      }
    },

    // Removing a product by its ID
    removeFromCart: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter(item => item.id !== action.payload);
    },

    // Updating product quantity
    updateCartQuantity: (state, action: PayloadAction<{ id: string, quantity: number }>) => {
      state.items = state.items.map(item =>
        item.id === action.payload.id ? { ...item, quantity: action.payload.quantity } : item
      );
    },
  },
});

export const { addToCart, removeFromCart, updateCartQuantity } = cartSlice.actions;
export const selectCart = (state: RootState) => state.cart.items
export default cartSlice.reducer;
