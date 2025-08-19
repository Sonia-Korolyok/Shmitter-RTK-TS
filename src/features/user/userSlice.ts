import {createSlice} from "@reduxjs/toolkit";


const userSlice = createSlice({
    name: "user",
    initialState: {
        name:"Retro",
        avatar: "https://gravatar.com/avatar/000?d=retro"
    },
    reducers: {
        changeName: (state, action) => {state.name = action.payload || state.name},
        changeAvatar: (state, action) => {state.avatar = action.payload || state.avatar}
    },
})

// type: user/changeName type:user/avatar
export const {changeName, changeAvatar} = userSlice.actions;
export default userSlice.reducer;