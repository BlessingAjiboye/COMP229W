const jwt = require("jsonwebtoken");
const App_SECRET = "secret";
const USERNAME = "admin";
const PASSWORD = "123456";

const mappings = {
  get: ["/api/orders", "/orders"],
  post: ["/api/bookList"],
};
