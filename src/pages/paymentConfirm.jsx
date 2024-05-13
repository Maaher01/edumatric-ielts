import "../index.css";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { baseUrl } from "../api/api";

const PaymentConfirm = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [masterClassChecked, setMasterClassChecked] = useState(true);
  const [totalbill, setTotalBill] = useState(0);

  useEffect(() => {
    const calculateTotal = () => {
      let total = 99;
      if (masterClassChecked) total += 100;
      setTotalBill(total);
      // return total;
    };

    calculateTotal();
  }, []);

  // const getStudentInfo = async () => {
  //   try {
  //     const response = await axios.get(`${baseUrl}/studentinfo/edit/${id}`);

  //     setTotalBill(response.data.data._totalbill);
  //   } catch (err) {
  //     console.log(err.message);
  //   }
  // };

  // const calculateTotal = () => {
  //   let total = 99;
  //   if (masterClassChecked) total += 100;
  //   return total;
  // };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    formData.append("totalbill", totalbill);

    try {
      const response = await axios.post(
        `${baseUrl}/studentinfo/update/${id}`,
        formData
      );
      console.log(response);
      navigate("/payment-notice");
    } catch (error) {
      console.error("There was an error:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="text-center fw-bold mt-5">পেমেন্ট কনফার্ম করুন</h2>

      <div className="label_sec">
        <div className="content_label">
          <p style={{ marginBottom: "0px" }}>Mock Test </p>
          <p style={{ marginBottom: "0px" }}>99 Taka</p>
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
            <p style={{ marginBottom: "0px" }}>Master Class </p>
            <p style={{ marginBottom: "0px" }}>100 Taka</p>
          </div>
        </div>
      </div>

      <div className="amount_container">
        <div className="amount_label fw-bold">Total</div>
        <input
          className="amount_price fw-bold"
          name="totalbill"
          value={totalbill}
          onChange={(e) => setTotalBill(e.target.value)}
        />
      </div>

      <div className="button_container">
        <button className="btn btn-success fw-bold">Pay Now</button>
      </div>

      <div className="wrap-text">
        <h3 className="text-center">যে কোন সমস্যায় ফোন করুন </h3>
        <h3 className="text-center fw-bold">01990000000</h3>
      </div>
    </form>
  );
};

export default PaymentConfirm;
