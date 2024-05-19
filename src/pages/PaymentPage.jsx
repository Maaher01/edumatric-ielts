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

        <div className="row justify-content-center mt-5">
          <div className="col-md-10">
            <div className="mt-3 mb-3">
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
                        className="form-control"
                        name="division"
                        value={district}
                        placeholder="জেলা"
                        onChange={handleChangedistrict}
                        style={{ backgroundColor: "#f5f5f5" }}
                      >
                        <option value="">জেলা নির্বাচন করুন</option>
                        <option value="Dhaka">ঢাকা</option>
                        <option value="Faridpur">ফরিদপুর</option>
                        <option value="Gazipur">গাজীপুর</option>
                        <option value="Gopalganj">গোপালগঞ্জ</option>
                        <option value="Jamalpur">জামালপুর</option>
                        <option value="Kishoreganj">কিশোরগঞ্জ</option>
                        <option value="Madaripur">মাদারীপুর</option>
                        <option value="Manikganj">মানিকগঞ্জ</option>
                        <option value="Munshiganj">মুন্সিগঞ্জ</option>
                        <option value="Mymensingh">ময়মনসিংহ</option>
                        <option value="Narayanganj">নারায়ণগঞ্জ</option>
                        <option value="Narsingdi">নরসিংদী</option>
                        <option value="Netrokona">নেত্রকোনা</option>
                        <option value="Rajbari">রাজবাড়ী</option>
                        <option value="Shariatpur">শরীয়তপুর</option>
                        <option value="Sherpur">শেরপুর</option>
                        <option value="Tangail">টাঙ্গাইল</option>
                        <option value="Bogra">বগুড়া</option>
                        <option value="Joypurhat">জয়পুরহাট</option>
                        <option value="Naogaon">নওগাঁ</option>
                        <option value="Natore">নাটোর</option>
                        <option value="Nawabganj">নবাবগঞ্জ</option>
                        <option value="Pabna">পাবনা</option>
                        <option value="Rajshahi">রাজশাহী</option>
                        <option value="Sirajgonj">সিরাজগঞ্জ</option>
                        <option value="Dinajpur">দিনাজপুর</option>
                        <option value="Gaibandha">গাইবান্ধা</option>
                        <option value="Kurigram">কুড়িগ্রাম</option>
                        <option value="Lalmonirhat">লালমনিরহাট</option>
                        <option value="Nilphamari">নীলফামারী</option>
                        <option value="Panchagarh">পঞ্চগড়</option>
                        <option value="Rangpur">রংপুর</option>
                        <option value="Thakurgaon">ঠাকুরগাঁও</option>
                        <option value="Barguna">বরগুনা</option>
                        <option value="Barisal">বরিশাল</option>
                        <option value="Bhola">ভোলা</option>
                        <option value="Jhalokati">ঝালকাঠি</option>
                        <option value="Patuakhali">পটুয়াখালী</option>
                        <option value="Pirojpur">পিরোজপুর</option>
                        <option value="Bandarban">বান্দরবান</option>
                        <option value="Brahmanbaria">ব্রাহ্মণবাড়িয়া</option>
                        <option value="Chandpur">চাঁদপুর</option>
                        <option value="Chittagong">চট্টগ্রাম</option>
                        <option value="Comilla">কুমিল্লা</option>
                        <option value="Cox's Bazar">কক্সবাজার</option>
                        <option value="Feni">ফেনী</option>
                        <option value="Khagrachhari">খাগড়াছড়ি</option>
                        <option value="Lakshmipur">লক্ষ্মীপুর</option>
                        <option value="Noakhali">নোয়াখালী</option>
                        <option value="Rangamati">রাঙ্গামাটি</option>
                        <option value="Habiganj">হবিগঞ্জ</option>
                        <option value="Maulvibazar">মৌলভীবাজার</option>
                        <option value="Sunamganj">সুনামগঞ্জ</option>
                        <option value="Sylhet">সিলেট</option>
                        <option value="Bagerhat">বাগেরহাট</option>
                        <option value="Chuadanga">চুয়াডাঙ্গা</option>
                        <option value="Jessore">যশোর</option>
                        <option value="Jhenaidah">ঝিনাইদহ</option>
                        <option value="Khulna">খুলনা</option>
                        <option value="Kushtia">কুষ্টিয়া</option>
                        <option value="Magura">মাগুরা</option>
                        <option value="Meherpur">মেহেরপুর</option>
                        <option value="Narail">নড়াইল</option>
                        <option value="Satkhira">সাতক্ষীরা</option>
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

                  <h2 className="text-center mt-5">সময় বেছে নিন</h2>
                  <div className="short_label">
                    <h4 className="text-center fw-bold">
                      ২৫ মে, ২০২৪ (শনিবার)
                    </h4>
                  </div>

                  <div className="check_list">
                    <div className="check_item">
                      <input
                        type="radio"
                        name="eventdate"
                        value="25th May 10am"
                        onChange={handleEventDate}
                        className="largerCheckbox bg_colour"
                      />
                      <p style={{ fontFamily: "sans-serif" }}>সকাল ১০ টা </p>
                    </div>

                    <div className="check_item">
                      <input
                        type="radio"
                        name="eventdate"
                        value="25th May 2:30pm"
                        onChange={handleEventDate}
                        className="largerCheckbox bg_colour"
                      />
                      <p style={{ fontFamily: "sans-serif" }}>দুপুর ২:৩০ টা </p>
                    </div>
                  </div>

                  <div className="short_label">
                    <h4 className="text-center fw-bold">
                      ৩১ মে, ২০২৪ (শুক্রবার)
                    </h4>
                  </div>

                  <div className="check_list">
                    <div className="check_item">
                      <input
                        type="radio"
                        value="31st May 10am"
                        name="eventdate"
                        onChange={handleEventDate}
                        className="largerCheckbox bg_colour"
                      />
                      <p style={{ fontFamily: "sans-serif" }}>সকাল ১০ টা </p>
                    </div>

                    <div className="check_item">
                      <input
                        type="radio"
                        value="31st May 2pm"
                        onChange={handleEventDate}
                        name="eventdate"
                        className="largerCheckbox bg_colour"
                      />
                      <p style={{ fontFamily: "sans-serif" }}>দুপুর ২ টা </p>
                    </div>
                  </div>

                  <div className="row justify-content-center mt-2">
                    <div className="col-md-7">
                      <h4 className="text-center">
                        রিডিং, রাইটিং এবং লিসেনিং শেষ হবার পর স্পিকিং নেয়া হবে
                      </h4>
                    </div>
                  </div>

                  <div className="register_confirm d-grid mt-5">
                    <button
                      type="submit"
                      className="btn fw-bold py-2 px-5"
                      style={{
                        background: "#00a651",
                        color: "white",
                        borderRadius: "16px",
                        fontSize: "18px",
                      }}
                    >
                      রেজিস্ট্রেশন কনফার্ম করুন
                    </button>
                  </div>
                </form>
              </div>
            </div>

            <h1 className="text-center mt-5">যে কোন সমস্যায় ফোন করুন</h1>
            <h1 className="text-center fw-bold">01709990904</h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PaymentPage;
