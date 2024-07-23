import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice(
    {
        name: "authSlice",
        initialState: {
            open: false,
            emails: [],
            selectedEmail: null,
            searchText: "",
            user: null
        },
        reducers: {
            setOpen: (state, action) => {
                state.open = action.payload
            },
            setEmails: (state,action) => {
                state.emails = action.payload
            },
            setSelectedEmail: (state,action) => {
                state.selectedEmail = action.payload
            },
            setSearchText: (state,action) =>{
                state.searchText = action.payload
            },
            setUser: (state,action) =>{
                state.user = action.payload
            }
        },
    }
)

export const {setOpen, setEmails,setSelectedEmail, setSearchText, setUser} = authSlice.actions;
export default authSlice.reducer;