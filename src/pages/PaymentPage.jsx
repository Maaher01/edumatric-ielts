import axios from "axios";
import { baseUrl } from "../api/api";
import "../index.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const PaymentPage = () => {
  const navigate = useNavigate();
  const [district, setDistrict] = useState();
  const [eventdate, setEventDate] = useState("");

  const handleChangedistrict = (event) => {
    setDistrict(event.target.value);
  };

  const handleEventDate = (event) => {
    setEventDate(event.target.value);
  };

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();

      const formData = new FormData(event.currentTarget);

      formData.append("district", district);
      formData.append("eventdate", eventdate);

      const response = await axios.post(`${baseUrl}/studentinfo/add`, formData);

      navigate(`/payment-confirm/${response.data.profile.id}`);
    } catch (error) {
      console.error("There was an error:", error);
    }
  };

  return (
    <section className="container">
      <div className="mb-5 p-5">
        <div className="row justify-content-center mb-3">
          <div className="col-lg-6 col-md-6  col-sm-6 col-xs-6">
            <div className="mx-auto text-center">
              <h1 className="fw-bold"> রেজিস্ট্রেশন করে অংশ নিন মক টেস্ট এ</h1>
            </div>
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="mt-2 mb-4">
              <div className="card-body">
                <form onSubmit={handleSubmit}>
                  <div className="row mb-3 justify-content-center">
                    <div className="col-md-6">
                      <input
                        type="text"
                        className="form-control"
                        name="name"
                        placeholder="আপনার নাম"
                      />
                    </div>
                  </div>
                  <div className="row mb-3 justify-content-center">
                    <div className="col-md-6">
                      <input
                        type="text"
                        className="form-control"
                        name="mobile"
                        placeholder="WhatsApp Number"
                      />
                    </div>
                  </div>
                  <div className="row mb-3 justify-content-center">
                    <div className="col-md-6">
                      <input
                        type="email"
                        className="form-control"
                        name="email"
                        placeholder="Email Address"
                      />
                    </div>
                  </div>
                  <div className="row mb-3 justify-content-center">
                    <div className="col-md-6">
                      <select
                        className="form-control "
                        name="division"
                        value={district}
                        placeholder="জেলা"
                        onChange={handleChangedistrict}
                        style={{ backgroundColor: "rgb(228, 226, 226)" }}
                      >
                        <option value="">জেলা নির্বাচন করুন</option>
                        <option value="Chattagram">চট্টগ্রাম </option>
                        <option value="Rajshahi">রাজশাহী </option>
                        <option value="Khulna">খুলনা </option>
                        <option value="Barisal">বরিশাল </option>
                        <option value="Sylhet">সিলেট </option>
                        <option value="Dhaka">ঢাকা </option>
                        <option value="Rangpur">রংপুর </option>
                        <option value="Mymensingh">ময়মনসিংহ </option>
                      </select>
                    </div>
                  </div>
                  <div className="row mb-3 justify-content-center">
                    <div className="col-md-6">
                      <input
                        type="text"
                        className="form-control"
                        name="location"
                        placeholder="আপনার লোকেশন"
                      />
                    </div>
                  </div>

                  <h2 className="text-center">সময় বেছে নিন</h2>
                  <div className="short_label">
                    <h4 className="text-center fw-bold">
                      ১৭ মে, ২০২৪ (শুক্রবার)
                    </h4>
                  </div>

                  <div className="check_list">
                    <div className="check_item">
                      <input
                        type="checkbox"
                        name="eventdate"
                        value="17th May 10am"
                        onChange={handleEventDate}
                        className="largerCheckbox bg_colour"
                      />
                      <p>সকাল ১০ টা </p>
                    </div>

                    <div className="check_item">
                      <input
                        type="checkbox"
                        name="eventdate"
                        value="17th May 2:30pm"
                        onChange={handleEventDate}
                        className="largerCheckbox bg_colour"
                      />
                      <p>দুপুর ২:৩০ টা </p>
                    </div>
                  </div>

                  <div className="short_label">
                    <h4 className="text-center fw-bold">
                      ১৮ মে, ২০২৪ (শনিবার)
                    </h4>
                  </div>

                  <div className="check_list">
                    <div className="check_item">
                      <input
                        type="checkbox"
                        value="18th May 10am"
                        name="eventdate"
                        onChange={handleEventDate}
                        className="largerCheckbox bg_colour"
                      />
                      <p>সকাল ১০ টা </p>
                    </div>

                    <div className="check_item">
                      <input
                        type="checkbox"
                        value="18th May 2pm"
                        onChange={handleEventDate}
                        name="eventdate"
                        className="largerCheckbox bg_colour"
                      />
                      <p>দুপুর ২ টা </p>
                    </div>
                  </div>

                  <div className="row justify-content-center mt-2">
                    <div className="col-md-7">
                      <h4 className="text-center">
                        রিডিং, রাইটিং এবং লিসেনিং শেষ হবার পর স্পিকিং নেয়া হবে
                      </h4>
                    </div>
                  </div>

                  <div className="register_confirm mt-4">
                    <button type="submit" className="btn btn-success">
                      রেজিস্ট্রেশন কনফার্ম করুন
                    </button>
                  </div>
                </form>
              </div>
            </div>

            <h3 className="text-center">যে কোন সমস্যায় ফোন করুন</h3>
            <h3 className="text-center fw-bold">01990000000</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PaymentPage;
