import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {

        cartList: [],
        totalAmount: 0,

    },
    reducers:{
        
        addToCart: (state, action) => {

            const updatedCartList = state.cartList.concat(action.payload);
            const updatedTotalAmount = state.totalAmount + action.payload.price;

            return { ...state, cartList: updatedCartList, totalAmount: updatedTotalAmount };

        },

        removeFromCart: (state, action) => {
     
            const updatedCartList = state.cartList.filter(item => item.id !== action.payload.id);
            const updatedTotalAmount = state.totalAmount - action.payload.price;

            return { ...state, cartList: updatedCartList, totalAmount: updatedTotalAmount };

        }

    }
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export const cartReducer = cartSlice.reducer;