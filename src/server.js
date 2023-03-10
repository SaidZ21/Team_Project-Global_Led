import express from "express";
import path from "path";
import session from "express-session";
import store from "session-file-store";
import { pathMiddleware } from "./middlewares";
import customRender from "./utils/customRender";
import contactRouter from "./routes/ContactRouter";
import renderRouter from "./routes/renderRouter";
import servicesRouter from "./routes/servicesRouter";
import reviewRouter from "./routes/reviewRouter";

require("dotenv").config();

const PORT = process.env.PORT ?? 3000;

const app = express();

app.engine("jsx", customRender);
app.set("views", path.join(__dirname, "components"));
app.set("view engine", "jsx");

app.use(express.static("public"));
app.use(express.json());

const FileStore = store(session);
app.use(express.urlencoded({ extended: true }));

const sessionConfig = {
  name: "user_sid",
  secret: process.env.SESSION_SECRET ?? "test",
  resave: true,
  store: new FileStore(),
  saveUninitialized: false,
  cookie: {
    maxAge: 1000 * 60 * 60 * 12,
    httpOnly: true,
  },
};
app.use(session(sessionConfig));

app.use((req, res, next) => {
  res.locals.path = req.originalUrl;
  res.locals.user = req.session.user;
  next();
});
app.use(pathMiddleware);

app.use("/", renderRouter);
app.use("/services", servicesRouter);
app.use("/contacts", contactRouter);
app.use("/review", reviewRouter);

app.listen(PORT, () => {
  console.log("server start on port ", PORT);
});
