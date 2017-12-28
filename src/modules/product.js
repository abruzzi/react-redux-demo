import axios from 'axios'

export const PRODUCT_REQUESTED = 'product/PRODUCT_REQUESTED'
export const PRODUCT_FETCHED = 'product/PRODUCT_FETCHED'
export const PRODUCT_ERROR = 'product/PRODUCT_ERROR'

const initialState = {
  products: [],
    loading: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case PRODUCT_REQUESTED:
      return {
        ...state,
          loading: true,
          products: action.data
      }

    case PRODUCT_FETCHED:
      return {
        ...state,
          loading: false,
          products: action.data
      }

    case PRODUCT_ERROR:
      return {
        ...state,
          loading: false
      }

    default:
      return state
  }
}

export const getProducts = () => {
  return dispatch => {
      return axios.get('/api/products').then((res) => {
          dispatch({
              type: PRODUCT_FETCHED,
              data: res.data
          })
      }).catch((error) => {
          dispatch({
              type: PRODUCT_ERROR,
              data: error
          })
      })
  }
}