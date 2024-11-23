import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { INITIAL_TECHNICAL_SKILLS, TechnicalSkill } from "./utils";

// * Skills must not be duplicated by name
const technicalSkillsSlice = createSlice({
  name: "technicalSkills",
  initialState: INITIAL_TECHNICAL_SKILLS,
  reducers: {
    addTechnicalSkill: (state, action: PayloadAction<TechnicalSkill>) => {
      state.push(action.payload);
    },
    updateTechnicalSkill: (state, action: PayloadAction<TechnicalSkill>) => {
      const index = state.findIndex(
        (skill) => skill.skill === action.payload.skill
      );
      if (index !== -1) {
        state[index] = action.payload;
      }
    },
    deleteTechnicalSkill: (state, action: PayloadAction<string>) => {
      return state.filter((skill) => skill.skill !== action.payload);
    },
    reorderTechnicalSkills: (
      state,
      action: PayloadAction<TechnicalSkill[]>
    ) => {
      return action.payload;
    },
  },
});

export const {
  addTechnicalSkill,
  updateTechnicalSkill,
  deleteTechnicalSkill,
  reorderTechnicalSkills,
} = technicalSkillsSlice.actions;
export default technicalSkillsSlice.reducer;
