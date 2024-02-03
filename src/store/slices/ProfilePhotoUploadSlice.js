import { createSlice } from '@reduxjs/toolkit';

export const photoSlice = createSlice({
  name: 'photo',
  initialState: {
    photos: [],
    status: 'idle',
    error: null,
  },
  reducers: {
    photoAdded: (state, action) => {
      state.photos.push(action.payload);
    },
    photoUploaded: (state, action) => {
      state.status = 'succeeded';
      state.photos.push(action.payload);
    },
    photoUploadFailed: (state, action) => {
      state.status = 'failed';
      state.error = action.payload;
    },
  },
});

export const { photoAdded, photoUploaded, photoUploadFailed } = photoSlice.actions;

export default photoSlice.reducer;