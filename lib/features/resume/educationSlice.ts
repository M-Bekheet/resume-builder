import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Education, INITIAL_EDUCATIONS } from "./utils";

const educationsSlice = createSlice({
  name: "educations",
  initialState: INITIAL_EDUCATIONS,
  reducers: {
    addEducation: (state, action: PayloadAction<Education>) => {
      state.push(action.payload);
    },
    updateEducation: (state, action: PayloadAction<Education>) => {
      const index = state.findIndex(
        (education) => education.id === action.payload.id
      );
      if (index !== -1) {
        state[index] = action.payload;
      }
    },
    deleteEducation: (state, action: PayloadAction<string>) => {
      return state.filter((education) => education.id !== action.payload);
    },
    reorderEducations: (state, action: PayloadAction<Education[]>) => {
      return action.payload;
    },
  },
});

export const {
  addEducation,
  updateEducation,
  deleteEducation,
  reorderEducations,
} = educationsSlice.actions;
export default educationsSlice.reducer;
