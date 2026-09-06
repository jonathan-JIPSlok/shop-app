import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface User {
    id: number,
    name: String,
    password: String
}

export interface UserState {
    value: User;
}

const initialState: UserState = {
    value: {"id": 0, "name": '', "password": ''}
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<User>) => {
            state.value = action.payload
        },
        clearUser: (state) => {
            state.value = {
                id: 0,
                name: "",
                password: ''
            };
        }
        
    }
})

export const { setUser, clearUser } = userSlice.actions;
export default userSlice.reducer;