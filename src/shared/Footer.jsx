import Logo from "../assets/images/edumatric-logo.png";

const Footer = () => {
  return (
    <div>
      <div className="footer__wrap mt-5">
        <div className="footer__poster">
          <img src={Logo} alt="logo" />
        </div>
        <div className="footer__content">
          <div className="first__content">
            <h5 className="fw-bold">Mock Venue</h5>
            <p className="text-body-secondary">
              Greenland Tower, Level 4, 26 Shahid Sangbadik Selina Parvin Road,
              Moghbazar, Dhaka 1217, (beside siddheswari college) <br /> Phone
              number: 01709990904
            </p>
          </div>

          <div className="second__content">
            <h5 className="fw-bold">Head Office</h5>

            <p className="text-body-secondary">
              1 Gulshan Avenue, Gulshan-1, Dhaka-1212, Bangladesh. <br />
              Phone number: +88024881021017
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
