import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { getSingleCar } from '../actions/index';

const Design = ({
  id,
  price,
  owner,
  image,
}) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const clickHandler = () => {
    const ids = id;
    dispatch(getSingleCar(ids));
    history.push('/car');
  };
  return (
    <>
      <div className="">
        <div className="d-flex flex-column mt-4">
          <img onClick={clickHandler} src={image} alt={owner} className="img" role="presentation" />
          <div className="d-flex justify-content-between home mt-3">
            <span>{owner}</span>
            <div className="pr-3">
              <div className="pr-1">
                $
                {price}
                {' '}
                / month
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

Design.propTypes = {
  id: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  owner: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default Design;
