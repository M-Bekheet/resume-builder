import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { INITIAL_PERSONAL_DETAILS, PersonalDetails } from "./utils";

const personalDetailsSlice = createSlice({
  name: "personalDetails",
  initialState: INITIAL_PERSONAL_DETAILS,
  reducers: {
    addPersonalDetail: (state, action: PayloadAction<PersonalDetails>) => {
      state.push(action.payload);
    },
    updatePersonalDetail: (
      state,
      action: PayloadAction<Partial<PersonalDetails> & { id: string }>
    ) => {
      const { id, ...changes } = action.payload;
      const index = state.findIndex(
        (detail) => detail.id === action.payload.id
      );
      if (index !== -1) state[index] = { ...state[index], ...changes };
    },
    updateAdditionalInfo: (
      state,
      action: PayloadAction<
        Partial<PersonalDetails["additionalInfo"]> & { id: string }
      >
    ) => {
      const { id, ...changes } = action.payload;
      const index = state.findIndex(
        (detail) => detail.id === action.payload.id
      );
      if (index !== -1)
        state[index] = {
          ...state[index],
          additionalInfo: { ...state[index].additionalInfo, ...changes },
        };
    },
    deletePersonalDetail: (state, action: PayloadAction<string>) => {
      return state.filter((detail) => detail.id !== action.payload);
    },
    addPersonalDetailsSection: (state, action: PayloadAction<string>) => {
      state.push({
        ...INITIAL_PERSONAL_DETAILS,
        id: action.payload,
        sectionName: "Personal Details",
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        country: "",
        city: "",
        jobTitle: "",
        summary: "",
      });
    },
  },
});

export const {
  addPersonalDetail,
  updatePersonalDetail,
  updateAdditionalInfo,
  deletePersonalDetail,
  addPersonalDetailsSection,
} = personalDetailsSlice.actions;
export default personalDetailsSlice.reducer;
