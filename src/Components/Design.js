import PropTypes from 'prop-types';

const Design = ({ price, owner, image, details, clickHandler }) => (
    <>
    <div className="">
    <div className="">
     <img src={image} alt={owner} className="img"/>
     <span>${price}</span>
     <span>{details}</span>
    </div>
    <div className="w-50 mx-auto pb-3"><button type="button"  onClick={() => clickHandler()}>Add to favorite</button></div>
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
