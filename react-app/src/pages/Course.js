import React, { useEffect, useState } from "react";
import axios from "axios";

const CoursePage = () => {
  const [courseName, setCourseName] = useState("");
  const [courseFee, setCourseFee] = useState("");
  const [courses, setCourses] = useState([]);
  const [isEditClick, setIsEditClick] = useState(false);
  const [editId, setEditId] = useState("");

  const [editName, setEditName] = useState("");
  const [editFee, setEditFee] = useState("");

  useEffect(() => {
    axios.get(`${process.env.BASE_URL}/course/`).then((res) => {
      setCourses(res.data);
    });
  }, []);

  const saveData = (e) => {
    e.preventDefault();
    const courseObj = {
      courseName,
      courseFee,
    };

    axios
      .post(`${process.env.BASE_URL}/course/add`, courseObj)
      .then((res) => {
        alert("Data added");
        axios.get(`${process.env.BASE_URL}/course/`).then((res) => {
          setCourses(res.data);
        });
        setCourseName("");
        setCourseFee("");
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  const updateData = (e) => {
    e.preventDefault();
    const courseObj = {
      courseName: editName,
      courseFee: editFee,
    };
    console.log(courseObj);

    axios
      .put(`${process.env.BASE_URL}/course/${editId}`, courseObj)
      .then((res) => {
        alert("Course Updated");
        axios.get(`${process.env.BASE_URL}/course/`).then((res) => {
          setCourses(res.data);
        });
        setIsEditClick(false);
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  const deleteCourse = (e) => {
    e.preventDefault();
    axios
      .delete(`${process.env.BASE_URL}/course/${e.target.id}`)
      .then(() => {
        axios.get(`${process.env.BASE_URL}/course/`).then((res) => {
          setCourses(res.data);
        });
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  const onEditClick = (e) => {
    e.preventDefault();
    setEditId(e.target.id);
    setIsEditClick(!isEditClick);

    const course = courses.find((course) => course._id === e.target.id);
    setEditName(course.courseName);
    setEditFee(course.courseFee);
  };

  return (
    <div>
      <h1>Course Page</h1>
      <div>
        <input
          type="text"
          placeholder="Enter course name"
          value={courseName}
          style={{ margin: 5 }}
          onChange={(e) => setCourseName(e.target.value)}
        />
        <input
          type="number"
          placeholder="Enter course free"
          value={courseFee}
          style={{ margin: 5 }}
          onChange={(e) => setCourseFee(e.target.value)}
        />
        <button onClick={(e) => saveData(e)} style={{ margin: 5 }}>
          Submit
        </button>
        <br />

        <table>
          <tr>
            <th>Course Name</th>
            <th>Course Fee</th>
            <th>Actions</th>
          </tr>
          {courses &&
            courses.length > 0 &&
            courses.map((course, index) => (
              <tr key={index}>
                <td>
                  {isEditClick && course._id === editId ? (
                    <input
                      type="text"
                      value={editName}
                      onChange={(e) => setEditName(e.target.value)}
                    />
                  ) : (
                    course.courseName
                  )}
                </td>
                <td>
                  {isEditClick && course._id === editId ? (
                    <input
                      type="number"
                      value={editFee}
                      onChange={(e) => setEditFee(e.target.value)}
                    />
                  ) : (
                    course.courseFee
                  )}
                </td>
                <td>
                  <button id={course._id} onClick={(e) => onEditClick(e)}>
                    {isEditClick && course._id === editId ? "Cancel" : "Update"}
                  </button>
                  {isEditClick && course._id === editId && (
                    <button onClick={(e) => updateData(e)}>Save</button>
                  )}
                  <button id={course._id} onClick={(e) => deleteCourse(e)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
        </table>
      </div>
    </div>
  );
};

export default CoursePage;
