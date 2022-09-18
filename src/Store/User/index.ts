import { createSlice } from '@reduxjs/toolkit'
import { fetchUserData } from '../../Services/User'

const slice = createSlice({
  name: 'user',
  initialState: { userData: null },
  reducers: {
    setUserData: (state, { payload }) => {
      return ({
        userData: payload?.userData,
        msg: '',
      })
    },
    setUserDataError: (state, { payload: { err } }) => ({
      userData: {},
      msg: err,
    }),
  },
})

export const { setUserData, setUserDataError } = slice.actions

export default slice.reducer