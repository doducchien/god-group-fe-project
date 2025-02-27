import { createSlice } from "@reduxjs/toolkit"

export interface LoadingState{
    loading: boolean
}

const initialState: LoadingState = {
    loading: false
}

export const loadingSlice = createSlice({
    name: 'loading',
    initialState,
    reducers:{
        onLoading: (state) => {state.loading = true},
        offLoading: (state) => {state.loading = false}
    }
})

export const {onLoading, offLoading} = loadingSlice.actions
export const loadingReducer = loadingSlice.reducer;
export default loadingReducer