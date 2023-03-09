import express from "express";
import path from "path";
import { pathMiddleware } from "./middlewares";
import customRender from "./utils/customRender";
import renderRouter from "./routes/renderRouter";
import servisesRouter from "./routes/servisesRouter";
import contactRouter from "./routes/ContactRouter";
import reviewRouter from "./routes/reviewRouter";

require("dotenv").config();

const PORT = process.env.PORT ?? 3000;

const app = express();

app.engine("jsx", customRender);
app.set("views", path.join(__dirname, "components"));
app.set("view engine", "jsx");

app.use(express.static("public"));
app.use(express.json());

// app.use(session({
//   name: 'sid',
//   store: new FileStore(),
//   secret: 'nklvsnklvdsnjvsnj',
//   saveUninitialized: false,
//   resave: false,
// }));

app.use(pathMiddleware);

app.use("/", renderRouter);
app.use("/servises", servisesRouter);
app.use("/contacts", contactRouter);
app.use("/review", reviewRouter);

app.listen(PORT, () => {
  console.log("server start on port ", PORT);
});
