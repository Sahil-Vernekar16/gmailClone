import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice(
    {
        name: "authSlice",
        initialState: {
            open: false
        },
        reducers: {
            setOpen: (state, action) => {
                state.open = action.payload
            }
        },
    }
)

export const {setOpen} = authSlice.actions;
export default authSlice.reducer;