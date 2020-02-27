import React from "react";

function Footer() {
  return (
    <div className="footer-twine">
      <footer className="footer-bg py-2 d-xs-none d-none d-sm-none d-lg-block show-desktop">
        <div className="container px-6">
          <div className="d-flex">
            <div className="mr-auto p-2">
              <span className="text-white pr-4">© 2020 Twine Labs, Inc</span>
              <a
                href="https://www.iubenda.com/privacy-policy/39422403/full-legal"
                className="text-white px-3"
                target="_blank"
              >
                Privacy Policy
              </a>
              <a
                href="mailto:info@twinelabs.com"
                className="text-white px-3"
                target="_blank"
              >
                Contact
              </a>
            </div>
            <div className="p-2">
              <a
                href="https://www.linkedin.com/company/twine-labs/"
                className="social-anchor"
                target="_blank"
              >
                <img
                  src="assets/images/white-linkedin-icon.png"
                  className="white-social-icon"
                />
                <img
                  src="assets/images/blue-linkedin-icon.png"
                  className="blue-social-icon"
                />
              </a>
            </div>
          </div>
        </div>
      </footer>
      <footer className="footer-bg  d-sm-block d-md-none d-sm-block d-md-block d-lg-none">
        <div className="container px-6">
          <div className="text-center">
            <div className="footer_centered p-2">
              <a
                href="https://www.iubenda.com/privacy-policy/39422403/full-legal"
                className="text-white px-3 py-2"
                target="_blank"
              >
                Privacy Policy
              </a>
              <a
                href="mailto:info@twinelabs.com"
                className="text-white px-3"
                target="_blank"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </footer>
      <div className="bg-footer d-sm-block d-md-none d-sm-block d-md-block d-lg-none">
        <div className="text-center">
          <div className="footer_centered p-2">
            <a
              href="https://www.linkedin.com/company/twine-labs/"
              target="_blank"
              className="text-white px-3"
            >
              <img src="assets/images/linkedin_gray.svg" />
            </a>
            <a href="#" className="secondary-color f-16 mt-2">
              © 2020 Twine Labs, Inc
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
