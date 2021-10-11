import Design from './Design';
import { useSelector, useDispatch, connect } from 'react-redux';
import { useEffect } from 'react'
import { design } from '../actions/index';
import Loading from './Loading';

const DesignPages = () => {
  const state = useSelector((state) => state.designReducer.design);
  const dispatch = useDispatch();
  const clickHandler = () => {
  console.log('Hello world!')
  }
   useEffect(() => {
      dispatch(design());
  }, [dispatch]);
  if (state.length === 0) {
    return (
      <Loading />
    );
  }
    return(
      <>
        <div className="container mt-5 row">
        {
          state.map((design) => (
            
            <div className="col-md-4" role="presentation" key={design.id}>
              <Design price={design.price} image={design.image} owner={design.owner} details={design.details} clickHandler={clickHandler} />
            </div>
          ))
          
        }
        </div>
      </>
    )
}

export default connect()(DesignPages);
