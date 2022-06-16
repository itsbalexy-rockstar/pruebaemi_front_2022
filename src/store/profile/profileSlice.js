import { createSlice } from "@reduxjs/toolkit";

export const profileSlice = createSlice({
  name: "profile",
  initialState: {
    name: "Tú nombre",
    occupation: "Tú profesión",
    description: "lorem ipsum dolor sit amet",
    openModal: false,
    minutes: 0,
    seconds: 0,
  },
  reducers: {
    updateData: (state, { payload }) => {
      (state.name = payload.name),
        (state.occupation = payload.occupation),
        (state.description = payload.description);
    },
    openModal: (state) => {
      state.openModal = true;
    },
    closeModal: (state) => {
      state.openModal = false;
    },
    changeMinutes: (state, { payload }) => {
      state.minutes = payload;
    },
    changeSeconds: (state, { payload }) => {
      state.seconds = payload;
    },
  },
});

export const {
  updateData,
  openModal,
  closeModal,
  changeMinutes,
  changeSeconds,
} = profileSlice.actions;
