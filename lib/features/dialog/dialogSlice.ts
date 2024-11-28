import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { DialogState } from "./utils";

const initialState: DialogState = {
  isOpen: false,
  title: "",
  description: "",
  cancelText: "Cancel",
  actionText: "Continue",
  onCancel: () => {},
  onContinue: () => {},
};

const dialogSlice = createSlice({
  name: "dialog",
  initialState,
  reducers: {
    openDialog: (
      state,
      action: PayloadAction<{
        title: string;
        description: string;
        actionText?: string;
        cancelText?: string;
        onCancel: () => void;
        onContinue: () => void;
      }>
    ) => {
      state.isOpen = true;
      state.title = action.payload.title;
      state.description = action.payload.description;
      state.actionText = action.payload.actionText || initialState.actionText;
      state.cancelText = action.payload.cancelText || initialState.cancelText;
      state.onCancel = action.payload.onCancel;
      state.onContinue = action.payload.onContinue;
    },
    closeDialog: (state) => {
      state.isOpen = false;
      state.title = "";
      state.description = "";
      state.onCancel = () => {};
      state.onContinue = () => {};
    },
  },
});

export const { openDialog, closeDialog } = dialogSlice.actions;
export default dialogSlice.reducer;
