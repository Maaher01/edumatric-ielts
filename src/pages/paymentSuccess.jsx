import Poster from "../assets/images/payment-notice.png";
import "../index.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { baseUrl } from "../api/api";
import { Link } from "react-router-dom";
const PaymentSuccess = () => {
  const price = "১০,০০০ > ৪৯০০ > ৩৯০০";

  const [paymentID, setPaymentID] = useState("");
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [eventdate, setEventDate] = useState("");
  const [message, setMessage] = useState("");
  useEffect(() => {
    setPaymentID(localStorage.getItem("paymentID"));
    paymentInfo();
  }, []);

  const paymentInfo = async () => {
    const formData = new FormData();

    formData.append("transactionid", localStorage.getItem("paymentID"));
    formData.append("totalbill", localStorage.getItem("amount"));
    formData.append("paymentstatus", 1);

    const userId = localStorage.getItem("userId");

    try {
      const response = await axios.post(
        `${baseUrl}/studentinfo/updatePayment/${userId}`,
        formData
      );

      if (response.data && response.data.profile) {
        setName(response.data.profile._name);
        setMobile(response.data.profile._mobile);
        setEventDate(response.data.profile._eventdate);
        setMessage(response.data.profile._message);
      }

      localStorage.clear();
    } catch (error) {
      console.error("There was an error:", error);
    }
  };

  return (
    <>
      <h3 className="text-center mt-5">
        <span>{message}</span>
      </h3>
      <h1 className="text-center fw-bold mt-4">
        আপনার রেজিস্ট্রেশন সম্পন্ন হয়েছে
      </h1>

      <div className="info_wrap">
        <p>নাম: {name}</p>
        <p>মোবাইল: {mobile}</p>
        <p>সিরিয়াল নাম্বার: {paymentID}</p>
        <p>সময়: {eventdate}</p>
        <p>ভেন্যু: মগবাজার অফিস.</p>
      </div>

      <div className="short_level_one">
        <h2>ধন্যবাদ আপনাকে আমাদের মক টেস্ট এ রেজিস্ট্রেশন করার জন্য।</h2>
      </div>

      <div className="short_level_two">
        <h2 className="text-center mt-5">
          Edumatric এ IELTS রেজিস্ট্রেশন করুন এবং ৫০০ টাকা instant cashback
          গ্রহণ করুন।
        </h2>
      </div>

      <div className="short_level_three mt-5">
        <h1 className="text-center">
          <span className="fw-bold"> IELTS registration </span> করতে ফোন করুন
          <span className="fw-bold"> 01709990904</span>
        </h1>
      </div>

      <h2
        className="text-center m-5"
        style={{ fontSize: "50px", fontWeight: "800" }}
      >
        IELTS Course
      </h2>

      <div className="cash__back d-flex gap-4">
        <div className="cash__back__poster">
          <img src={Poster} alt="poster" />
        </div>

        <div className="cash__back__content">
          <h2>
            ৩ মাসের IELTS course এ রেজিস্ট্রেশন করে বুঝে নিন ১০০০ টাকা ক্যাশ
            ব্যক।
          </h2>
          <h2 className="pt-4">(রেজিস্ট্রেশন শেষ হচ্ছে ২৬ মে, ২০২৪)</h2>
        </div>
      </div>

      <h2 className="text-center short_level_one">
        যা যা থাকছে ৩ মাসের IELTS course এ যা যা থাকছে
      </h2>

      <div className="course_module">
        <ul>
          <li> - ৩ মাসে complete IELTS preparation</li>
          <li> - ৪২ টি ক্লাস</li>
          <li> - ৪ টি মডিউলে ক্লাস</li>
          <li> - ফ্রি স্পিকিং কোর্স (আলাদা)</li>
          <li> - ইংলিশ ফাউন্ডেশন কোর্স</li>
          <li> - ১ টি মক টেস্ট</li>
        </ul>
      </div>

      <div className="instructor_sec">
        <div className="instructor_info">
          <img src="src/assets/images/walidrahman.jpg" alt="instructor" />
          <p className="text-center fw-bold pt-3 fs-5">ওয়ালিদ রহমান</p>
          <p className="text-center">Academic Head, Edumatric</p>
        </div>
        <div className="info_text">
          <h2 className="text-center">কোর্স ইন্সট্রাক্টর হিসেবে যারা থাকছেন</h2>
        </div>
        <div className="instructor_info">
          <img src="src/assets/images/faiz_ullah.jpg" alt="instructor" />
          <p className="text-center fw-bold pt-3 fs-5">ফাইজ উল্লাহ</p>
          <p className="text-center">IELTS Instructor, Edumatric</p>
        </div>
      </div>

      <div className="schedule">
        <h2 className="text-center">ক্লাস শুরু হচ্ছে</h2>
        <p className="text-center fw-light">১ জুন, ২০২৪</p>
        <p className="text-center fw-light">২ জুন, ২০২৪</p>
      </div>

      <h2 className="text-center fw-bold" style={{ fontSize: "38px" }}>
        রেজিস্ট্রেশন ফি
      </h2>
      <h2 className="text-center fw-bold mt-4" style={{ fontSize: "42px" }}>
        {price}
      </h2>
      <p className="text-center h4 pb-4">
        (শুধুমাত্র যারা মক টেস্ট কিনবেন তাদের জন্য)
      </p>

      <div className="d-grid mt-5">
        <button
          className="btn fw-bold py-2 px-5"
          style={{
            background: "#00a651",
            color: "white",
            borderRadius: "16px",
            fontSize: "24px",
            maxWidth: "400px",
            margin: "auto",
          }}
        >
          কোর্সে রেজিস্ট্রেশন করুন
        </button>
      </div>

      <h3 className="text-center text-success pb-3 mt-4">
        অথবা ফোন করুন 01709990904
      </h3>
      <div className="d-grid text-center mb-5">
        <Link to="/">
          <button
            className="btn fw-bold py-2 px-5"
            style={{
              background: "#c4ba0d",
              color: "white",
              borderRadius: "16px",
              fontSize: "24px",
              maxWidth: "400px",
              margin: "auto",
            }}
          >
            হোম পেজ এ ফিরে যান
          </button>
        </Link>
         
      </div>
    </>
  );
};

export default PaymentSuccess;
