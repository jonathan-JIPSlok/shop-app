import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../store/slices/counter/counterSlice'
import userReducer from '../store/slices/user/userSlice'
import ProductSelectedReducer from './slices/productSelected/productSelectedSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    user: userReducer,
    productSelected: ProductSelectedReducer
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch