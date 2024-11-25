import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { INITIAL_TECHNICAL_SKILLS, TechnicalSkill } from "./utils";

// * Skills must not be duplicated by name
const technicalSkillsSlice = createSlice({
  name: "technicalSkills",
  initialState: INITIAL_TECHNICAL_SKILLS,
  reducers: {
    addTechnicalSkill: (
      state,
      action: PayloadAction<{ sectionId: string; skill: TechnicalSkill }>
    ) => {
      const section = state.find((sec) => sec.id === action.payload.sectionId);
      if (section) section.skills.push(action.payload.skill);
    },
    updateTechnicalSkill: (
      state,
      action: PayloadAction<{
        sectionId: string;
        skill: Partial<TechnicalSkill>;
      }>
    ) => {
      const section = state.find((sec) => sec.id === action.payload.sectionId);
      if (!section) return;
      const index = section.skills.findIndex(
        (skill) => skill.id === action.payload.skill.id
      );
      if (index !== -1)
        section.skills[index] = {
          ...section.skills[index],
          ...action.payload.skill,
        };
    },
    deleteTechnicalSkill: (
      state,
      action: PayloadAction<{
        sectionId: string;
        skillId: string;
      }>
    ) => {
      const section = state.find((sec) => sec.id === action.payload.sectionId);
      if (!section) return;
      section.skills = section.skills.filter(
        (skill) => skill.id !== action.payload.skillId
      );
    },
  },
});

export const { addTechnicalSkill, updateTechnicalSkill, deleteTechnicalSkill } =
  technicalSkillsSlice.actions;
export default technicalSkillsSlice.reducer;
