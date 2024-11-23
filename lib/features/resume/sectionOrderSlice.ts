import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { INITIAL_SECTIONS_ORDER, SectionOrder } from "./utils";

const sectionOrderSlice = createSlice({
  name: "sectionOrder",
  initialState: INITIAL_SECTIONS_ORDER,
  reducers: {
    addSection: (state, action: PayloadAction<SectionOrder>) => {
      state.push(action.payload);
    },
    removeSection: (state, action: PayloadAction<string>) => {
      return state.filter((section) => section.id !== action.payload);
    },
    reorderSection: (
      state,
      action: PayloadAction<{ id: string; newIndex: number }>
    ) => {
      const { id, newIndex } = action.payload;
      const index = state.findIndex((section) => section.id === id);
      if (index !== -1 && newIndex >= 0 && newIndex < state.length) {
        const [movedSection] = state.splice(index, 1);
        state.splice(newIndex, 0, movedSection);
      }
    },
  },
});

export const { addSection, removeSection, reorderSection } =
  sectionOrderSlice.actions;
export default sectionOrderSlice.reducer;
