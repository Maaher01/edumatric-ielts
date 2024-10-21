import axios from "axios";
import { baseUrl } from "../api/api";
import "../index.css";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { Form, Formik, Field, ErrorMessage } from "formik";
import { paymentFormSchema } from "../schema";
import { format } from "date-fns";

const PaymentPage = () => {
  const navigate = useNavigate();
  const [dates, setDates] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
    fetchDates();
  }, []);

  const fetchDates = async () => {
    try {
      const response = await axios.get(`${baseUrl}/mockdate`);
      const data = await response.data.data.data;
      const activeDates = data.filter((date) => date._status === 1);

      // Fetch capacities and student counts for each active date
      const filteredDates = await Promise.all(
        activeDates.map(async (date) => {
          const capacity = await fetchStudentCapacityByEventId(date.id);
          const studentCount = await fetchStudentCountOnADate(date.id);

          if (studentCount < capacity) {
            return date;
          } else {
            return null;
          }
        })
      );

      // Filter out null values
      setDates(filteredDates.filter((date) => date !== null));
    } catch (error) {
      console.error("Error fetching mock dates:", error);
    }
  };

  const fetchStudentCapacityByEventId = async (id) => {
    try {
      const response = await axios.get(`${baseUrl}/mockcapacity/event/${id}`);
      const data = response.data.data;
      return data._capacity;
    } catch (error) {
      console.error("Error fetching student count:", error);
      return 0;
    }
  };

  const fetchStudentCountOnADate = async (id) => {
    try {
      const response = await axios.get(
        `${baseUrl}/studentinfo/studentcount/${id}`
      );
      const data = await response.data;
      return data.student_count;
    } catch (error) {
      console.error("Error fetching student count:", error);
      return 0;
    }
  };

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      const formData = new FormData();

      formData.append("name", values.name);
      formData.append("mobile", values.mobile);
      formData.append("email", values.email);
      formData.append("district", values.district);
      formData.append("location", values.location);
      formData.append("eventdate", values.eventdate);

      const response = await axios.post(`${baseUrl}/studentinfo/add`, formData);

      navigate(`/payment-confirm/${response.data.profile.id}`);
    } catch (error) {
      console.error("There was an error:", error);
    } finally {
      setSubmitting(false);
    }
  };

  // Group dates by date part
  const groupDatesByDatePart = (dates) => {
    return dates.reduce((acc, date) => {
      const datePart = format(new Date(date._datetime), "yyyy-MM-dd");
      if (!acc[datePart]) {
        acc[datePart] = [];
      }
      acc[datePart].push(date);
      return acc;
    }, {});
  };

  const groupedDates = groupDatesByDatePart(dates);

  return (
    <section className="container">
      <Formik
        initialValues={{
          name: "",
          mobile: "",
          email: "",
          district: "",
          location: "",
          eventdate: "",
        }}
        onSubmit={handleSubmit}
        validationSchema={paymentFormSchema}
      >
        <Form className="mb-5 p-5">
          <div className="row justify-content-center mb-3">
            <div className="col-lg-6 col-md-6  col-sm-6 col-xs-6">
              <div className="mx-auto text-center">
                <h1 className="fw-bold">
                  {" "}
                  রেজিস্ট্রেশন করে অংশ নিন মক টেস্ট এ
                </h1>
              </div>
            </div>
          </div>

          <div className="row justify-content-center mt-5">
            <div className="col-md-10">
              <div className="mt-3 mb-3">
                <div className="card-body">
                  <div>
                    <div className="row mb-3 justify-content-center">
                      <div className="col-md-6">
                        <Field
                          type="text"
                          className="form-control"
                          name="name"
                          placeholder="আপনার নাম"
                          disabled={dates.length === 0}
                        />
                        <ErrorMessage
                          name="name"
                          component="div"
                          className="text-danger"
                        />
                      </div>
                    </div>
                    <div className="row mb-3 justify-content-center">
                      <div className="col-md-6">
                        <Field
                          type="text"
                          className="form-control"
                          name="mobile"
                          placeholder="WhatsApp Number"
                          disabled={dates.length === 0}
                        />
                        <ErrorMessage
                          name="mobile"
                          component="div"
                          className="text-danger"
                        />
                      </div>
                    </div>
                    <div className="row mb-3 justify-content-center">
                      <div className="col-md-6">
                        <Field
                          type="email"
                          className="form-control"
                          name="email"
                          placeholder="Email Address"
                          disabled={dates.length === 0}
                        />
                        <ErrorMessage
                          name="email"
                          component="div"
                          className="text-danger"
                        />
                      </div>
                    </div>
                    <div className="row mb-3 justify-content-center">
                      <div className="col-md-6">
                        <Field
                          as="select"
                          className="form-control"
                          name="district"
                          placeholder="জেলা"
                          style={{ backgroundColor: "#f5f5f5" }}
                          disabled={dates.length === 0}
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
                        </Field>
                        <ErrorMessage
                          name="district"
                          component="div"
                          className="text-danger"
                        />
                      </div>
                    </div>
                    <div className="row mb-3 justify-content-center">
                      <div className="col-md-6">
                        <Field
                          type="text"
                          className="form-control"
                          name="location"
                          placeholder="আপনার লোকেশন"
                          disabled={dates.length === 0}
                        />
                        <ErrorMessage
                          name="location"
                          component="div"
                          className="text-danger"
                        />
                      </div>
                    </div>

                    {dates.length > 0 ? (
                      <>
                        <h2 className="text-center mt-5">সময় বেছে নিন</h2>
                        {Object.keys(groupedDates).map((datePart) => (
                          <div key={datePart}>
                            <div className="short_label">
                              <h4 className="text-center fw-bold">
                                {format(
                                  new Date(datePart),
                                  "do MMMM, y (cccc)"
                                )}
                              </h4>
                            </div>
                            <div
                              className="d-flex justify-content-center"
                              style={{ gap: "11rem" }}
                            >
                              {groupedDates[datePart].map((date, index) => (
                                <div className="check_list" key={index}>
                                  <div className="check_item">
                                    <Field
                                      type="radio"
                                      name="eventdate"
                                      value={date._datetime}
                                      className="largerCheckbox bg_colour"
                                    />
                                    <p>
                                      {format(
                                        new Date(date._datetime),
                                        "hh:mm aaa"
                                      )}
                                    </p>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        ))}
                        <ErrorMessage
                          name="eventdate"
                          component="div"
                          className="text-danger text-center fs-5 mb-4 mt-2"
                        />

                        <div className="row justify-content-center mt-2">
                          <div className="col-md-7">
                            <h4 className="text-center">
                              রিডিং, রাইটিং এবং লিসেনিং শেষ হবার পর স্পিকিং নেয়া
                              হবে
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
                      </>
                    ) : (
                      <div
                        className="text-center text-danger mt-5"
                        style={{ margin: "0 100px" }}
                      >
                        <h4>
                          Thank you for your attempt. Seats for all Mock tests
                          are currently booked. Please keep an eye on our
                          Facebook page for the next schedule.
                        </h4>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <h1 className="text-center mt-5">যে কোন সমস্যায় ফোন করুন</h1>
              <h1 className="text-center fw-bold">01709990904</h1>
            </div>
          </div>
        </Form>
      </Formik>
    </section>
  );
};

export default PaymentPage;
