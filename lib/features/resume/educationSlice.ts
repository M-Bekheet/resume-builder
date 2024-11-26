import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Education, INITIAL_EDUCATIONS } from "./utils";

const educationsSlice = createSlice({
  name: "educations",
  initialState: INITIAL_EDUCATIONS,
  reducers: {
    addEducation: (
      state,
      action: PayloadAction<{
        sectionId: string;
        education: Education;
      }>
    ) => {
      const sectionIndex = state.findIndex(
        (section) => section.id === action.payload.sectionId
      );
      if (sectionIndex !== -1) {
        state[sectionIndex].educations.push(action.payload.education);
      }
    },

    updateEducation: (
      state,
      action: PayloadAction<{
        sectionId: string;
        education: Education;
      }>
    ) => {
      const sectionIndex = state.findIndex(
        (section) => section.id === action.payload.sectionId
      );
      if (sectionIndex !== -1) {
        const educationIndex = state[sectionIndex].educations.findIndex(
          (education) => education.id === action.payload.education.id
        );
        if (educationIndex !== -1) {
          state[sectionIndex].educations[educationIndex] =
            action.payload.education;
        }
      }
    },

    deleteEducation: (
      state,
      action: PayloadAction<{ sectionId: string; educationId: string }>
    ) => {
      const sectionIndex = state.findIndex(
        (section) => section.id === action.payload.sectionId
      );
      if (sectionIndex !== -1) {
        const educationIndex = state[sectionIndex].educations.findIndex(
          (education) => education.id === action.payload.educationId
        );
        if (educationIndex !== -1) {
          state[sectionIndex].educations.splice(educationIndex, 1);
        }
      }
    },
  },
});

export const { addEducation, updateEducation, deleteEducation } =
  educationsSlice.actions;
export default educationsSlice.reducer;
