import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ProductSelected {
    id: number,
}

export interface ProductSelectedState {
    value: ProductSelected
}

const initialState: ProductSelectedState = {
    value: {
        id: 0,
    }
}

export const productSelectedSlice = createSlice({
    name: "productSelected",
    initialState,
    reducers: {
        setId: (state, action:PayloadAction<ProductSelected>) => {
            state.value = action.payload;
        }
    }

})

export const { setId } = productSelectedSlice.actions

export default productSelectedSlice.reducer