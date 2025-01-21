import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userDetails: {}, // Initial empty object to store user details
};

const userDetailsSlice = createSlice({
  name: "userDetails",
  initialState,
  reducers: {
    setUserDetails: (state, action) => {
      state.userDetails = action.payload;
    },
  },
});

export const { setUserDetails } = userDetailsSlice.actions;
export default userDetailsSlice.reducer;
