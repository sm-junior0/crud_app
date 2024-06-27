import React, { useEffect, useState } from "react";
import { FaHome } from "react-icons/fa";
import { useNavigate, Link } from "react-router-dom";
import "./styles.css";

function App() {
  const navigate = useNavigate();
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/all", {
      headers: {
        "Content-Type": "application/json",
      },
      method: "GET",
    })
      .then((data) => data.json())
      .then((response) => {
        const res = response.items;
        setItems(res);
      })
      .catch((e) => console.error(e));
  }, []);

  const deleteItem = (id) => {
    fetch(`http://localhost:5000/delete/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then(() => {
        setItems((prevItems) => prevItems.filter((item) => item._id !== id));
      })
      .catch((error) => console.error(error));
  };

  return (
    <div>
      <FaHome size={30} onClick={() => navigate("/")} className="nav" />
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Position</th>
            <th>Company</th>
            <th>Business Arena</th>
            <th>Employees</th>
            <th>Street + Number</th>
            <th>Additional Info</th>
            <th>ZIP Code</th>
            <th>Place</th>
            <th>Country Code</th>
            <th>Phone Number</th>
            <th>Email</th>
            <th colSpan={2}>Operation</th>
          </tr>
        </thead>
        <tbody>
          {items.length > 0 &&
            items.map((item) => (
              <tr key={item._id}>
                <td>{item.title}</td>
                <td>{item.firstName}</td>
                <td>{item.lastName}</td>
                <td>{item.position}</td>
                <td>{item.company}</td>
                <td>{item.businessArena}</td>
                <td>{item.employees}</td>
                <td>{item.streetNumber}</td>
                <td>{item.additionalInfo}</td>
                <td>{item.zipCode}</td>
                <td>{item.place}</td>
                <td>{item.countryCode}</td>
                <td>{item.phoneNumber}</td>
                <td>{item.email}</td>
                <td>
                  <Link to={`/update/${item._id}`} className="edit-btn">
                    Update
                  </Link>
                  <button className="delete-btn" onClick={() => deleteItem(item._id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          {items.length === 0 && (
            <tr>
              <td colSpan="15">You have no items</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default App;
