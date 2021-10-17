import Design from './Design';
import { useSelector, useDispatch, connect } from 'react-redux';
import { useEffect } from 'react';
import { design } from '../actions/index';
import Loading from './Loading';
import Nav from './Nav';

const DesignPages = () => {
  const state = useSelector((state) => state.designReducer.design);
  const currentUser = JSON.parse(localStorage.getItem('sessionID')).user.name;
  const dispatch = useDispatch();

   useEffect(() => {
      dispatch(design());
  }, [dispatch]);
  if (state.length === 0) {
    return (
      <Loading />
    );
  };
    return(
      <>
        <Nav name={currentUser} />
        <div className="home mx-auto mt-3 row">
        {
          state.map((design) => (
            <div className="col-md-4" role="presentation" key={design.id}>
              <Design price={design.price} image={design.image} owner={design.owner} details={design.details} id={design.id}  />
            </div>
          ))
        }
        </div>
      </>
    );
};

export default connect()(DesignPages);
