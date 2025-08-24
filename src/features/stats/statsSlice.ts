import {createSlice, type PayloadAction} from "@reduxjs/toolkit";
import {StatsType} from "../../utils/types.d";


const statsSlice = createSlice({
    name: "stats",
    initialState: {
        [StatsType.FOLLOWERS]: 0,
        [StatsType.FOLLOWING]: 0
    },
    reducers: {
        changeStats: {
            reducer: (state, action: PayloadAction<{ statsType: StatsType; sum: number }>) => {
                const res = state[action.payload.statsType] + action.payload.sum;
                state[action.payload.statsType] = res >= 0 ? res : 0;
            },
            prepare: (statsType: StatsType, sum: number) => ({payload: {statsType, sum}})
        }
    }
})
// type: stats/increase, type: stats/decrease
export const {changeStats} = statsSlice.actions;
export default statsSlice.reducer;