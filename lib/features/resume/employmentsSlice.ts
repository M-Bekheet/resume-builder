import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Employment, INITIAL_EMPLOYMENTS } from "./utils";

const employmentsSlice = createSlice({
  name: "employments",
  initialState: INITIAL_EMPLOYMENTS,
  reducers: {
    addEmployment: (state, action: PayloadAction<Employment>) => {
      state.push(action.payload);
    },
    updateEmployment: (state, action: PayloadAction<Employment>) => {
      const index = state.findIndex(
        (employment) => employment.id === action.payload.id
      );
      if (index !== -1) {
        state[index] = action.payload;
      }
    },
    deleteEmployment: (state, action: PayloadAction<string>) => {
      return state.filter((employment) => employment.id !== action.payload);
    },
    reorderEmployments: (state, action: PayloadAction<Employment[]>) => {
      return action.payload;
    },
  },
});

export const {
  addEmployment,
  updateEmployment,
  deleteEmployment,
  reorderEmployments,
} = employmentsSlice.actions;
export default employmentsSlice.reducer;
