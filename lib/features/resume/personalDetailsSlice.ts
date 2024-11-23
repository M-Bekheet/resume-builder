import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { INITIAL_PERSONAL_DETAILS, PersonalDetails } from "./utils";

const personalDetailsSlice = createSlice({
  name: "personalDetails",
  initialState: INITIAL_PERSONAL_DETAILS,
  reducers: {
    addPersonalDetail: (state, action: PayloadAction<PersonalDetails>) => {
      state.push(action.payload);
    },
    updatePersonalDetail: (state, action: PayloadAction<PersonalDetails>) => {
      const index = state.findIndex(
        (detail) => detail.id === action.payload.id
      );
      if (index !== -1) {
        state[index] = action.payload;
      }
    },
    deletePersonalDetail: (state, action: PayloadAction<string>) => {
      return state.filter((detail) => detail.id !== action.payload);
    },
    reorderPersonalDetails: (
      state,
      action: PayloadAction<PersonalDetails[]>
    ) => {
      return action.payload;
    },
  },
});

export const {
  addPersonalDetail,
  updatePersonalDetail,
  deletePersonalDetail,
  reorderPersonalDetails,
} = personalDetailsSlice.actions;
export default personalDetailsSlice.reducer;
