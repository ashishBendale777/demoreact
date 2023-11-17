import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    UserData: {}
}

const UserSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        register: (state, action) => {
            state.UserData = action.payload
        },
        logout: (state) => {
            state.UserData = {}
        }
    }
})

export const { register, logout } = UserSlice.actions
export default UserSlice.reducer