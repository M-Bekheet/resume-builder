import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Employment, INITIAL_EMPLOYMENTS } from "./utils";

const employmentsSlice = createSlice({
  name: "employments",
  initialState: INITIAL_EMPLOYMENTS,
  reducers: {
    addEmployment: (
      state,
      action: PayloadAction<{ sectionId: string; employment: Employment }>
    ) => {
      const section = state.find((sec) => sec.id === action.payload.sectionId);
      if (section) section.employments.push(action.payload.employment);
    },
    updateEmployment: (
      state,
      action: PayloadAction<{
        sectionId: string;
        employment: Partial<Employment> & { id: string };
      }>
    ) => {
      const section = state.find((sec) => sec.id === action.payload.sectionId);
      if (!section) return;
      const index = section.employments.findIndex(
        (employment) => employment.id === action.payload.employment.id
      );
      if (index !== -1)
        section.employments[index] = {
          ...section.employments[index],
          ...action.payload.employment,
        };
    },
    deleteEmployment: (
      state,
      action: PayloadAction<{
        sectionId: string;
        employmentId: string;
      }>
    ) => {
      const section = state.find((sec) => sec.id === action.payload.sectionId);
      if (!section) return;
      section.employments = section.employments.filter(
        (employment) => employment.id !== action.payload.employmentId
      );
    },
  },
});

export const { addEmployment, updateEmployment, deleteEmployment } =
  employmentsSlice.actions;
export default employmentsSlice.reducer;
