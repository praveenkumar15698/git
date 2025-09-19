import React, { useState } from "react";

function CollegeStudentForm() {
  const [formData, setFormData] = useState({
    name: "",
    branch: "",
    interest: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      `Student Details Submitted:\nName: ${formData.name}\nBranch: ${formData.branch}\nInterest: ${formData.interest}`
    );
    setFormData({ name: "", branch: "", interest: "" });
  };

  return (
    <div className="app" style={{ padding: "20px", fontFamily: "Arial" }}>
      {/* College Details */}
      <div style={{ marginBottom: "20px" }}>
        <h1>Srinivasa Ramanujam Institute of Technology</h1>
        <p>Location: Anantapur, Andhra Pradesh</p>
        <p>Established: 2008</p>
        <p>Accredited by AICTE, NBA & NAAC</p>
      </div>

      {/* Student Form */}
      <form
        onSubmit={handleSubmit}
        style={{
          border: "1px solid #ccc",
          padding: "20px",
          borderRadius: "8px",
          maxWidth: "400px",
        }}
      >
        <h2>Student Registration Form</h2>

        <label>Student Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          style={{ display: "block", margin: "8px 0", width: "100%" }}
        />

        <label>Branch:</label>
        <select
          name="branch"
          value={formData.branch}
          onChange={handleChange}
          required
          style={{ display: "block", margin: "8px 0", width: "100%" }}
        >
          <option value="">Select Branch</option>
          <option value="CSE">Computer Science</option>
          <option value="ECE">Electronics & Communication</option>
          <option value="EEE">Electrical Engineering</option>
          <option value="ME">Mechanical Engineering</option>
          <option value="CE">Civil Engineering</option>
        </select>

        <label>Interested In:</label>
        <div style={{ margin: "8px 0" }}>
          <label>
            <input
              type="radio"
              name="interest"
              value="AI"
              checked={formData.interest === "AI"}
              onChange={handleChange}
              required
            />
            Artificial Intelligence
          </label>
          <br />
          <label>
            <input
              type="radio"
              name="interest"
              value="Robotics"
              checked={formData.interest === "Robotics"}
              onChange={handleChange}
            />
            Robotics
          </label>
          <br />
          <label>
            <input
              type="radio"
              name="interest"
              value="Web Development"
              checked={formData.interest === "Web Development"}
              onChange={handleChange}
            />
            Web Development
          </label>
          <br />
          <label>
            <input
              type="radio"
              name="interest"
              value="Data Science"
              checked={formData.interest === "Data Science"}
              onChange={handleChange}
            />
            Data Science
          </label>
        </div>

        <button type="submit" style={{ marginTop: "10px", padding: "8px 12px" }}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default CollegeStudentForm;
