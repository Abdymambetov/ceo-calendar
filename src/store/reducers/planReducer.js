import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    plans: [
        {
            title: 'hello',
            text: 'go to shop',
            data: '24 Jul 2022'
        },
    ],
    selectedData: ''
}

export const planSlice = createSlice({
    name: 'plan',
    initialState,
    reducers: {
        getPlan(state, action) {
            const foundData = state.plans.find(item => item.data === action.payload.data)

            if (foundData) {
                const plans = state.plans.filter(item => item.data !== foundData.data)
                plans.push(action.payload)
                state.plans = plans
                return
            }
            state.plans.push(action.payload)
        },
        deletePlan(state, action) {
            const foundPlan = state.plans.find(item => item.data === action.payload)
            const newState = state.plans.filter(item => item.data !== foundPlan.data)
            state.plans = newState
        },
        getSelectedData(state, action) {
            state.selectedData = action.payload
        }
    }
})

export const { getPlan, getSelectedData, deletePlan } = planSlice.actions
export default planSlice.reducer