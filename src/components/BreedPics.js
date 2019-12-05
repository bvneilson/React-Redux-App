import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getBreedPics } from '../actions';

const BreedPics = props => {

  useEffect(() => {
    props.getBreedPics(props.match.params.breed)
  }, [props.match.params.breed])

  if(!props.breedPics || props.breedPics.length === 0) {
    return <h2>Loading...</h2>
  }

  return (
    props.breedPics.map((photo, index) => {
      return <div className='dog-photo' key={index}>
              <img src={photo} alt="doggo" />
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
    breedPics: state.breedPics
  }
}

export default connect(mapStateToProps, { getBreedPics })(BreedPics);
