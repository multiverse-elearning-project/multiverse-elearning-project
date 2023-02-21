const express = require("express");
const app = express();
const { sequelize } = require("./db");
const PORT = process.env.PORT;
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const morgan = require("morgan");
const corsPolicy = require("./config/corsPolicy");
const credentials = require("./middlewares/credentials");
const verifyJWT = require("./middlewares/VerifyJWT");

app.use(credentials)
app.use(cors(corsPolicy));
app.use(morgan("dev"));
app.use(express.json());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// import all Routes 
const RegRoute = require("./routes/registration_r");
const RefreshTokenRoute = require("./routes/RefreshToken_r");
const LogoutRoute = require("./routes/logout_r");
const LoginRoute = require("./routes/login_r");
const CoursesRoute = require("./routes/Courses_r");
const LecturesRoute = require("./routes/Lectures_r");

//use all custom routes and middlewares
app.use("/signup", RegRoute);
app.use("/signin", LoginRoute);
app.use("/refresh", RefreshTokenRoute);
app.use("/signout", LogoutRoute);
app.use("/courses", CoursesRoute);
//app.use("/courses", LecturesRoute);
app.use(verifyJWT); // middlewares below this middleware will not be accessed unless user has valid and unexpired access token. every time user send a request they have to have unexpired accesToken that this middleware grabs from the request header (Bearer 'accessToken'). If it is expired refresh token should be sent along with the request to renew the access Token


//Error handling middleware
app.use((error, req, res, next) => {
  if (res.statusCode < 400) res.status(500);
  res.send({
    error: error.message,
    name: error.name,
    message: error.message,
    table: error.table,
  });
});

app.listen(PORT, () => {
  sequelize.sync({ force: false });
  console.log(`Server is running at http://localhost:${PORT}`);
});
