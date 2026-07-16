import { useState } from "react";
import Sidebar from "../components/Dashboard/Sidebar";
import Header from "../components/Dashboard/Header";
import CustomerTable from "../components/Dashboard/CustomerTable/CustomerTable";
import CustomerModal from "../components/Dashboard/CustomerModal/CustomerModal";
import "./Dashboard.css";

function Customers() {
  const [showModal, setShowModal] = useState(false);

  const [customers, setCustomers] = useState([
    {
      id: 1,
      name: "Ajay Sharma",
      phone: "9876543210",
      email: "ajay@email.com",
      address: "Sonipat",
      status: "Active",
    },
  ]);

  const addCustomer = (customer) => {
    setCustomers([
      ...customers,
      {
        id: Date.now(),
        ...customer,
        status: "Active",
      },
    ]);

    setShowModal(false);
  };

  return (
    <div className="dashboard">
      <Sidebar />

      <div className="main-content">
        <Header />

        <CustomerTable
          customers={customers}
          openModal={() => setShowModal(true)}
        />

        {showModal && (
          <CustomerModal
            closeModal={() => setShowModal(false)}
            addCustomer={addCustomer}
          />
        )}
      </div>
    </div>
  );
}

export default Customers;