const Footer = () => {
  return (
    <footer
      class="row row-cols-1 row-cols-sm-2 row-cols-md-6 p-5 mx-5 mt-5 border-top w-100 gap-4"
      style={{ background: "#d9d9d9", bottom: "0", marginBottom: "0" }}
    >
      <div class="col mb-3"></div>

      <div class="col mb-3">
        <img
          className="rounded mx-5"
          src="./assets/images/edumatric-logo.png"
        />
      </div>

      <div class="col mb-3"></div>

      <div class="col mb-3">
        <h5>Mock Venue</h5>
        <p className="text-body-secondary">
          Mogbajar Address <br /> Location: Greenland Tower, Level 4, 26 Shahid
          Sangbadik Selina Parvin Road, Moghbazar, Dhaka 1217, (beside
          siddheswari college)
          <br /> Phone number: 01709990904
        </p>
      </div>

      <div class="col mb-3">
        <h5>Head Office</h5>
        <p className="text-body-secondary">
          Gulshan Address <br /> Location: 1 Gulshan Avenue, Gulshan-1,
          Dhaka-1212, Bangladesh.
          <br />
          Phone number: +88024881021017
        </p>
      </div>

      <div class="col mb-3"></div>
    </footer>
  );
};

export default Footer;
