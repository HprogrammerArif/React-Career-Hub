import { Link } from "react-router-dom";


const ErrorPage = () => {
  return (
    <div>
      <h2>Opps!!!!</h2>
      <Link className="btn" to='/'>Go Back Home</Link>
    </div>
  );
};

export default ErrorPage;