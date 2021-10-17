import PropTypes from 'prop-types';
import { saveFavoriteCar } from '../actions/index';
import { useDispatch } from 'react-redux';

const Design = ({ price, owner, image, details, id }) => {
  const dispatch = useDispatch();
  const token = JSON.parse(localStorage.getItem('sessionID')).jwt;
  const userId = JSON.parse(localStorage.getItem('sessionID')).user.id;
  const clickHandler = (ids) => {
    ids = id;
    dispatch(saveFavoriteCar(ids, token, userId));
  };
  return (
    <>
    <div className="">
    <div className="">
     <img src={image} alt={owner} className="img"/>
     <span>${price}</span>
     <span>{details}</span>
    </div>
    <div className="w-50 mx-auto pb-3"><button type="button"  onClick={clickHandler}>Add to favorite</button></div>
    </div>
    </>
  )
};

Design.propTypes = {
  id: PropTypes.number,
  price: PropTypes.number,
  owner: PropTypes.string,
  image: PropTypes.string,
  details: PropTypes.string,
};

export default Design;
