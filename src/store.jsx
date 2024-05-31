import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialState = {
  showModal: false,
  modalProps: {},
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    toggleModal: (state) => {
      state.showModal = !state.showModal;
    },
    setModalProps: (state, action) => {
      state.modalProps = action.payload; 
    },
  },
});

export const { toggleModal, setModalProps } = modalSlice.actions;

export const store = configureStore({
  reducer: {
    modal: modalSlice.reducer,
  },
});
