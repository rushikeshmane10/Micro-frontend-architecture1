import { configureStore, createSlice } from "@reduxjs/toolkit";
import { Provider, useDispatch, useSelector } from "react-redux";

const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 12,
  },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },

  },
});

export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
  },
});
const { increment } = counterSlice.actions;

export function StoreProvider({ children }) {
  return <Provider store={store}>{children}</Provider>;
}

export function useStore() {
  const counter = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return {
    counter,
    increment: () => dispatch(increment()),
  };
}
