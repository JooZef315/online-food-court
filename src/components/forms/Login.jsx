import React, { useState } from "react";
import Joi from "joi-browser";

const Login = ({ ToggleIslogged }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({
    usernameErrMes: null,
    passwordErrMes: null,
  });

  let schema = {
    username: Joi.string().required(),
    password: Joi.string().min(3).required(),
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const { usernameErrMes, passwordErrMes } = validate();
    if (!usernameErrMes && !passwordErrMes) {
      ToggleIslogged(true);
    }
  };

  const validate = () => {
    const valdation = Joi.validate({ username, password }, schema, {
      abortEarly: false,
    });
    let erroeMess = valdation.error ? valdation.error.details : [];
    let usernameErrMes = erroeMess.filter((e) => e.path == "username")[0]
      ?.message;
    if (!usernameErrMes && username !== "admin") {
      usernameErrMes = "username is Wrong!";
    }
    let passwordErrMes = erroeMess.filter((e) => e.path == "password")[0]
      ?.message;
    if (!passwordErrMes && password !== "admin") {
      passwordErrMes = "password is Wrong!";
    }
    setErrors({ usernameErrMes, passwordErrMes });
    return { usernameErrMes, passwordErrMes };
  };

  return (
    <div className="container ">
      <h1>Admin Login</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="Username" className="form-label">
            Username
          </label>
          <input
            type="text"
            className="form-control"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          {errors.usernameErrMes && (
            <div className="alert alert-danger">{errors.usernameErrMes}</div>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {errors.passwordErrMes && (
            <div className="alert alert-danger">{errors.passwordErrMes}</div>
          )}
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Login;
