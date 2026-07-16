import "./CustomerTable.css";

function CustomerTable({ customers, openModal }) {
  return (
    <div className="customer-table">

      <div className="table-header">
        <h2>Customers</h2>

        <button onClick={openModal}>
          + Add Customer
        </button>
      </div>

      <table>

        <thead>
          <tr>
            <th>Name</th>
            <th>Phone</th>
            <th>Email</th>
            <th>Address</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>

          {customers.map((customer) => (
            <tr key={customer.id}>

              <td>{customer.name}</td>

              <td>{customer.phone}</td>

              <td>{customer.email}</td>

              <td>{customer.address}</td>

              <td>{customer.status}</td>

              <td>
                <button>Edit</button>
                <button style={{ marginLeft: "10px" }}>
                  Delete
                </button>
              </td>

            </tr>
          ))}

        </tbody>

      </table>

    </div>
  );
}

export default CustomerTable;