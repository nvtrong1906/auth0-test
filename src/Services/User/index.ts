import axios from "axios";
import {
  createAsyncThunk,
} from "@reduxjs/toolkit";

import { setUserData, setUserDataError } from "../../Store/User";
import { Config } from "../../Config";

const fetchUserData = (token) => async (dispatch) => {
  try {
    console.log(`token`, token)
    const response = await axios.get(`${Config.API_URL}/userinfo`, { headers: { Authorization: `Bearer ${token}` } })
    console.log(`response success`, response.data)
    dispatch(setUserData({ userData: response.data }))
  } catch (err) {
    console.log(`response err`, err)
    dispatch(setUserDataError(err))
  }
}

export { fetchUserData }