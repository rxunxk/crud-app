import { createSlice, createSelector } from "@reduxjs/toolkit";

const usersSlice = createSlice({
  name: "users",
  initialState: [
    {
      name: "Rauank",
      gender: "male",
      email: "rauank@gmail.com",
      id: Math.floor(Math.random() * (1000 - 1 + 1)) + 1,
    },
    {
      name: "shubham",
      gender: "male",
      email: "shubha,@gmail.com",
      id: Math.floor(Math.random() * (1000 - 1 + 1)) + 1,
    },
    {
      name: "shivangi",
      gender: "female",
      email: "shivangi@gmail.com",
      id: Math.floor(Math.random() * (1000 - 1 + 1)) + 1,
    },
    {
      name: "Vaibhav",
      gender: "male",
      email: "vaibhav@gmail.com",
      id: Math.floor(Math.random() * (1000 - 1 + 1)) + 1,
    },
    {
      name: "krishna",
      gender: "male",
      email: "krishna@gmail.com",
      id: Math.floor(Math.random() * (1000 - 1 + 1)) + 1,
    },
  ],
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
