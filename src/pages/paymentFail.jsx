import { useEffect } from "react";
import axios from "axios";
import { baseUrl } from "../api/api";

const paymentFail = () => {
  useEffect(() => {
    paymentStatusUpdate();
  }, []);

  const paymentStatusUpdate = async () => {
    const formData = new FormData();

    formData.append("paymentstatus", 2);
    formData.append("transactionid", localStorage.getItem("paymentID"));

    const userId = localStorage.getItem("userId");

    try {
      await axios.post(
        `${baseUrl}/studentinfo/updatePayment/${userId}`,
        formData
      );

      // localStorage.clear();
    } catch (error) {
      console.error("There was an error:", error);
    }
  };

  return (
    <>
      <h1 className="text-center fw-bold mt-5" style={{ fontSize: "44px" }}>
        দুঃখিত আপনার রেজিস্ট্রেশনটি সম্পূর্ণ হয়নি, অনুগ্রহ করে পুনরায় চেষ্টা
        করুন।
      </h1>

      {/* <div className="row justify-content-center mt-5">
        <div className="col-lg-7 col-md-7 col-sm-7 col-xs-7">
          <div className="mx-auto text-center">
            <h1 className="fw-bold">{statusMessage}</h1>
          </div>
        </div>
      </div> */}

      <div className="short_level_two">
        <h2 className="text-center mt-5">
          Edumatric এ IELTS রেজিস্ট্রেশন করুন এবং ৫০০ টাকা instant cashback
          গ্রহণ করুন।
        </h2>
      </div>

      <div className="short_level_three mt-5">
        <h2 className="text-center">
          <span className="fw-bold"> IELTS registration </span> করতে ফোন করুন
          <span className="fw-bold"> 01709990904</span>
        </h2>
      </div>
    </>
  );
};

export default paymentFail;
