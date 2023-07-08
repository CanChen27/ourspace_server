const express = require("express");

const app = express(); 


//cors
const cors = require("cors");

app.use(cors());

app.use(express.urlencoded({ extended: false }));

var bodyParser = require("body-parser");
app.use(bodyParser.json()); // to support JSON-encoded bodies
app.use(
  bodyParser.urlencoded({
    // to support URL-encoded bodies
    extended: true,
  })
);


//'intermediario' siempre antes de los routers
var { expressjwt: jwt } = require('express-jwt');

const config = require("./config");

//al realizar incorporar expresJWT user tiene un nuevo parámetro req.user
// app.use(expressJWT({ secret: config.jwtSecretKey, algorithms: ["HS256"] }).unless({path: [/^\/api/]}));
app.use(jwt({ secret: config.secretKey, algorithms: ["HS256"] }).unless({path: [/^\/api/]}));

app.use((req, res, next) => {
  res.cc = function (err, status = 1) {
    res.send({
      status,
      message: err instanceof Error ? err.message : err,
    });
  };
  next();
});


console.log("cchen>> router")

//routers
const resources_router = require("./router/resources");
app.use("/api/resources", resources_router);

const details_router = require("./router/details");
app.use("/api/resources/details", details_router);

const comments_router = require("./router/comments");
app.use("/api/resources/comments", comments_router);


const userRouter = require('./router/user');
app.use("/api", userRouter);

// const user_router = require("./router/user");
// app.use("/api", user_router);

const admin_router = require("./router/admin");
app.use("/my/admin", admin_router);

const userInfo_router = require("./router/userInfo");
app.use("/my", userInfo_router);

//error
app.use((err, req, res, next) => {
  // if (err instanceof joi.Validation)
  //   return res.send({ status: 100, message: err.message });

  if (err.name === "UnauthorizedError")
    return res.send({ status: 100, message: "Error en la autenticacion" });
});

 


app.listen(3770, () => {
  console.log("servidor api corriendo en http://localhost:3770");
});
