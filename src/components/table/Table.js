import React from "react";

// Sass
import "./table.scss";

const Table = () => {
  const row = [
    {
      Id: 1,
      Tracking_id: "11228",
      Product: {
        name: "Acer nitro 5",
        Image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
      },
      Customer: "Mark S. Wilson",
      Date: "1 March",
      Amount: 785,
      Payment_Method: "Cash on Delivery",
      Status: "Approved",
    },
    {
      Id: 2,
      Tracking_id: "11228",
      Product: {
        name: "Acer nitro 5",
        Image:
          "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
      },
      Customer: "Linda B. Gingrich",
      Date: "1 March",
      Amount: 900,
      Payment_Method: "Cash on Delivery",
      Status: "Approved",
    },
    {
      Id: 3,
      Tracking_id: "11228",
      Product: {
        name: "Acer nitro 5",
        Image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
      },
      Customer: "Patricia B. Watson",
      Date: "1 March",
      Amount: 35,
      Payment_Method: "Online Payment",
      Status: "Approved",
    },
    {
      Id: 4,
      Tracking_id: "11228",
      Product: {
        name: "Acer nitro 5",
        Image: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
      },
      Customer: "Phillip D. Thompson",
      Date: "1 March",
      Amount: 920,
      Payment_Method: "Online",
      Status: "Pending",
    },
    {
      Id: 5,
      Tracking_id: "11228",
      Product: {
        name: "Acer nitro 5",
        Image:
          "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
      },
      Customer: "James L. Dean",
      Date: "1 March",
      Amount: 2000,
      Payment_Method: "Online",
      Status: "Pending",
    },
  ];

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Tracking ID</th>
            <th>Product</th>
            <th>Customer</th>
            <th>Date</th>
            <th>Amount</th>
            <th>Payment Method</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {row.map((item) => (
            <tr key={item.Id}>
              <td className="Tracking_id">{item.Tracking_id}</td>
              <td className="imgContainer">
                <img src={item.Product.Image} alt="pic" />
                {item.Product.name}
              </td>
              <td>{item.Customer}</td>
              <td>{item.Date}</td>
              <td>{item.Amount}</td>
              <td>{item.Payment_Method}</td>
              <td className="status">
                <div className={`status ${item.Status}`}>{item.Status}</div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Table;
