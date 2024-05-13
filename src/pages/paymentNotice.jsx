import Poster from "../assets/images/payment-notice.png";
import Instructor from "../assets/images/instructor.jpg";
import "../index.css";

const PaymentNotice = () => {
  const price = "১০,০০০ > ৪৯০০ > ৩৯০০";
  return (
    <>
      <div className="row justify-content-center mt-5">
        <div className="col-lg-7 col-md-7  col-sm-7 col-xs-7">
          <div className="mx-auto text-center">
            <h1 className="fw-bold">আপনার রেজিস্ট্রেশন সম্পন্ন হয়েছে</h1>
          </div>
        </div>

        <div className="info_wrap">
          <p>নাম:</p>
          <p>মোবাইল: </p>
          <p>সিরিয়াল নাম্বার: </p>
          <p>সময়: </p>
          <p>Masterclass: yes (time)</p>
          <p>ভেন্যু: মগবাজার অফিস.</p>
        </div>
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
        <h2 className="text-center">
          <span className="fw-bold"> IELTS registration </span> করতে ফোন করুন
          <span className="fw-bold"> 019999999999</span>
        </h2>
      </div>

      <h2 className="text-center fw-bold mt-5">IELTS Course</h2>

      <div className=" row d-flex justify-content-between sit_info mt-5">
        <div className="sit_poster">
          <img src={Poster} alt="poster" />
        </div>

        <div className="sit_content">
          <h2 className="fw-bold">
            ৩ মাসের IELTS course এ রেজিস্ট্রেশন করে বুঝে নিন ১০০০ টাকা ক্যাশ
            ব্যক।
          </h2>
          <h2 className="fw-bold pt-4">(রেজিস্ট্রেশন শেষ হচ্ছে ১২ মে, ২০২৪)</h2>
        </div>
      </div>

      <h2 className="text-center fw-bold mt-4 short_level_one">
        যা যা থাকছে ৩ মাসের IELTS course এ যা যা থাকছে
      </h2>

      <div className="course_module">
        <ul>
          <li>- ৩ মাসে complete IELTS preparation</li>
          <li>- ৪২ টি ক্লাস</li>
          <li>- ৪ টি মডিউলে ক্লাস</li>
          <li>- ফ্রি স্পিকিং কোর্স (আলাদা)</li>
          <li>- ইংলিশ ফাউন্ডেশন কোর্স</li>
          <li>- ১ টি মক টেস্ট</li>
        </ul>
      </div>

      <div className="instructor_sec">
        <div className="instructor_info">
          <img src={Instructor} alt="instructor" />

          <p className="text-center fw-bold pt-3">ওয়ালিদ রহমান</p>
          <p className="text-center">Academic Head, Edumatric</p>
        </div>
        <div className="info_text">
          <h3 className="text-center">কোর্স ইন্সট্রাক্টর হিসেবে যারা থাকছেন</h3>
        </div>
        <div className="instructor_info">
          <img src={Instructor} alt="instructor" />

          <p className="text-center fw-bold pt-3">ওয়ালিদ রহমান</p>
          <p className="text-center">Academic Head, Edumatric</p>
        </div>
      </div>

      <div className="schedule pt-5">
        <h2 className="text-center fw-bold">ক্লাস শুরু হচ্ছে</h2>
        <p className="text-center">১৪ মে, ২০২৪</p>
        <p className="text-center">২১ মে, ২০২৪</p>
      </div>

      <h2 className="text-center fw-bold">রেজিস্ট্রেশন ফি</h2>
      <h2 className="text-center fw-bold"> {price} </h2>
      <p className="text-center h4 pb-4">
        (শুধুমাত্র যারা মক টেস্ট কিনবেন তাদের জন্য)
      </p>

      <div className="reg_sec pb-3">
        <button className="btn btn-success">কোর্সে রেজিস্ট্রেশন করুন</button>
      </div>

      <h4 className="text-center text-success pb-3">
        অথবা ফোন করুন 01990000000
      </h4>
    </>
  );
};

export default PaymentNotice;
