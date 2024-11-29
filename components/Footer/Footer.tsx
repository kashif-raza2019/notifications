import Link from "next/link";

const Footer = () => {
  const title = process.env.NEXT_PUBLIC_TITLE;

  return (
    <footer className="py-5">
      <div className="container">
        <div className="row">
          {/* Brand Section */}
          <div className="col-md-3">
            <h5 className="fw-bold">{title}</h5>
          </div>

          {/* About Section */}
          <div className="col-md-2">
            <h6 className="fw-bold">ABOUT {title?.toUpperCase()}</h6>
            <ul className="list-unstyled">
              <li>
                <Link href="#" className="text-muted">
                  Who We Are
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted">
                  Work With Us
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted">
                  Investor Relations
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted">
                  Report Fraud
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* For Partners Section */}
          <div className="col-md-2">
            <h6 className="fw-bold">FOR PARTNERS</h6>
            <ul className="list-unstyled">
              <li>
                <Link href="#" className="text-muted">
                  Partner With Us
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted">
                  Apps For You
                </Link>
              </li>
            </ul>
          </div>

          {/* Learn More Section */}
          <div className="col-md-2">
            <h6 className="fw-bold">LEARN MORE</h6>
            <ul className="list-unstyled">
              <li>
                <Link href="#" className="text-muted">
                  Privacy
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted">
                  Security
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted">
                  Terms
                </Link>
              </li>
            </ul>
          </div>

          {/* Application Section */}
          <div className="col-md-3 text-center">
            <h6 className="fw-bold">GET APP ON</h6>
            <div 
             style={{
                padding: '1rem'
             }}
            >
              <Link
                href="#"
                style={{
                  fontSize: "2.5rem",
                }}
              >
                <i className="bi bi-google-play text-muted"></i>
              </Link>
              <Link
                href="#"
                style={{
                  fontSize: "2.8rem",
                }}
              >
                <i className="bi bi-apple text-muted"></i>
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="text-center mt-5">
          <p className="text-muted">
            By continuing past this page, you agree to our Terms of Service,
            Cookie Policy, Privacy Policy, and Content Policies. All trademarks
            are properties of their respective owners. <br />
            © 2024 {title} Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
