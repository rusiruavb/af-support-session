const Course = require("../models/course.model");

const addCourse = async (ctx) => {
  try {
    const { courseName, courseFee, students } = ctx.request.body;

    const course = await Course.create({
      courseName: courseName,
      courseFee: courseFee,
      students: students,
    });

    return (ctx.body = course);
  } catch (error) {
    return (ctx.body = { message: error.message });
  }
};

const getCourses = async (ctx) => {
  try {
    const courses = await Course.find({}).populate({ path: "students", select: "name nic age" });
    return (ctx.body = courses);
  } catch (error) {
    return (ctx.body = { message: error.message });
  }
};

const updateCourse = async (ctx) => {
  try {
    const courseId = ctx.params.courseId;

    const { courseName, courseFee, students } = ctx.request.body;
    const course = await Course.findByIdAndUpdate(courseId, {
      courseName: courseName,
      courseFee: courseFee,
      students: students,
    });
    return (ctx.body = course);
  } catch (error) {
    return (ctx.body = { message: error.message });
  }
};

const deleteCourse = async (ctx) => {
  try {
    const courseId = ctx.params.courseId;
    const course = await Course.findByIdAndDelete(courseId);
    return (ctx.body = course);
  } catch (error) {
    return (ctx.body = { message: error.message });
  }
};

module.exports = {
  addCourse,
  getCourses,
  updateCourse,
  deleteCourse,
};
