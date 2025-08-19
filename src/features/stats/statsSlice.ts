import {createSlice, type PayloadAction} from "@reduxjs/toolkit";
import type {StatKey} from "../../utils/types";


const statsSlice = createSlice({
    name: "stats",
    initialState: {
        followers: 0,
        following: 0
    },
    reducers: {
        changeStats: {
            reducer: (state, action: PayloadAction<{ statsType: StatKey; sum: number }>) => {
            const res = state[action.payload.statsType] + action.payload.sum;
            state[action.payload.statsType] = res >= 0 ? res : 0;
        },
            prepare: (statsType, sum) => ({payload: {statsType, sum}})
        }
    }
})
// type: stats/increase, type: stats/decrease
export const {changeStats} = statsSlice.actions;
export default statsSlice.reducer;