import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  themeSuccess: false,
  currentTheme: 'primary'
};
export const ThemeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    successInChangeTheme: (state, action) => {
      state.themeSuccess = true;
      state.currentTheme = action.payload;
    }
  }
});
export default ThemeSlice.reducer;
export const { successInChangeTheme } = ThemeSlice.actions;
