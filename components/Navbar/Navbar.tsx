import Link from "next/link";

const Header = () => {
  const title = process.env.NEXT_PUBLIC_TITLE;

  return (
    <div
      className="hero-image"
      style={{
        backgroundImage: "url('/hero-image.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "60vh",
      }}
    >
      <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="container">
          <Link href="/" className="navbar-brand" style={styles.brand}>
            {title}
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link
                  href="/partner"
                  className="nav-link"
                  style={styles.navbarLinks}
                >
                  Join as Partner
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  href="/login"
                  className="nav-link"
                  style={styles.navbarLinks}
                >
                  Login
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  href="/signup"
                  className="nav-link"
                  style={styles.navbarLinks}
                >
                  Sign Up
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

const styles = {
  navbarLinks: {
    fontSize: "1.4rem",
    color: "#ffffff",
  },
  brand: {
    fontSize: "2rem",
    color: "#ffffff",
  },
};

export default Header;
