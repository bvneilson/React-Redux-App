import { GET_BREEDS_START,
  GET_BREEDS_SUCCESS,
  GET_BREEDS_FAIL,
  GET_RANDOM_START,
  GET_RANDOM_SUCCESS,
  GET_RANDOM_FAIL,
  GET_BREED_PICS_START,
  GET_BREED_PICS_SUCCESS,
  GET_BREED_PICS_FAIL } from '../actions';

const initialState = {
  breeds: {},
  randomImage: '',
  breedPics: [],
  error: '',
  isFetching: false
}

export const reducer = (state = initialState, action) => {
  //console.log('reducer', action)
  switch (action.type) {
    case 'GET_BREEDS_START':
      return {
        ...state,
        isFetching: true,
        error: ''
      }
      case 'GET_BREEDS_SUCCESS':
        return {
          ...state,
          breeds: action.payload,
          isFetching: false,
          error: ''
        }
    case 'GET_BREEDS_FAIL':
      return {
        ...state,
        error: action.payload
      }
      case 'GET_RANDOM_START':
        return {
          ...state,
          isFetching: true,
          error: ''
        }
        case 'GET_RANDOM_SUCCESS':
          return {
            ...state,
            randomImage: action.payload,
            isFetching: false,
            error: ''
          }
      case 'GET_RANDOM_FAIL':
        return {
          ...state,
          error: action.payload
        }
        case 'GET_BREED_PICS_START':
          return {
            ...state,
            isFetching: true,
            error: ''
          }
          case 'GET_BREED_PICS_SUCCESS':
            return {
              ...state,
              breedPics: action.payload,
              isFetching: false,
              error: ''
            }
        case 'GET_BREED_PICS_FAIL':
          return {
            ...state,
            error: action.payload
          }
    default:
      return state;
  }
}
