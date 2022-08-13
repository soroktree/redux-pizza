import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  categoryId: 0,
  sort: {
    name: 'популярности',
    sort: 'raiting',
    order: 'desc',
  }
}

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setCategoryId(state, action) {
        state.categoryId = action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { setCategoryId } = filterSlice.actions

export default filterSlice.reducer