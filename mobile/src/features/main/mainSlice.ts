import { createSlice } from '@reduxjs/toolkit'
// import type { PayloadAction } from '@reduxjs/toolkit'

export interface MainState {
  localesPersist: string
  bookiliad: {
    id: number
    book: string
    chapter: string
    text: string
  }[]
  min: number
  max: number
}

const initialState: MainState = {
  localesPersist: '',
  bookiliad: [],
  min: 0,
  max: 0,
}

export const mainSlice = createSlice({
  name: 'main',
  initialState,
  reducers: {
    setLocalesPersist: (state, action) => {
      state.localesPersist = action.payload
    },
    setBookiliad: (state, action) => {
      state.bookiliad = action.payload
    },
    setMin: (state, action) => {
      state.min = action.payload
    },
    setMax: (state, action) => {
      state.max = action.payload
    },
  },
})

export const { setLocalesPersist, setBookiliad, setMin, setMax } =
  mainSlice.actions

export default mainSlice.reducer
