import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface AuthState {
    logged: boolean
}

const initialState: AuthState = {
    logged: false
}

export const AuthSlice = createSlice({
    name: 'modals',
    initialState,
    reducers: {
        setLogged: (state, action: PayloadAction<boolean>) => {
            state.logged = action.payload
        },
    },
})

export const { setLogged } = AuthSlice.actions

export default AuthSlice.reducer