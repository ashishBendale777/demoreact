import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    UserData: {},
    isLogin: false
}

const UserSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        register: (state, action) => {
            state.UserData = action.payload
            state.isLogin = true
        },
        logout: (state) => {
            state.UserData = {}
            state.isLogin = false
        }
    }
})

export const { register, logout } = UserSlice.actions
export default UserSlice.reducer