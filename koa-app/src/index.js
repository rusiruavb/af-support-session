require("dotenv").config();
const Koa = require("koa");
const KoaRouter = require("koa-router");
const cors = require("@koa/cors");
const bodyParser = require("koa-bodyparser");
const json = require("koa-bodyparser");
const { dbConnect } = require("./utils/dbConnect");
const courseRoutes = require("./routes/course.routes");
const studentRoutes = require("./routes/student.routes");

const app = new Koa();
const router = new KoaRouter();

app.use(cors());
app.use(bodyParser());
app.use(json());
app.use(router.routes()).use(router.allowedMethods());
app.use(courseRoutes.routes());
app.use(studentRoutes.routes());

router.get("/", (ctx) => {
  ctx.body = { message: "Student Management API" };
});

app.listen(9000, () => {
  dbConnect();
  console.log(`Server is up and running on http://localhost:9000`);
});
