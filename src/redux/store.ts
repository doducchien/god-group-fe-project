import { configureStore } from '@reduxjs/toolkit'
import loadingReducer from '../features/loading/LoadingSlice'
// ...

export const store = configureStore({
  reducer: {
    loading: loadingReducer
}})

// Infer the `RootState`,  `AppDispatch`, and `AppStore` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
export type AppStore = typeof store