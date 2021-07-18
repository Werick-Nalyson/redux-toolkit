import { ReduxStore } from "../../../types";

export const selectCounterValue = (state: ReduxStore) => state.counter.value