import PropTypes from 'prop-types';

const Cars = ({
  image,
  owner,
  price,
  details,
}) => (
  <>
    <div className="">
      <div className="">
        <img src={image} alt={owner} className="img" />
        <span>
          $
          {price}
        </span>
        <span>{details}</span>
      </div>
    </div>
  </>
);

Cars.propTypes = {
  image: PropTypes.string.isRequired,
  owner: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  details: PropTypes.string.isRequired,
};

export default Cars;
