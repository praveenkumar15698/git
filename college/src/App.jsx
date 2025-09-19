import React from "react";
import CollegeStudentForm from "./CollegeStudentForm";

function App() {
  return <CollegeStudentForm />;
}

export default App;

// src/NavTabs.jsx
import React, { useState } from "react";
import "./NavTabs.css";

export default function NavTabs() {
  const [activeTab, setActiveTab] = useState("home");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: "smooth" }); // scrolls to top
  };

  return (
    <div>
      <nav className="nav-bar">
        <button
          className={activeTab === "home" ? "tab active" : "tab"}
          onClick={() => handleTabClick("home")}
        >
          Home
        </button>
        <button
          className={activeTab === "about" ? "tab active" : "tab"}
          onClick={() => handleTabClick("about")}
        >
          About
        </button>
        <button
          className={activeTab === "contact" ? "tab active" : "tab"}
          onClick={() => handleTabClick("contact")}
        >
          Contact
        </button>
      </nav>

      <div className="tab-content">
        {activeTab === "home" && <h2>Welcome to Home Page</h2>}
        {activeTab === "about" && <h2>About Us: This is our college information</h2>}
        {activeTab === "contact" && <h2>Contact Page: Get in touch</h2>}
      </div>
    </div>
  );
}
