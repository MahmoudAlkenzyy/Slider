import { createSlice } from "@reduxjs/toolkit";
import { useState } from "react";



const addUserSlice = createSlice({
    name: 'addUser',
    initialState: {},
    reducers: {
        addUser: (state,action) => {
            state ={}
        },
    }
})