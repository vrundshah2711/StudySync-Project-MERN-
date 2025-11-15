import React, { useState, useContext, useEffect } from "react";
import axios from "axios";
import "./Courses.css";
import { AuthContext } from "../context/AuthContext";
import course1 from "../assets/frontend devlopment img.png";
import course2 from "../assets/backend img.jpg";
import course3 from "../assets/datascience img.jpg";
import course4 from "../assets/UI-UX.jpg";
import course5 from "../assets/DEVOPS.jpg";
import course6 from "../assets/Deep learning.jpg";

export default function Courses() {
  const { token, user } = useContext(AuthContext);
  const [enrolledCourses, setEnrolledCourses] = useState([]);
  const [loading, setLoading] = useState(false);

  const courseList = [
    { title: "Frontend Web Development", desc: "Learn HTML, CSS, JavaScript and React.", level: "Beginner", img: course1 },
    { title: "Backend with Node.js & Express", desc: "Master REST APIs, authentication, MongoDB.", level: "Intermediate", img: course2 },
    { title: "Data Science with Python", desc: "Work with data analysis, visualization, and ML.", level: "Advanced", img: course3 },
    { title: "UI/UX Design Fundamentals", desc: "Understand user experience, wireframing, and design.", level: "Beginner", img: course4 },
    { title: "DevOps & Cloud Basics", desc: "Learn CI/CD, Docker, and cloud fundamentals.", level: "Intermediate", img: course5 },
    { title: "AI & Deep Learning", desc: "Explore neural networks, TensorFlow, and models.", level: "Advanced", img: course6 },
  ];

  // Fetch enrolled courses when user is logged in
  useEffect(() => {
    const fetchEnrollments = async () => {
      if (user && token) {
        try {
          setLoading(true);
          const res = await axios.get("http://localhost:5000/api/enroll", {
            headers: { Authorization: `Bearer ${token}` },
          });
          if (res.data.success && res.data.data) {
            // Extract course titles from enrollment data
            const courseTitles = res.data.data.map((enrollment) => enrollment.courseTitle);
            setEnrolledCourses(courseTitles);
          }
        } catch (err) {
          console.error("Error fetching enrollments:", err);
          // If error, clear enrollments
          setEnrolledCourses([]);
        } finally {
          setLoading(false);
        }
      } else {
        // Clear enrollments when user logs out
        setEnrolledCourses([]);
      }
    };

    fetchEnrollments();
  }, [user, token]);

  const handleEnroll = async (title) => {
    if (!user || !token) {
      alert("Please login first to enroll in a course!");
      return;
    }

    // Prevent duplicate enrollment attempts if already in state
    if (enrolledCourses.includes(title)) {
      return;
    }

    try {
      const res = await axios.post(
        "http://localhost:5000/api/enroll",
        { courseTitle: title },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      
      if (res.data.success) {
        // Show success message
        if (res.data.message && res.data.message !== "Already enrolled") {
          alert(res.data.message);
        }
        // Refetch enrollments to ensure sync with backend (handles both new and existing enrollments)
        const enrollRes = await axios.get("http://localhost:5000/api/enroll", {
          headers: { Authorization: `Bearer ${token}` },
        });
        if (enrollRes.data.success && enrollRes.data.data) {
          const courseTitles = enrollRes.data.data.map((enrollment) => enrollment.courseTitle);
          setEnrolledCourses(courseTitles);
        }
      }
    } catch (err) {
      const errorMessage = err.response?.data?.message || "Enrollment failed. Please try again.";
      // Don't show alert for 401/403 errors, just log
      if (err.response?.status === 401 || err.response?.status === 403) {
        console.error("Authentication error:", errorMessage);
      } else {
        alert(errorMessage);
      }
      console.error(err);
    }
  };

  return (
    <section className="courses_container" data-aos="fade-up">
      <h2 className="courses_title">Explore Our <span>Courses</span></h2>
      <p className="courses_subtitle">
        Choose from our wide range of skill-focused programs to accelerate your learning journey.
      </p>

      <div className="courses_grid">
        {courseList.map((course, i) => (
          <div className="course_card" key={i}>
            <div className="course_img_container">
              <img src={course.img} alt={course.title} className="course_img" />
            </div>
            <div className="course_info">
              <h3>{course.title}</h3>
              <p>{course.desc}</p>
              <div className="course_meta">
                <span className={`course_level ${course.level.toLowerCase()}`}>
                  {course.level}
                </span>
                <button
                  className="enroll_btn"
                  onClick={() => handleEnroll(course.title)}
                  disabled={enrolledCourses.includes(course.title)}
                >
                  {enrolledCourses.includes(course.title)
                    ? "✅ Enrolled"
                    : "Enroll Now"}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
