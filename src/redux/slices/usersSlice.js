import { createSlice, createSelector } from "@reduxjs/toolkit";

const usersSlice = createSlice({
  name: "users",
  initialState: [],
  reducers: {
    addUser: (state, action) => {
      state.push(action.payload);
      return state;
    },
    removeUser: (state, action) =>
      state.filter((user) => user.id !== action.payload),
    editUser: (state, action) => {
      const { id, name, email, gender } = action.payload;
      const newState = state.map((user) => {
        if (user.id === id) {
          return {
            ...user,
            name: name,
            email: email,
            gender: gender,
          };
        }
        return user;
      });
      return newState;
    },
  },
});

export const getUserSelectors = createSelector(
  (state) => state.users,
  (state) => state
);

export const { addUser, removeUser, editUser } = usersSlice.actions;
export default usersSlice.reducer;
