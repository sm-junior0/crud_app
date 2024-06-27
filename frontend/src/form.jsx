import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './style.css';

function FormV10() {
  const [formData, setFormData] = useState({
    title: "",
    firstName: "",
    lastName: "",
    position: "",
    company: "",
    businessArena: "",
    employees: "",
    streetNumber: "",
    additionalInformation: "",
    zipCode: "",
    place: "",
    country: "",
    code: "",
    phoneNumber: "",
    email: "",
    acceptTerms: false
  });

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value
    }));
  };

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    fetch("http://localhost:5000/new", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    })
      .then((response) => {
        if (response.ok) {
          alert("Data added successfully");
          navigate("/view");
        } else {
          alert("Failed to add data");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("An error occurred while adding data");
      });
  };

  return (
    <>
      <p
        className="view"
        onClick={() => navigate('/view')}
        style={{
          color: 'rgba(76,68,182,0.808)',
          padding: '7px 15px',
          border: 'none',
          borderRadius: '6px',
          cursor: 'pointer',
          fontSize: '16px',
        }}
      >
        View data
      </p>
      <div className="page-content">
        <div className="form-v10-content">
          <form className="form-detail" onSubmit={handleSubmit}>
            <div className="form-left">
              <h2>General Information</h2>
              <div className="form-row">
                <select name="title" value={formData.title} onChange={handleChange}>
                  <option value="">Title</option>
                  <option value="businessman">Businessman</option>
                  <option value="reporter">Reporter</option>
                  <option value="secretary">Secretary</option>
                </select>
                <span className="select-btn">
                  <i className="zmdi zmdi-chevron-down"></i>
                </span>
              </div>
              <div className="form-group">
                <div className="form-row form-row-1">
                  <input
                    type="text"
                    name="firstName"
                    className="input-text"
                    placeholder="First Name"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-row form-row-2">
                  <input
                    type="text"
                    name="lastName"
                    className="input-text"
                    placeholder="Last Name"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="form-row">
                <select name="position" value={formData.position} onChange={handleChange}>
                  <option value="">Position</option>
                  <option value="director">Director</option>
                  <option value="manager">Manager</option>
                  <option value="employee">Employee</option>
                </select>
                <span className="select-btn">
                  <i className="zmdi zmdi-chevron-down"></i>
                </span>
              </div>
              <div className="form-row">
                <input
                  type="text"
                  name="company"
                  className="company"
                  placeholder="Company"
                  value={formData.company}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <div className="form-row form-row-3">
                  <input
                    type="text"
                    name="businessArena"
                    className="business"
                    placeholder="Business Arena"
                    value={formData.businessArena}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-row form-row-4">
                  <select name="employees" value={formData.employees} onChange={handleChange}>
                    <option value="">Employees</option>
                    <option value="trainee">Trainee</option>
                    <option value="colleague">Colleague</option>
                    <option value="associate">Associate</option>
                  </select>
                  <span className="select-btn">
                    <i className="zmdi zmdi-chevron-down"></i>
                  </span>
                </div>
              </div>
            </div>
            <div className="form-right">
              <h2>Contact Details</h2>
              <div className="form-row">
                <input
                  type="text"
                  name="streetNumber"
                  className="street"
                  placeholder="Street + Nr"
                  value={formData.streetNumber}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-row">
                <input
                  type="text"
                  name="additionalInformation"
                  className="additional"
                  placeholder="Additional Information"
                  value={formData.additionalInformation}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <div className="form-row form-row-1">
                  <input
                    type="text"
                    name="zipCode"
                    className="zip"
                    placeholder="Zip Code"
                    value={formData.zipCode}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-row form-row-2">
                  <select name="place" value={formData.place} onChange={handleChange}>
                    <option value="">Place</option>
                    <option value="Street">Street</option>
                    <option value="District">District</option>
                    <option value="City">City</option>
                  </select>
                  <span className="select-btn">
                    <i className="zmdi zmdi-chevron-down"></i>
                  </span>
                </div>
              </div>
              <div className="form-row">
                <select name="country" value={formData.country} onChange={handleChange}>
                  <option value="">Country</option>
                  <option value="Vietnam">Vietnam</option>
                  <option value="Malaysia">Malaysia</option>
                  <option value="India">India</option>
                </select>
                <span className="select-btn">
                  <i className="zmdi zmdi-chevron-down"></i>
                </span>
              </div>
              <div className="form-group">
                <div className="form-row form-row-1">
                  <input
                    type="text"
                    name="code"
                    className="code"
                    placeholder="Code +"
                    value={formData.code}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-row form-row-2">
                  <input
                    type="text"
                    name="phoneNumber"
                    className="phone"
                    placeholder="Phone Number"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="form-row">
                <input
                  type="email"
                  name="email"
                  className="input-text"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-checkbox">
                <label className="container">
                  <p>
                    I do accept the{" "}
                    <a href="#" className="text">
                      Terms and Conditions
                    </a>{" "}
                    of your site.
                  </p>
                  <input
                    type="checkbox"
                    name="acceptTerms"
                    checked={formData.acceptTerms}
                    onChange={handleChange}
                  />
                  <span className="checkmark"></span>
                </label>
              </div>
              <div className="form-row-last">
                <input type="submit" name="register" className="register" value="Register Badge" />
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default FormV10;
