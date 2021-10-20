import PropTypes from 'prop-types';
import { getSingleCar } from '../actions/index';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

const Design = ({ price, owner, image, id }) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const clickHandler = (ids) => {
    ids = id;
    dispatch(getSingleCar(ids));
    history.push('/car')
  };
  return (
    <>
    <div className="">
    <div className="d-flex flex-column mt-4">
     <img onClick={clickHandler} src={image} alt={owner} className="img"/>
     <div className="d-flex justify-content-between home mt-3">
      <span>{owner}</span>
      <div className="pr-3">
        <div className="pr-1">${price} / month</div>
      </div>
     </div>
    </div>
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
