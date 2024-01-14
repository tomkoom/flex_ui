import { configureStore } from "@reduxjs/toolkit"

import template from "./_template"
import loading from "./loading"
import theme from "./theme"

export const store = configureStore({
  reducer: {
    template,
    loading,
    theme,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
