import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  POST_DATA:[],
};

const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    __postDataChange(state, action) {
      state.POST_DATA = action.payload;
    },
  
    
  },
});

export const {__postDataChange} = dataSlice.actions;
export default dataSlice.reducer;
