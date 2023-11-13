import { configureStore } from '@reduxjs/toolkit'
import dashboardReducer from "../../Features/State/slice";


export const store = configureStore({
    reducer: {
        dashboards : dashboardReducer
    },
})


export function buildStoreWithState(preloadedState?: RootState) {
    return configureStore({
        reducer: {dashboards:dashboardReducer},
        preloadedState:preloadedState,
    });
}

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch