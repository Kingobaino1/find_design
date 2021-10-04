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
  const array = state.forEach((design) => console.log(design));
  console.log(array, 'hello');
  if (state.length === 0) {
    return (
      <Loading />
    );
  }
  return(
    <div className="">
      Hello Javascript
    {
      state.forEach((design) => (
        
        // <div className="" role="presentation" key={design.id}>
        //   {console.log(design, 'design')}
          <Design price={state.price} image={state.image} owner={state.owner} details={state.details} clickHandler={clickHandler} />
        // </div>
      ))
      
    }
  
    </div>
  )

}

export default connect()(DesignPages);
