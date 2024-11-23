import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Certificate, INITIAL_CERTIFICATES } from "./utils";

const certificatesSlice = createSlice({
  name: "certificates",
  initialState: INITIAL_CERTIFICATES,
  reducers: {
    addCertificate: (state, action: PayloadAction<Certificate>) => {
      state.push(action.payload);
    },
    updateCertificate: (state, action: PayloadAction<Certificate>) => {
      const index = state.findIndex(
        (certificate) => certificate.id === action.payload.id
      );
      if (index !== -1) {
        state[index] = action.payload;
      }
    },
    deleteCertificate: (state, action: PayloadAction<string>) => {
      return state.filter((certificate) => certificate.id !== action.payload);
    },
    reorderCertificates: (state, action: PayloadAction<Certificate[]>) => {
      return action.payload;
    },
  },
});

export const {
  addCertificate,
  updateCertificate,
  deleteCertificate,
  reorderCertificates,
} = certificatesSlice.actions;
export default certificatesSlice.reducer;
