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
  updateRequired: number
  conceal: boolean
  book: string
  bookNo: number
  showPlus: boolean
  bookTwo: string
}

const initialState: MainState = {
  localesPersist: '',
  bookiliad: [],
  min: 0,
  max: 0,
  updateRequired: 0,
  conceal: false,
  book: '',
  bookNo: 0,
  showPlus: false,
  bookTwo: '',
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
    setUpdateRequired: (state, action) => {
      state.updateRequired = action.payload
    },
    setConceal: (state, action) => {
      state.conceal = action.payload
    },
    setBook: (state, action) => {
      state.book = action.payload
    },
    setBookNo: (state, action) => {
      state.bookNo = action.payload
    },
    setShowPlus: (state, action) => {
      state.showPlus = action.payload
    },
    setBookTwo: (state, action) => {
      state.bookTwo = action.payload
    },
  },
})

export const {
  setLocalesPersist,
  setBookiliad,
  setMin,
  setMax,
  setUpdateRequired,
  setConceal,
  setBook,
  setBookNo,
  setShowPlus,
  setBookTwo,
} = mainSlice.actions

export default mainSlice.reducer
