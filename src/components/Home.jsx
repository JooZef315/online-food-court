import React from "react";
import { Link } from "react-router-dom";

const Home = (props) => {
  return (
    <>
      <div className="row justify-content-center justify-content-sm-start">
        <h1 className="h1 col-11 m-auto ms-sm-5">The Food Court!</h1>
        {!props.islogged ? (
          <Link
            className="btn btn-lg btn-primary col-6 col-sm-4 col-lg-2 p-2 mt-4 m-auto ms-sm-5"
            to="/Login"
          >
            Sign in as Admin!
          </Link>
        ) : (
          <h3 className="text-center col-6 col-sm-4 col-lg-2 p-2 mt-4 m-auto ms-sm-5">
            Hello Admin!
          </h3>
        )}
      </div>
    </>
  );
};

export default Home;
