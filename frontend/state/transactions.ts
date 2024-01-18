import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import type { RootState } from "./_store"

interface TransactionsState {
  transactions: string
}

const initialState: TransactionsState = {
  transactions: "",
}

const transactions = createSlice({
  name: "transactions",
  initialState,
  reducers: {
    setTransactions(state, { payload }: PayloadAction<string>) {
      state.transactions = payload
    },
  },
})

const selectTransactions = (state: RootState) => state.transactions.transactions
export { selectTransactions }

export const { setTransactions } = transactions.actions
export default transactions.reducer
