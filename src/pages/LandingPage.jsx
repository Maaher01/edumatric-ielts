import PeoplePoster from "../assets/images/people.png";
import MockPoster from "../assets/images/mask.png";
import { useRef } from "react";

import { Link } from "react-router-dom";

const LandingPage = () => {
  const secondBtn = useRef(null);
  const thirdBtn = useRef(null);

  const handleFistClick = () => {
    secondBtn.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSecondClick = () => {
    thirdBtn.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <section className="container">
        <div className="row my-5 rounded">
          <div className="col-md-6 col-sm-12">
            <div className="mw-100 mh-100 overflow-hidden">
              <img
                src="src/assets/images/homepage-image.jpg"
                className="w-100 h-100 rounded-3"
              />
            </div>
          </div>
          <div className="col-md-6 col-sm-12 p-5">
            <div>
              <h2 className="fw-bold fs-1">৯৯ টাকায় মক টেস্ট!</h2>
              <h3>এটা কি আদৌ সত্যি?</h3>
              <div className="my-2">
                <p className="mb-1" style={{ fontSize: "20px" }}>
                  আমি এত কিছু জানতে চাই না
                </p>
              </div>

              <button
                className="btn fw-bold py-2"
                onClick={handleFistClick}
                style={{
                  background: "#00a651",
                  color: "white",
                  borderRadius: "16px",
                  fontSize: "19px",
                }}
              >
                রেজিস্ট্রেশন করতে চাই
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="container">
        <div className="row my-5 rounded">
          <div className="col-12 my-3">
            <div className="row">
              <div className="col-12">
                <div className="text-center mt-2 mb-5">
                  <h2 className="fw-bold mb-3" style={{ fontSize: "2.5rem" }}>
                    বাংলাদেশে এই প্রথম ফুল মক টেস্ট মাত্র ৯৯ টাকায়
                  </h2>
                  <h3 className="mt-4">
                    এই ৯৯ টাকার মক টেস্টে আপনি পাচ্ছেন IELTS এর ৪টি মডিউলে ফুল
                    IELTS ready টেস্ট
                  </h3>
                </div>
              </div>
            </div>

            <div className="row flex-row-reverse">
              <div className="col-lg-6 col-sm-12">
                <div className="pb-3">
                  <div className="d-flex align-items-center justify-content-center">
                    <img
                      src="src/assets/images/tables-and-chairs.jpg"
                      className="w-100 p-4 rounded"
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-sm-12">
                <div
                  className="pb-2"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    height: "100%",
                  }}
                >
                  <div className="">
                    <div className="card-body fs-5">
                      <p
                        className="card-text big_p px-2"
                        style={{ fontSize: "1.75rem" }}
                      >
                        বাংলাদেশে শুধুমাত্র Edumatric এই পাবেন ৯৯ টাকায় মক
                        টেস্ট।
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="row flex-row-reverse">
              <div className="col-lg-6 col-sm-12">
                <div className="pb-3">
                  <div className="d-flex align-items-center justify-content-center">
                    <img
                      src="src/assets/images/girl-writing.jpg"
                      rounded
                      className="w-100 rounded"
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-sm-12">
                <div
                  className="pb-2"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    height: "100%",
                  }}
                >
                  <div className="">
                    <div className="card-body fs-5">
                      <p
                        className="card-text big_p px-2"
                        style={{ fontSize: "1.75rem" }}
                      >
                        Edumatric এ মক টেস্ট দেয়ার জন্য থাকছে বাংলাদেশের
                        সবচেয়ে প্রিমিয়াম মক ভেন্যু যা ব্রিটিশ কাউন্সিল দ্বারা
                        স্বীকৃত
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container">
        <div className="row my-5 rounded">
          <div className="col-12 my-3">
            <div className="row">
              <div className="col-12">
                <div className="text-center mt-2 mb-5">
                  <h2 className="fw-bold mb-3" style={{ fontSize: "2rem" }}>
                    আমাদের মক টেস্ট ভেন্যুতে আপনি যা যা পাচ্ছেন
                  </h2>
                </div>
              </div>
            </div>
          </div>

          <div className="facility__container">
            <div className="facility_item">
              <h3>একদম IELTS এর মত পরিবেশ</h3>
            </div>
            <div className="facility_item">
              <h3>ওয়ারলেস হেডফোন (ব্রিটিশ কাউন্সিল এর মত)</h3>
            </div>
          </div>

          <div className="facility__container">
            <div className="facility_item">
              <h3>পারফেক্ট গাইড যিনি মক কন্ডাক্ট করবেন</h3>
            </div>
            <div className="facility_item">
              <h3>আপনার IELTS ব্যান্ড স্কোর</h3>
            </div>
          </div>
        </div>
      </section>

      <section className="container">
        <div className="row bg-wrapper my-5 rounded">
          <div className="col-lg-12 col-md-12  col-sm-12 col-xs-12">
            <div className="row">
              <div className="col-lg-12 col-md-12">
                <div className="text-center my-4">
                  <h2 className="fw-bold" style={{ fontSize: "2.5rem" }}>
                    যারা যারা থাকবেন আপনার মক <br /> টেস্ট এর জন্য
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Instructor section */}
        <div className="instructor_sec">
          <div className="instructor_info">
            <img src="src/assets/images/walidrahman.jpg" alt="instructor" />

            <p className="text-center fw-bold mt-4 fs-5">ওয়ালিদ রহমান</p>
            <p className="text-center">Academic Head, Edumatric</p>
          </div>

          <div className="instructor_info">
            <img src="src/assets/images/ishrakhasnain.jpg" alt="instructor" />

            <p className="text-center fw-bold mt-4 fs-5">ইশরাক হাসনাইন</p>
            <p className="text-center">Chief Co-Ordinator, Edumatric</p>
          </div>

          <div className="instructor_info">
            <img src="src/assets/images/faiz_ullah.jpg" alt="instructor" />

            <p className="text-center fw-bold mt-4 fs-5">ফাইজ উল্লাহ</p>
            <p className="text-center">IELTS Instructor, Edumatric</p>
          </div>
        </div>
      </section>

      <h2 className="text-center pb-3" style={{ paddingTop: "72px" }}>
        Edumatric এর Full Mock Test
        <span className="fw-bold"> এর মূল্য ৫০০ টাকা</span>
      </h2>

      <h1 className="text-center pb-3 d-flex flex-column">
        কিন্তু বিশেষ প্রমোশনাল প্রাইসে <br />
        <span className="fw-bold mt-2"> আপনি পাচ্ছেন মাত্র ৯৯ টাকায়</span>
      </h1>

      <div className="people_poster">
        <img src={PeoplePoster} alt="poster" />
      </div>

      <h1 className="text-center fw-bold pt-3" ref={secondBtn}>
        ফ্রি মক টেস্ট vs Edumatric এর <br /> মক টেস্ট
      </h1>

      <div className="test__container">
        <div className="test__item">
          <h3 className="text-center" style={{ fontSize: "26px" }}>
            Edumatric একটি British Council দ্বারা সীকৃত মক ভ্যানু যেখানে main
            IELTS conduct করা হয়।
          </h3>
        </div>

        <div className="test__item">
          <h3 className="text-center" style={{ fontSize: "26px" }}>
            Main IELTS এ যে ধরনের পরিবেশ পাবেন Edumatric এও একই রকম পরিবেশ পাবেন
          </h3>
        </div>

        <div className="test__item">
          <h3 className="text-center" style={{ fontSize: "26px" }}>
            এখানে দক্ষ এবং অভিজ্ঞ এক্সপার্ট দ্বারা কপি চেক করানো হয় তাই - মক এর
            রেজাল্ট ঠিক IELTS এর রেজাল্ট এর মতই হয়
          </h3>
        </div>
      </div>

      <div className="reg__button d-grid mt-5">
        <button
          className="btn fw-bold py-2 px-5"
          onClick={handleSecondClick}
          style={{
            background: "#00a651",
            color: "white",
            borderRadius: "16px",
            fontSize: "20px",
          }}
        >
          রেজিস্ট্রেশন করতে চাই
        </button>
      </div>

      <h1
        className="text-center fw-bold"
        style={{ paddingTop: "36px", fontSize: "46px" }}
      >
        এই অফারে মক টেস্ট নিলে <br /> আরো যে সকল সুবিধা পাচ্ছেন
      </h1>

      <div className="mock__test mt-5">
        <div className="mock__poster">
          <img src={MockPoster} alt="MockPoster" />
        </div>
        <div className="mock__content">
          <div className="test__item">
            <h3>মাত্র ১০০ টাকায় IELTS Masterclass</h3>
          </div>

          <div className="test__item">
            <h3>৩ মাসের IELTS course এ ১০০০ টাকা Instant cashback</h3>
          </div>

          <div className="test__item">
            <h3>IELTS registration এ ৫০০ টাকা cashback</h3>
          </div>
        </div>
      </div>

      <h2
        className="text-center fw-bold mt-5"
        style={{ fontSize: "46px" }}
        ref={thirdBtn}
      >
        যাদের বন্ধুর সংখ্যা বেশি তাদের <br /> জন্য যা যা থাকছে
      </h2>

      <div className="test__container mt-5">
        <div className="test__item">
          <h3 className="text-center" style={{ fontSize: "30px" }}>
            ৩ জন একসাথে রেজিস্ট্রেশন করলে অতিরিক্ত ১ জন ফ্রি মক টেস্ট দিতে
            পারবেন
          </h3>
        </div>

        <div className="test__item">
          <h3 className="text-center" style={{ fontSize: "30px" }}>
            ৩ জন একসাথে রেজিস্ট্রেশন করলে অতিরিক্ত বন্ধু সহ মোট ৪ জন ফ্রি master
            class এ জয়েন করতে পারবেন
          </h3>
        </div>

        <div className="test__item">
          <h3 className="text-center" style={{ fontSize: "30px" }}>
            এ অফার পাবার জন্য অবশ্যই আমাদের হটলাইনে ফোন দিয়ে কনফার্ম করতে হবে
          </h3>
        </div>
      </div>

      <h2 className="text-center text-success fw-bold my-5 fs-1">
        Hotline Number: 01709990904
      </h2>

      <div className="reg__big d-grid my-5">
        <Link to="/payment">
          <button
            className="btn fw-bold py-2 px-5"
            style={{
              background: "#00a651",
              color: "white",
              borderRadius: "16px",
              fontSize: "34px",
            }}
          >
            Register Now
          </button>
        </Link>
      </div>

      <div className="venue d-flex gap-5">
        <div className="venue__sec">
          <h2 className="fw-bold">Mock Venue</h2>
          <p className="fs-4">
            Mogbajar Address <br /> Location: Greenland Tower, Level 4, 26
            Shahid Sangbadik Selina Parvin Road, Moghbazar, Dhaka 1217, (beside
            siddheswari college)
            <br /> Phone number: 01709990904
          </p>
        </div>
        <div className="office__sec">
          <h2 className="fw-bold">Head Office</h2>
          <p className="fs-4">
            Gulshan Address <br /> Location: 1 Gulshan Avenue, Gulshan-1,
            Dhaka-1212, Bangladesh.
            <br />
            Phone number: +88024881021017
          </p>
        </div>
      </div>

      <div className="container mb-5">
        <h2 className="mt-5 mb-4 fw-bold text-center">FAQ</h2>
        <div className="accordion" id="accordionExample">
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button fs-5 fw-bold"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                মক টেস্ট দিতে আমাকে কখন আসতে হবে?
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                আপনি যে সময়ে মক টেস্ট রেজিস্ট্রেশন করেছেন তার ঠিক আধা ঘণ্টা আগে
                আপনাকে ভেন্যুতে উপস্থিত থাকতে হবে।
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed fs-5 fw-bold"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                আমি যদি মক দিতে না পারি তাহলে কি পরে দিতে পারবো?
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                এটি edumatric এর একটি প্রমোশনাল টেস্ট। এখানে মক টেস্ট এর মূল্য
                ৫০০ টাকা, আপনি আসতে না পারলে পরবর্তী মাসে অতিরিক্ত ৪০০ টাকা
                দিয়ে মক দিতে পারবেন। তবে ১০০ টাকা রিফান্ডেবল নয়।
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed fs-5 fw-bold"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                আমাকে কি কি নিয়ে আসতে হবে?
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                আপনাকে আপনার প্রয়োজনীয় কলম, পেন্সিল নিয়ে আসতে হবে।
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed fs-5 fw-bold"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseFive"
                aria-expanded="false"
                aria-controls="collapseFive"
              >
                আমি একসাথে কয়টি মক টেস্ট কিনতে পারবো?
              </button>
            </h2>
            <div
              id="collapseFive"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                আপনি নিজের জন্য একটি মক টেস্ট কিনতে পারবেন। তবে আপনি এবং আপনার ৩
                জন বন্ধু একত্রে রেজিস্ট্রেশন করেন, তাহলে অতিরিক্ত একজন ফ্রি
                রেজিস্ট্রেশন করতে পারবেন। মানে ৩ জন রেজিস্ট্রেশন করলে ৪ জন টেস্ট
                এ অংশ নিতে পারবেন। তবে সে ক্ষেত্রে আমাদের হটলাইন নাম্বারে
                যোগাযোগ করে রেজিস্ট্রেশন করতে হবে। তার সাথে ৪ জন ফ্রি
                মাস্টারক্লাসে অংশ নিতে পারবেন। অতিরিক্ত ফি প্রদান করতে হবে না।
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed fs-5 fw-bold"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseSix"
                aria-expanded="false"
                aria-controls="collapseSix"
              >
                মকের রেজাল্ট কবে পাবো?
              </button>
            </h2>
            <div
              id="collapseSix"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                মক টেস্ট এর রেজাল্ট পরবর্তী ৭ কর্ম দিবসের মধ্যে পাবেন। রেজাল্ট
                তৈরী হলে আপনাদের মোবাইলে টেক্সট ম্যসেজ মাধ্যমে জানানো হবে। এবং
                রেজাল্ট Edumatric এর মগবাজার একাডেমিক ভবন থেকে সংগ্রহ করতে হবে।
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed fs-5 fw-bold"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseFour"
                aria-expanded="false"
                aria-controls="collapseFour"
              >
                মক এর রেজাল্ট কি সত্যিই IELTS এর মত হবে?
              </button>
            </h2>
            <div
              id="collapseFour"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                হ্যাঁ মক এর রেজাল্ট IELTS এর মত হবে, কারণ edumatric এর examiner
                রা অত্যন্ত অভিজ্ঞ এবং এখানে IELTS band descriptor অনুযায়ী
                রেজাল্ট তৈরি করা হয়। যা সুস্পষ্ট এবং সঠিক।
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
