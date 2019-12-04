import React from 'react';
import { connect } from 'react-redux';
import { getBreeds, getRandomImg } from '../actions';

const HomeBreeds = props => {

  console.log(props.breeds);
  if (Object.entries(props.breeds).length === 0 && props.breeds.constructor === Object) {
    props.getBreeds();
    return <h2>Loading...</h2>
  }

  const breeds = Object.keys(props.breeds);
  console.log(breeds);
  return (
    breeds.map((breed, index) => {
      //const breedImg = props.getRandomImg(breed);
      return <div className='breed' key={index}>
        <h2>{breed}</h2>
      </div>
    })
  )
}

const mapStateToProps = state => {
  //console.log(state);
  if (!state) {
    return{};
  }
  return {
    breeds: state.breeds
  }
}

export default connect(mapStateToProps, { getBreeds, getRandomImg })(HomeBreeds)
