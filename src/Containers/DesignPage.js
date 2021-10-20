import { useSelector, useDispatch, connect } from 'react-redux';
import { useEffect } from 'react';
import Design from '../Components/Design';
import { design } from '../actions/index';
import Loading from '../Components/Loading';
import Nav from '../Components/Nav';

const DesignPages = () => {
  const state = useSelector((state) => state.designReducer.design);
  let message;
  const currentUser = JSON.parse(localStorage.getItem('sessionID')).user.name;
  const status = JSON.parse(localStorage.getItem('sessionID')).message;
  const dispatch = useDispatch();
  if (status === 'created') {
    message = 'Welcome';
  } else {
    message = 'Welcome back';
  };

  useEffect(() => {
    dispatch(design());
  }, [dispatch]);

  if (state.length === 0) {
    return (
      <Loading />
    );
  }
  return (
    <>
      <Nav name={currentUser} greetings={message} />
      <div className="home mx-auto row">
      {
        state.map((design) => (
          <div className="col-md-6 col-lg-4" role="presentation" key={design.id}>
            <Design price={design.price} image={design.image}
                    owner={design.owner} details={design.details}
                    id={design.id} 
            />
          </div>
        ))
      }
      </div>
    </>
  );
};

export default connect()(DesignPages);
