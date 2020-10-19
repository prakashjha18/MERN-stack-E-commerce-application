import {
  ORDER_CREATE_REQUEST,
  ORDER_CREATE_SUCCESS,
  ORDER_CREATE_FAIL,
  ORDER_CREATE_REMOVE,
} from '../constants/orderConstants'

export const orderCreateReducer = (state = {cartItems:[]}, action) => {
  switch (action.type) {
    case ORDER_CREATE_REQUEST:
      return {
        loading: true,
      }
    case ORDER_CREATE_SUCCESS:
      return {
        loading: false,
        success: true,
        order: action.payload,
      }
    case ORDER_CREATE_FAIL:
      return {
        loading: false,
        error: action.payload,
      }
    case ORDER_CREATE_REMOVE:
      return {
        ...state,
        loading: false,
        success:false,
      }
    default:
      return state
  }
}
