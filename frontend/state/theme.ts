import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import type { RootState } from "./_store"

interface ThemeState {
  theme: string
}

const initialState: ThemeState = {
  theme: "dark",
  // theme: "",
}

const theme = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setTheme(state, { payload }: PayloadAction<string>) {
      state.theme = payload
    },
  },
})

export const selectTheme = (state: RootState) => state.theme.theme

export const { setTheme } = theme.actions
export default theme.reducer
