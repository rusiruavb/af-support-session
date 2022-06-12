const KoaRouter = require("koa-router");
const {
  addStudent,
  getStudents,
  updateStudent,
  deleteStudent,
} = require("../controller/student.controller");
const router = new KoaRouter({ prefix: "/student" });

router.post("/add", addStudent);
router.delete("/:studentId", deleteStudent);
router.put("/:studentId", updateStudent);
router.get("/", getStudents);

module.exports = router;
