import { useState } from "react";
import "./CustomerModal.css";

function CustomerModal({ closeModal, addCustomer }) {

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = () => {
    if (
      formData.name === "" ||
      formData.phone === "" ||
      formData.email === ""
    ) {
      alert("Please fill all required fields");
      return;
    }

    addCustomer(formData);
  };

  return (
    <div className="modal-overlay">
      <div className="modal">

        <h2>Add Customer</h2>

        <input
          type="text"
          name="name"
          placeholder="Customer Name"
          value={formData.name}
          onChange={handleChange}
        />

        <input
          type="text"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
        />

        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
        />

        <input
          type="text"
          name="address"
          placeholder="Address"
          value={formData.address}
          onChange={handleChange}
        />

        <div className="modal-buttons">

          <button
            className="save-btn"
            onClick={handleSave}
          >
            Save
          </button>

          <button
            className="cancel-btn"
            onClick={closeModal}
          >
            Cancel
          </button>

        </div>

      </div>
    </div>
  );
}

export default CustomerModal;