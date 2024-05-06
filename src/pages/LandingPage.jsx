import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <>
      <section className="container">
        <div className="row bg-light my-5 rounded">
          <div className="col-md-6 col-sm-12">
            <div className="mw-100 mh-100 overflow-hidden">
              <img
                src="https://admin.edumatric.com/uploads/companyimage/8VoXjC8bcT4soNjPDt1p1PBpsQB7F8GwnJW3Ywe7.png"
                className="w-100 h-100 rounded"
              />
            </div>
          </div>
          <div className="col-md-6 col-sm-12 p-5">
            <div className="text-center">
              <h2 className="fw-bold fs-1">৯৯ টাকায় মক টেস্ট!</h2>
              <h3>এটা কি আদৌ সত্যি?</h3>
              <div className="my-4">
                <p className="mb-1">
                  আমি এত কিছু জানতে চাই না রেজিস্ট্রেশন করতে চাই
                </p>
                <p className="mb-1">
                  বাংলাদেশে এই প্রথম ফুল ফ্লেজ মক টেস্ট মাত্র ৯৯ টাকায়
                </p>
                <p className="mb-1">
                  এই ৯৯ টাকার মক টেস্টে আপনি পাচ্ছেন IELTS এর ৪টি মডিউলে ফুল
                  ফ্লেয IELTS ready টেস্ট
                </p>
              </div>
              <div className="d-grid">
                <Link to="/payment">
                  <button
                    className="btn fw-bold"
                    style={{ background: "#00a651", color: "white" }}
                  >
                    রেজিস্ট্রেশন করুন
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container">
        <div className="row bg-light my-5" style={{ borderRadius: "24px" }}>
          <div className="col-12">
            <div className="my-4">
              <ul className="list-inline fw-bold d-flex justify-content-around align-items-center">
                <li className="list-inline-item fw-bold">
                  <img
                    src="https://1000.hellobarc.com/front/images/red-bullet.png"
                    width={"25px"}
                    style={{ marginRight: "10px" }}
                  />
                  Reading{" "}
                </li>
                <li className="list-inline-item fw-bold">
                  <img
                    src="https://1000.hellobarc.com/front/images/red-bullet.png"
                    width={"25px"}
                    style={{ marginRight: "10px" }}
                  />
                  Writing
                </li>
                <li className="list-inline-item fw-bold">
                  <img
                    src="https://1000.hellobarc.com/front/images/red-bullet.png"
                    width={"25px"}
                    style={{ marginRight: "10px" }}
                  />
                  Listening
                </li>
                <li className="list-inline-item fw-bold">
                  <img
                    src="https://1000.hellobarc.com/front/images/red-bullet.png"
                    width={"25px"}
                    style={{ marginRight: "10px" }}
                  />
                  Speaking
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="container">
        <div className="row bg-light my-5 rounded">
          <div className="col-12 my-3">
            <div className="row">
              <div className="col-12">
                <div className="text-center mt-2 mb-5">
                  <h2 className="fw-bold mb-3">
                    বাংলাদেশে শুধুমাত্র Edumatric এই পাবেন ৯৯ টাকায় মক টেস্ট।
                  </h2>
                  <h5>
                    Edumatric এ মক টেস্ট দেয়ার জন্য থাকছে বাংলাদেশের সবচেয়ে
                    প্রিমিয়াম মক ভেন্যু যা ব্রিটিশ কাউন্সিল দ্বারা স্বীকৃত।
                  </h5>
                </div>
              </div>
            </div>

            <div className="row flex-row-reverse">
              <div className="col-lg-6 col-sm-12">
                <div className="pb-3">
                  <div className="d-flex align-items-center justify-content-center">
                    <img
                      src="https://1000.hellobarc.com/front/images/main-image.jpg"
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
                  <div className="card" style={{ borderRadius: 30 }}>
                    <div className="card-body fs-5">
                      <p className="card-text big_p px-2 text-center">
                        আমাদের মক টেস্ট ভেন্যুতে আপনি যা যা পাচ্ছেন:
                      </p>
                      <ul>
                        <li>একদম IELTS এর মত পরিবেশ।</li>
                        <li>ওয়ারলেস হেডফোন (ব্রিটিশ কাউন্সিল এর মত)</li>
                        <li>পারফেক্ট গাইড যিনি মক কন্ডাক্ট করবেন</li>
                        <li>আপনার IELTS ব্যান্ড স্কোর</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container">
        <div className="row bg-light bg-wrapper my-5 rounded">
          <div className="col-lg-12 col-md-12  col-sm-12 col-xs-12">
            <div className="row">
              <div className="col-lg-12 col-md-12">
                <div className="text-center my-4">
                  <h2 className="fw-bold">
                    যারা যারা থাকবেন আপনার মক টেস্ট এর জন্য
                  </h2>
                </div>
              </div>
            </div>
            <div className="row py-4 justify-content-center text-center">
              {/* <div className="col-lg-2 col-xl-2 col-md-2 col-sm-12 col-xs-12" /> */}
              <div className="col-lg-4 col-xl-4 col-md-4 col-sm-12 col-xs-12">
                <ul>
                  <li className="d-flex justify-content-start">
                    <i className="fa-solid fa-check fs-5 mt-1" />
                    <p
                      className="mx-3"
                      style={{ lineHeight: "1.5rem", fontSize: "1.2rem" }}
                    >
                      ইশরাক হাসনাইন, IELTS in charge, Edumatric
                    </p>
                  </li>
                  <li className="d-flex justify-content-start">
                    <i className="fa-solid fa-check fs-5 mt-1" />
                    <p
                      className="mx-3"
                      style={{ lineHeight: "1.5rem", fontSize: "1.2rem" }}
                    >
                      ওয়ালিদ রহমান, Academic Head, Edumatric
                    </p>
                  </li>
                  <li className="d-flex justify-content-start">
                    <i className="fa-solid fa-check fs-5 mt-1" />
                    <p
                      className="mx-3"
                      style={{ lineHeight: "1.5rem", fontSize: "1.2rem" }}
                    >
                      ফাইয়াজ, Senior IELTS Instructor, Edumatric
                    </p>
                  </li>
                </ul>
              </div>
              {/* <div className="col-lg-2 col-xl-2 col-md-2 col-sm-12 col-xs-12" /> */}
            </div>
          </div>
        </div>
      </section>

      <section className="container">
        <div className="row  bg_wrapper my-5 align-middle">
          <div className="col-lg-6 col-md-6  col-sm-12 col-xs-12 ">
            <img
              src="https://1000.hellobarc.com/front/images/hajar-manush.png"
              className="w-100"
              style={{ borderRadius: 24 }}
            />
          </div>
          <div className="col-lg-6 col-md-6  col-sm-12 col-xs-12 my-5">
            <div>
              <div>
                <h3 className="card-text big_p text-center">
                  Edumatric এর Full Mock Test এর মূল্য ৫০০ টাকা
                </h3>
              </div>
              <div className="mb-3 mt-5">
                <h2 className="fw-bold text-center">
                  কিন্তু বিশেষ প্রমোশনাল প্রাইসে আপনি পাচ্ছেন মাত্র ৯৯ টাকায়।
                </h2>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container">
        <div className=" bg-light px-3 rounded">
          <div className="row bg-wrapper align-items-center flex-row-reverse">
            <div className="col-lg-6 col-md-6  col-sm-12 col-xs-12">
              <div className="my-3">
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <img
                    src="https://1000.hellobarc.com/front/images/need_more.jpg"
                    className="w-100 rounded"
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6  col-sm-12 col-xs-12 align-items-center">
              <div className="">
                <div className="mb-4 mt-4">
                  <h2 className="fw-bold text-center">
                    ফ্রি মক টেস্ট vs Edumatric এর মক টেস্ট
                  </h2>
                </div>
                <div className="mb-5">
                  <ul className="card-text px-md-5">
                    <li className="mb-2">
                      Edumatric এ British Council দ্বারা দ্বীকৃত মক ভ্যানু
                      যেখানে main IELTS conduct করা হয়।
                    </li>
                    <li className="mb-2">
                      Main IELTS এ যে ধরনের পরিবেশ পাবেন Edumatric এও একই রকম
                      পরিবেশ পাবেন
                    </li>
                    <li className="mb-2">
                      এখানে দক্ষ এবং অভিজ্ঞ এক্সপার্ট দ্বারা কপি চেক করানো হয়
                      তাই - মক এর রেজাল্ট ঠিক IELTS এর রেজাল্ট এর মতই হয়।
                    </li>
                  </ul>
                </div>
              </div>
              {/* <div className="row">
            <div className="col-md-6 col-xs-12 mx-auto">
              <button
                className="btn fw-bold"
                style={{ background: "#00a651", color: "white" }}
              >
                {" "}
                আপনিও রেজিস্ট্রেশন করুন
              </button>
            </div>
          </div> */}
            </div>
          </div>
        </div>
      </section>

      <section className="container mt-4">
        <div className=" bg-light px-3 rounded">
          <div className="row bg-wrapper align-items-center ">
            <div className="col-lg-6 col-md-6  col-sm-12 col-xs-12">
              <div className="my-3">
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <img
                    src="https://1000.hellobarc.com/front/images/think.jpg"
                    className="w-100 rounded"
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 align-items-center">
              <div className="">
                <div className="mb-4 mt-4">
                  <h2 className="fw-bold text-center">
                    এই অফারে মক টেস্ট নিলে আরো যে সকল সুবিধা পাচ্ছেন।
                  </h2>
                </div>
                <div className="mb-5">
                  <ul className="card-text px-md-5">
                    <li className="mb-2">মাত্র ১০০ টাকায় IELTS Masterclass</li>
                    <li className="mb-2">
                      ৩ মাসের IELTS course এ ১০০০ টাকা Instant Cashback
                    </li>
                    <li className="mb-2">
                      IELTS registration এ ৫০০ টাকা cashback
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container">
        <div className=" bg-light px-3 rounded mt-5">
          <div className="row bg-wrapper align-items-center flex-row-reverse">
            <div className="col-lg-6 col-md-6  col-sm-12 col-xs-12">
              <div className="my-3">
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <img
                    src="https://1000.hellobarc.com/front/images/need_more.jpg"
                    className="w-100 rounded"
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6  col-sm-12 col-xs-12 align-items-center">
              <div className="">
                <div className="mb-4 mt-4">
                  <h2 className="fw-bold">
                    যাদের বন্ধুর সংখ্যা বেশি তাদের জন্য যা থাকছে:
                  </h2>
                </div>
                <div className="mb-5">
                  <ul className="card-text px-md-5">
                    <li className="mb-2">
                      ৩ জন একসাথে রেজিস্ট্রেশন করলে অতিরিক্ত ১ জন ফ্রি মক টেস্ট
                      দিতে পারবেন
                    </li>
                    <li className="mb-2">
                      ৩ জন একসাথে রেজিস্ট্রেশন করলে অতিরিক্ত বন্ধু সহ মোট ৪ জন
                      ফ্রি master class এ জয়েন করতে পারবেন।
                    </li>
                    <li className="mb-2">
                      এ অফার পাবার জন্য অবশ্যই আমাদের হটলাইনে ফোন দিয়ে কনফার্ম
                      করতে হবে
                    </li>
                  </ul>
                </div>
              </div>
              {/* <div className="row">
            <div className="col-md-6 col-xs-12 mx-auto">
              <button
                className="btn fw-bold"
                style={{ background: "#00a651", color: "white" }}
              >
                {" "}
                আপনিও রেজিস্ট্রেশন করুন
              </button>
            </div>
          </div> */}
            </div>
          </div>
        </div>
      </section>

      <section className="container">
        <div className="row bg-light bg-wrapper mt-5 rounded">
          <div className="col-lg-12 col-md-12  col-sm-12 col-xs-12">
            <div className="row">
              <div className="col-lg-12 col-md-12">
                <div className="text-center mt-4 mb-3">
                  <h2 className="fw-bold">Register Now</h2>
                </div>
                <div className="text-center fw-bold">
                  <p>Mock Test 99 taka</p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12 mx-auto">
                <div className="pb-2">
                  <div className="card" style={{ marginBottom: 8 }}>
                    <div className="card-body">
                      <p className="card-text text-center">
                        10 am (10 seats left)
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12 mx-auto">
                <div className="pb-2">
                  <div className="card" style={{ marginBottom: 8 }}>
                    <div className="card-body">
                      <p className="card-text text-center">
                        1 pm (15 seats left)
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12 mx-auto">
                <div className="pb-2">
                  <div className="card" style={{ marginBottom: 8 }}>
                    <div className="card-body">
                      <p className="card-text text-center">
                        4 pm (9 seat left)
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-12 col-md-12  col-sm-12 col-xs-12 mt-4">
            <div className="row">
              <div className="col-lg-12 col-md-12">
                <div className="text-center fw-bold">
                  <p>IELTS Masterclass 100 taka</p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12 mx-auto">
                <div className="pb-2">
                  <div className="card" style={{ marginBottom: 8 }}>
                    <div className="card-body">
                      <p className="card-text text-center">19 May</p>
                    </div>
                  </div>
                  <div className="card" style={{ marginBottom: 8 }}>
                    <div className="card-body">
                      <p className="card-text text-center">24 May</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12 col-md-12  col-sm-12 col-xs-12">
                <div className="mx-auto mb-4 pb-2 px-2 w-50 d-flex justify-content-center mt-4">
                  <Link to="/payment">
                    <button
                      className="btn fw-bold"
                      style={{ background: "#00a651", color: "white" }}
                    >
                      রেজিস্ট্রেশন করুন
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container mb-5">
        <h2 className="mt-5 mb-4 fw-bold">FAQ</h2>
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
                আপনাকে ভ্যাণুতে উপস্থিত থাকতে হবে।
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
                রেজিস্ট্রেশন করতে পারবেন। মনে ৩ জন রেজিস্ট্রেশন করলে ৪ জন টেস্ট
                এ অংশ নিতে পারবেন। তবে সে ক্ষেত্রে আমাদের হটলাইন নাম্বারে
                যোগাযোগ করে রেজিস্ট্রেশন করতে হবে। তার সাথে ৪ জন ফ্রি
                মাস্টার্কলাসে অংশ নিতে পারবেন। অতিরিক্ত ফি প্রদান করতে হবে না।
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
                তৈরী হল আপনাদের মোবাইলে টেক্সট ম্যসেজ মাধ্যমে জানানো হবে।এবং
                রেজাল্ট Edumatric এর মগবাজার একাডেমিক ভবন থেকে সংগ্রহ করা হবে।
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
                হ্যা মক এর রেজাল্ট IELTS এর মত হবে, কারণ edumatric এর examinar
                রাঁ অত্যন্ত অভিজ্ঞ এবং এখানে IELTS band descriptor অনুযায়ী
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
