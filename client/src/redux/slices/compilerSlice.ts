import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface compilerSliceStateType {
  html: string;
  css: string;
  javascript: string;
  currentLanguage: "html" | "css" | "javascript";
}
const initialState:compilerSliceStateType = {
  html: "",
  css: "",
  javascript: "",
  currentLanguage: "html",
};

const compilerSlice = createSlice({
  name: "compiler",
  initialState,
  reducers: {
    updateCurrentLanguage: (state, action: PayloadAction<compilerSliceStateType["currentLanguage"]>) => {
      state.currentLanguage = action.payload;
    },
  },
});
export const { updateCurrentLanguage } = compilerSlice.actions;
export default compilerSlice.reducer;
