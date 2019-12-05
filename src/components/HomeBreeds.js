import React from 'react';
import { connect } from 'react-redux';
import { getBreeds, getRandomImg } from '../actions';
import { Link } from 'react-router-dom';

const HomeBreeds = props => {

  //console.log(props.breeds);
  if (Object.entries(props.breeds).length === 0 && props.breeds.constructor === Object) {
    props.getBreeds();
    return <h2>Loading...</h2>
  }

  const breeds = Object.keys(props.breeds);
  //console.log(breeds);
  return (
    breeds.map((breed, index) => {
      //const breedImg = props.getRandomImg(breed);
      return <Link to={`/dogs/${breed}`} className='breed' key={index} >
                <img src='/pawprint.png' alt='pawprint' />
                <h2>{breed}</h2>
            </Link>
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
