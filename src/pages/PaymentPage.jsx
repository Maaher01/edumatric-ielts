const PaymentPage = () => {
  return (
    <section className="container">
      <div className="mb-5 p-5">
        <div className="row">
          <div className="col-lg-12 col-md-12  col-sm-12 col-xs-12">
            <div className="mx-auto text-center">
              <h1 className="fw-bold"> হাজার মানুষের IELTS প্রস্তুতি </h1>
              <h3> নিচে আপনার তথ্য দিয়ে রেজিস্ট্রেশন করুন </h3>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="card mt-2 mb-4" style={{ background: "#D9D9D9" }}>
              <div className="card-body">
                <form
                  method="POST"
                  action="https://1000.hellobarc.com/signup/confirm"
                >
                  <input
                    type="hidden"
                    name="_token"
                    defaultValue="tCd9khx5ncHiImEI3UCYuafXN73fZtjHsjp9NzM8"
                  />
                  <div className="row mb-3">
                    <label
                      htmlFor="name"
                      className="col-md-4 col-form-label text-md-end"
                    >
                      Name
                    </label>
                    <div className="col-md-6">
                      <input
                        id="name"
                        type="text"
                        className="form-control "
                        name="name"
                        defaultValue=""
                        required=""
                        autoComplete="name"
                        placeholder="আপনার নাম"
                        autofocus=""
                      />
                    </div>
                  </div>
                  <div className="row mb-3">
                    <label
                      htmlFor="email"
                      className="col-md-4 col-form-label text-md-end"
                    >
                      Email Address
                    </label>
                    <div className="col-md-6">
                      <input
                        id="email"
                        type="email"
                        className="form-control "
                        name="email"
                        defaultValue=""
                        placeholder="আপনার ইমেইল (আপডেট জানানোর জন্য)"
                        required=""
                        autoComplete="email"
                      />
                    </div>
                  </div>
                  <div className="row mb-3">
                    <label
                      htmlFor="contact_number"
                      className="col-md-4 col-form-label text-md-end"
                    >
                      Contact Number
                    </label>
                    <div className="col-md-6">
                      <input
                        id="contact_number"
                        type="contact_number"
                        className="form-control "
                        name="contact_number"
                        defaultValue=""
                        placeholder="আপনার Contact number নাম্বার (দ্রুত যোগাযোগের জন্য)"
                        required=""
                        autoComplete="contact_number"
                      />
                    </div>
                  </div>
                  <div className="row mb-3">
                    <label
                      htmlFor="division"
                      className="col-md-4 col-form-label text-md-end"
                    >
                      Division
                    </label>
                    <div className="col-md-6">
                      <select
                        id="division"
                        type="division"
                        className="form-control "
                        name="division"
                        value=""
                        placeholder="আপনার বর্তমান এডেন্স"
                        required=""
                        autoComplete="division"
                        onchange="divisionSelected()"
                      >
                        <option value="">বিভাগ নির্বাচন করুন</option>
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
                  <div className="row mb-3">
                    <label
                      htmlFor="district"
                      className="col-md-4 col-form-label text-md-end"
                    >
                      District
                    </label>
                    <div className="col-md-6">
                      <select
                        id="district"
                        type="district"
                        className="form-control "
                        name="district"
                        value=""
                        placeholder="আপনার বর্তমান এডেন্স"
                        required=""
                        autoComplete="district"
                        onchange="districtSelected()"
                      >
                        <option value="">জেলা নির্বাচন করুন</option>
                      </select>
                    </div>
                  </div>
                  <div className="row mb-3">
                    <label
                      htmlFor="upazilla"
                      className="col-md-4 col-form-label text-md-end"
                    >
                      Upazilla
                    </label>
                    <div className="col-md-6">
                      <select
                        id="upazilla"
                        type="upazilla"
                        className="form-control "
                        name="upazilla"
                        value=""
                        placeholder="আপনার বর্তমান এডেন্স"
                        required=""
                        autoComplete="upazilla"
                        onchange="upazillaSelected()"
                      >
                        <option value="">উপজেলা নির্বাচন করুন</option>
                      </select>
                    </div>
                  </div>
                  <div id="upazilla_selected" style={{ display: "none" }}>
                    <div className="row mb-3">
                      <label
                        htmlFor="thana"
                        className="col-md-4 col-form-label text-md-end"
                      >
                        Thana
                      </label>
                      <div className="col-md-6">
                        <select
                          id="thana"
                          type="thana"
                          className="form-control "
                          name="thana"
                          value=""
                          placeholder="আপনার বর্তমান এডেন্স"
                          autoComplete="thana"
                        >
                          <option value="">থানা নির্বাচন করুন</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="row mb-3">
                    <label
                      htmlFor="password"
                      className="col-md-4 col-form-label text-md-end"
                    >
                      Password
                    </label>
                    <div className="col-md-6">
                      <input
                        id="password"
                        type="password"
                        className="form-control "
                        name="password"
                        placeholder="********"
                        required=""
                        autoComplete="new-password"
                      />
                    </div>
                  </div>
                  <div className="row mb-3">
                    <label
                      htmlFor="password-confirm"
                      className="col-md-4 col-form-label text-md-end"
                    >
                      Confirm Password
                    </label>
                    <div className="col-md-6">
                      <input
                        id="password-confirm"
                        type="password"
                        className="form-control "
                        name="confirm_password"
                        placeholder="Same as password"
                        required=""
                        autoComplete="new-password"
                      />
                    </div>
                  </div>
                </form>
              </div>
            </div>
            {/* <div className="row mb-3">
              <div className="mt-3 text-center">
                <a
                  href="https://1000.hellobarc.com/signin/confirm"
                  style={{ color: "red", textDecoration: "none" }}
                >
                  পূর্বেই রেজিষ্ট্রেশন করে থাকলে{" "}
                </a>
              </div>
            </div> */}
            <div className="row mb-0">
              <div className="col-md-12 mx-auto">
                <div className="d-grid mt-2">
                  <button
                    className="btn fw-bold"
                    style={{ background: "#00a651", color: "white" }}
                  >
                    ক্লিক করে জয়েন করুন হাজার মানুষের IELTS প্রস্তুতি প্রোগ্রামে
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PaymentPage;
