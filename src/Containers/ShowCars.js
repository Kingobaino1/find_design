import { useSelector, connect } from 'react-redux';
import Cars from '../Components/Cars';
import Loading from '../Components/Loading';
import FavNav from '../Components/FavNav';

const ShowCars = () => {
  const state = useSelector((state) => state.getCarsReducer.cars);
  const currentUser = JSON.parse(localStorage.getItem('sessionID')).user.name;

  if (state.length === 0) {
    return (
      <Loading />
    )
  };
  return (
    <>
      <FavNav name={currentUser} />
      <div className="home mx-auto mt-3 row">
      {
        state.map((cars) => (
          <div className="col-md-6 col-lg-4" role="presentation" key={cars.id}>
            <Cars price={cars.price} image={cars.image}
                  owner={cars.owner} details={cars.details}
            />
          </div>
        ))
      }
      </div>
    </>
  );
};

export default connect()(ShowCars);
