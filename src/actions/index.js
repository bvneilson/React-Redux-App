import axios from 'axios';

export const GET_BREEDS_START = 'GET_BREEDS_START';
export const GET_BREEDS_SUCCESS = 'GET_BREEDS_SUCCESS';
export const GET_BREEDS_FAIL = 'GET_BREEDS_FAIL';
export const GET_RANDOM_START = 'GET_RANDOM_START';
export const GET_RANDOM_SUCCESS = 'GET_RANDOM_SUCCESS';
export const GET_RANDOM_FAIL = 'GET_RANDOM_FAIL';
export const GET_BREED_PICS_START = 'GET_BREED_PICS_START';
export const GET_BREED_PICS_SUCCESS = 'GET_BREED_PICS_SUCCESS';
export const GET_BREED_PICS_FAIL = 'GET_BREED_PICS_FAIL';

export const getBreeds = () => dispatch => {
  dispatch({ type: GET_BREEDS_START });
  axios.get('https://dog.ceo/api/breeds/list/all')
    .then(res => {
      //console.log(res);
      dispatch({ type: GET_BREEDS_SUCCESS, payload: res.data.message })
    }).catch(error => {
      console.log(error);
      dispatch({ type: GET_BREEDS_FAIL, payload: error })
    })
}

export const getRandomImg = (breed) => dispatch => {
  dispatch({ type: GET_RANDOM_START });
  axios.get(`https://dog.ceo/api/breed/${breed}/images/random`)
    .then(res => {
      console.log(res);
      return res.data.message;
    }).catch(error => {
      console.log(error);
      dispatch({ type: GET_RANDOM_FAIL, payload: error })
    })
}

export const getBreedPics = (breed) => dispatch => {
  dispatch({ type: GET_BREED_PICS_START });
  axios.get(`https://dog.ceo/api/breed/${breed}/images`)
    .then(res => {
      //console.log(res);
      dispatch({ type: GET_BREED_PICS_SUCCESS, payload: res.data.message })
    }).catch(error => {
      console.log(error);
      dispatch({ type: GET_BREED_PICS_FAIL, payload: error })
    })
}
