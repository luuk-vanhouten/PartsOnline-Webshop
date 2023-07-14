import dataAccess from "../db/dataAccess.js";

let classes = {};

function registerCustomer(request, response) {
  // console.log(request);
  const first_name = request.body.first_name;
  const last_name = request.body.last_name;
  const email = request.body.email;
  const password = request.body.password;
  const phone_number = request.body.phone_number;
  const address = request.body.address;
  const city = request.body.city;
  const state = request.body.state;
  const zip_code = request.body.zip_code;
  const country = request.body.country;
  classes = dataAccess.registerNewCustomer(
    first_name,
    last_name,
    email,
    password,
    phone_number,
    address,
    city,
    state,
    zip_code,
    country
  );
  if (classes) {
    response.status(200);
    response.json(classes);
  } else {
    response.status(404);
    response.json({ message: "Something went wrong" });
  }
}

function loginCustomer(request, response) {
  const email = request.body.email;
  const password = request.body.password;
  classes = dataAccess.loginCustomer(email, password);
  if (classes && classes.length > 0) {
    response.status(200);
    response.json("Ingelogd");
    
  } else {
    response.json("Email of wachtwoord is onjuist");
    response.status(404);
  }
}

function putLogin(request, response) {
  console.log(request.params);
  classes = dataAccess.updateQuery6Params(
    "customer",
    request.params.first_name,
    request.params.last_name,
    request.params.email,
    request.params.password,
    request.params.phone_number,
    request.params.address,
    request.params.city,
    request.params.state,
    request.params.zip_code,
    request.params.country
  );
  if (classes) {
    response.status(200);
    response.json(classes);
  } else {
    response.status(404);
    response.json();
  }
}

function deleteLogin(request, response) {
  classes = dataAccess.DeleteQuery2Params(
    "customer",
    request.params.email,
    request.params.password
  );
  if (classes) {
    response.status(200);
    response.json(classes);
  } else {
    response.status(404);
    response.json();
  }
}

const functions = {
  registerCustomer: registerCustomer,
  loginCustomer: loginCustomer,
  putLogin: putLogin,
  deleteLogin: deleteLogin,
};

export default functions;