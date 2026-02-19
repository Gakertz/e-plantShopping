import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
  },
  reducers: {
    // ✅ ADD ITEM
    addItem: (state, action) => {
      const existingItem = state.items.find(
        (item) => item.name === action.payload.name
      );

      if (existingItem) {
        // If item already exists, increase quantity
        existingItem.quantity += 1;
      } else {
        // Otherwise add new item with quantity 1
        state.items.push({
          ...action.payload,
          quantity: 1,
        });
      }
    },

    // ✅ REMOVE ITEM
    removeItem: (state, action) => {
      state.items = state.items.filter(
        (item) => item.name !== action.payload
      );
    },

    // ✅ UPDATE QUANTITY
    updateQuantity: (state, action) => {
      const { name, amount } = action.payload;

      const item = state.items.find(
        (item) => item.name === name
      );

      if (item) {
        item.quantity = amount;
      }
    },
  },
});

// ✅ Export actions
export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

// ✅ Export reducer for store.js
export default CartSlice.reducer;
