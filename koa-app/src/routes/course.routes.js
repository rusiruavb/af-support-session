const KoaRouter = require("koa-router");
const router = new KoaRouter({ prefix: "/course" });
const {
  addCourse,
  getCourses,
  updateCourse,
  deleteCourse,
} = require("../controller/course.controller");

router.post("/add", addCourse);
router.delete("/:courseId", deleteCourse);
router.put("/:courseId", updateCourse);
router.get("/", getCourses);

module.exports = router;
