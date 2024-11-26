import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Certificate, INITIAL_CERTIFICATES } from "./utils";

const certificatesSlice = createSlice({
  name: "certificates",
  initialState: INITIAL_CERTIFICATES,
  reducers: {
    addCertificate: (
      state,
      action: PayloadAction<{
        sectionId: string;
        certificate: Certificate;
      }>
    ) => {
      const sectionIndex = state.findIndex(
        (section) => section.id === action.payload.sectionId
      );
      if (sectionIndex !== -1) {
        state[sectionIndex].certificates.push(action.payload.certificate);
      }
    },

    updateCertificate: (
      state,
      action: PayloadAction<{
        sectionId: string;
        certificate: Certificate;
      }>
    ) => {
      const sectionIndex = state.findIndex(
        (section) => section.id === action.payload.sectionId
      );
      if (sectionIndex !== -1) {
        const certificateIndex = state[sectionIndex].certificates.findIndex(
          (certificate) => certificate.id === action.payload.certificate.id
        );
        if (certificateIndex !== -1) {
          state[sectionIndex].certificates[certificateIndex] =
            action.payload.certificate;
        }
      }
    },

    deleteCertificate: (
      state,
      action: PayloadAction<{ sectionId: string; certificateId: string }>
    ) => {
      const sectionIndex = state.findIndex(
        (section) => section.id === action.payload.sectionId
      );
      if (sectionIndex !== -1) {
        const certificateIndex = state[sectionIndex].certificates.findIndex(
          (certificate) => certificate.id === action.payload.certificateId
        );
        if (certificateIndex !== -1) {
          state[sectionIndex].certificates.splice(certificateIndex, 1);
        }
      }
    },
  },
});

export const { addCertificate, updateCertificate, deleteCertificate } =
  certificatesSlice.actions;
export default certificatesSlice.reducer;
