import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface ModalState {
    modalAuth: boolean
    modalDeposit: boolean
}

const initialState: ModalState = {
    modalAuth: false,
    modalDeposit: false
}

export const modalSlice = createSlice({
    name: 'modals',
    initialState,
    reducers: {
        setModalAuth: (state, action: PayloadAction<boolean>) => {
            state.modalAuth = action.payload
        },
        setModalDeposit: (state, action: PayloadAction<boolean>) => {
            state.modalDeposit = action.payload
        },
    },
})

export const { setModalAuth, setModalDeposit } = modalSlice.actions

export default modalSlice.reducer