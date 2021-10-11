import PropTypes from 'prop-types';

const Design = ({ price, owner, image, details, clickHandler }) => (
    <>
    <div className="">
    <div className="">
     <img src={image} alt={owner} className="img"/>
     <span>${price}</span>
     <span>{details}</span>
    </div>
    <button type="button"  onClick={() => clickHandler()}>Add to favorite</button>
    </div>
    </>
);

Design.propTypes = {
  price: PropTypes.number,
  clickHandler: PropTypes.func.isRequired,
  owner: PropTypes.string,
  image: PropTypes.string,
  details: PropTypes.string,
};

export default Design;
