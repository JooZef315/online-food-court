import Joi from "joi-browser";

export const validate = (name, price) => {
  let schema = {
    name: Joi.string().required(),
    price: Joi.number().required(),
  };
  const valdation = Joi.validate({ name, price }, schema, {
    abortEarly: false,
  });
  let erroeMess = valdation.error ? valdation.error.details : [];
  let nameErrMes = erroeMess.filter((e) => e.path == "name")[0]?.message;
  let priceErrMes = erroeMess.filter((e) => e.path == "price")[0]?.message;

  return { nameErrMes, priceErrMes };
};
