import "../index.css";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { baseUrl } from "../api/api";

const PaymentConfirm = () => {
  const { id } = useParams();

  const [masterClassChecked, setMasterClassChecked] = useState(true);
  const [totalbill, setTotalBill] = useState(0);

  useEffect(() => {
    calculateTotal();
  }, [masterClassChecked]);

  const calculateTotal = () => {
    let total = 99;
    if (masterClassChecked) total += 100;
    setTotalBill(total);
  };

  const bkashPayment = () => {
    axios
      .post(`${baseUrl}/bkash/create`, {
        amount: totalbill,
      })
      .then((response) => {
        console.log("Response", response);
        localStorage.setItem("amount", response.data.amount);
        localStorage.setItem("userId", id);
        localStorage.setItem("paymentID", response.data.paymentID);

        window.location.href = response?.data?.bkashURL;
      })
      .catch((error) => {
        console.log("An error occurred:", error);
      });
  };

  return (
    <>
      <h1 className="text-center fw-bold mt-5">পেমেন্ট কনফার্ম করুন</h1>

      <div className="label_sec">
        <div className="content_label">
          <p
            style={{ marginBottom: "0px", color: "#757575", fontWeight: "500" }}
          >
            Mock Test{" "}
          </p>
          <p
            style={{ marginBottom: "0px", color: "#757575", fontWeight: "500" }}
          >
            99 Taka
          </p>
        </div>

        <div className="content_check">
          <input
            type="checkbox"
            className="largerCheckbox"
            checked={masterClassChecked}
            onChange={() => setMasterClassChecked(!masterClassChecked)}
            defaultChecked="true"
          />
          <div className="check_label">
            <p
              style={{
                marginBottom: "0px",
                color: "#757575",
                fontWeight: "500",
              }}
            >
              Master Class{" "}
            </p>
            <p
              style={{
                marginBottom: "0px",
                color: "#757575",
                fontWeight: "500",
              }}
            >
              100 Taka
            </p>
          </div>
        </div>
      </div>

      <div className="amount_container my-5">
        <div
          className="amount_label"
          style={{
            color: "#757575",
            fontWeight: "900",
            fontSize: "21px",
          }}
        >
          Total :
        </div>
        <input
          className="amount_price fw-bold"
          name="totalbill"
          value={totalbill}
          type="text"
          readOnly
        />{" "}
      </div>

      <div className="button_container">
        <button className="btn btn-success fw-bold" onClick={bkashPayment}>
          Pay Now
        </button>
      </div>

      <div className="wrap-text">
        <h2 className="text-center" style={{ fontSize: "42px" }}>
          যে কোন সমস্যায় ফোন করুন{" "}
        </h2>
        <h2 className="text-center fw-bold" style={{ fontSize: "42px" }}>
          01709990904
        </h2>
      </div>
    </>
  );
};

export default PaymentConfirm;
