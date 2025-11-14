import { createSlice } from "@reduxjs/toolkit";

const initialStateAcc = {
  balance: 0,
  loan: 0,
  loanPurpose: "",
  isLoading: false,
};

const accountSlice = createSlice({
  name: "account",
  initialState: initialStateAcc,
  reducers: {
    deposit(state, action) {
      state.balance = state.balance + action.payload;
    },
    withdraw(state, action) {
      state.balance = state.balance - action.payload;
    },
    requestLoan: {
      prepare(amount, purpose) {
        return {
          payload: { amount, purpose },
        };
      },

      reducer(state, action) {
        if (state.loan > 0) return;
        state.loan = action.payload.amount;
        state.loanPurpose = action.payload.purpose;
        state.balance = state.balance + action.payload.amount;
      },
      payLoan(state, action) {
        state.balance = state.balance - action.payload;
        state.loan = 0;
        state.loanPurpose = "";
      },
    },
  },
});

export const { deposit, withdraw, requestLoan, payLoan } = accountSlice.actions;

console.log(requestLoan(1200, "nourhan amr"));
export default accountSlice.reducer;
