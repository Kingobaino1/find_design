import React from 'react';
import { connect, useSelector } from 'react-redux';
import Loading from '../Components/Loading';
import FavNav from '../Components/FavNav';
import Show from '../Components/Show';

const SingleCar = () => {
  const state = useSelector((state) => state.singleCarReducer.cars);
  const currentUser = JSON.parse(localStorage.getItem('sessionID')).user.name;

  if (state.length === 0) {
    return (
      <Loading />
    );
  }
  return (
    <>
      <FavNav name={currentUser}/>
        <div className="container single d-flex flex-column" key={state.car.id}>
          <div className="w-25 d-flex flex-column single">
            <Show image={state.car.image} price={state.car.price} about={state.car.about} details={state.car.details} id={state.car.id} />
          </div>
        </div>
    </>
  );
};

export default connect()(SingleCar);
