import "../index.css";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { baseUrl } from "../api/api";
import { ClipLoader } from "react-spinners";

const PaymentConfirm = () => {
  const { id } = useParams();

  const [masterClassChecked, setMasterClassChecked] = useState(true);
  const [totalbill, setTotalBill] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    calculateTotal();
  }, [masterClassChecked]);

  const calculateTotal = () => {
    let total = 99;
    if (masterClassChecked) total += 100;
    setTotalBill(total);
  };

  const bkashPayment = () => {
    setLoading(true);
    axios
      .post(`${baseUrl}/bkash/create`, {
        amount: totalbill,
        userid: id,
      })
      .then((response) => {
        localStorage.setItem("amount", response.data.amount);
        localStorage.setItem("userId", id);
        localStorage.setItem("paymentID", response.data.paymentID);

        window.location.href = response?.data?.bkashURL;
      })
      .catch((error) => {
        console.log("An error occurred:", error);
        setLoading(false);
      });
  };

  return (
    <>
      <h1 className="text-center fw-bold mt-5">পেমেন্ট কনফার্ম করুন</h1>

      <div className="label_sec">
        <div className="content_label">
          <p>Mock Test </p>
          <p>99 Taka</p>
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
            <p>Master Class</p>
            <p>100 Taka</p>
          </div>
        </div>
      </div>

      <div className="amount_container text-center my-5">
        <div className="amount_label">Total :</div>
        <input
          className="amount_price fw-bold"
          name="totalbill"
          value={totalbill}
          type="text"
          readOnly
        />{" "}
      </div>

      <div className="button_container">
        {!loading ? (
          <button className="btn btn-success fw-bold" onClick={bkashPayment}>
            Pay Now
          </button>
        ) : (
          <div className="text-center mt-5">
            <ClipLoader color="#005cc8" />
          </div>
        )}
      </div>

      <div className="wrap-text">
        <h1 className="text-center">যে কোন সমস্যায় ফোন করুন </h1>
        <h1 className="text-center fw-bold">01709990904</h1>
      </div>
    </>
  );
};

export default PaymentConfirm;
