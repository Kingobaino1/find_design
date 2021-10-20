import { Link } from 'react-router-dom';

const LoadingPage = () => {
  return (
    <div className="landing">
     <div className="nav d-flex justify-content-end mb-5">
       <ul className="d-flex justify-content-between w-10 m-3">
         <li><Link to="/registration" className="text-secondary">SIGN UP</Link></li>
         <li><Link to="/login" className="text-secondary">SIGN IN</Link></li>
       </ul>
     </div>
     <div className="container d-flex flex-column m-5">
       <h1 className="text-white font-weight-bolder mt-5 w-50"> Looking for a luxury car without the luxury price?</h1>
       <p className="">  Our cars are in great condition! </p>
       <div type="submit" className="w-25"><Link className="btn color text-white" to="/registration">Start Free</Link></div>
     </div>
    </div>
  );
;}

export default LoadingPage;
