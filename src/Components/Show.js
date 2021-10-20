import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { saveFavoriteCar } from '../actions/index';

const Show = ({
  image,
  about,
  price,
  details,
  id,
  }) => {
  const token = JSON.parse(localStorage.getItem('sessionID')).jwt;
  const userId = JSON.parse(localStorage.getItem('sessionID')).user.id;
  const dispatch = useDispatch();
  const clickHandler = (ids) => {
    ids = id;
    dispatch(saveFavoriteCar(ids, token, userId));
  };
  return (
    <>
      <div>
        <img className="img" src={image} alt="food" />
      </div>
      <div className="about d d-flex justify-content-between">
        <h6 className="text-white">{about}</h6>
        <div className="d-flex flex-column tex">
          <div className="text-white font-weight-bold">
            ${price}
          </div>
          <div className="text-white font-weight-light">per month</div>
        </div>
      </div>
      <div className="list">
        <h6 className="">About this listing</h6>
        <p>{details}</p>
      </div>
      <div className="w-100 pb-3"><button className="text color btn text-white" type="button" onClick={clickHandler}>Add to favorite</button></div>
    </>
  );
};

Show.propTypes = {
  id: PropTypes.number,
  price: PropTypes.number,
  owner: PropTypes.string,
  about: PropTypes.string,
  image: PropTypes.string,
  details: PropTypes.string,
};
export default Show;
