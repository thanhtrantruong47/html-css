function Header() {
    return (
      <>
        <div className="sign-up">
          <div className="sign-up__item container">
            <p className="sign-up__desc">
              Sign up and get 20% off to your first order.{" "}
              <a className="sign-up__advertise" href="javascript:void(0)">
                Sign Up Now
              </a>
            </p>
            <a
              className="sign-up__off icon-off"
              aria-label="icon-off"
              href="javascript:void(0)"
            ></a>
          </div>
        </div>
        <header className="header">
          <nav className="navbar container">
            <a
              className="navbar__nav icon-nav"
              aria-label="icon-nav"
              href="javascript:void(0)"
            ></a>
            <a className="sign-up__link" href="/product">
              <h1 className="icon-logo"></h1>
            </a>
  
            <ul className="navbar__list">
              <li>
                <a className="link" href="/category">
                  Shop
                </a>
              </li>
              <li>
                <a className="link" href="javascrip:void(0)">
                  On Sale
                </a>
              </li>
              <li>
                <a className="link" href="javascrip:void(0)">
                  New Arrivals
                </a>
              </li>
              <li>
                <a className="link" href="javascrip:void(0)">
                  Brand
                </a>
              </li>
            </ul>
            <form action="index.html">
              <input
                className="navbar__search"
                type="text"
                name="search"
                maxLength="20"
                placeholder="Search for products..."
              />
            </form>
            <div className="navbar__option icon">
              <a
                className="link icon-search"
                aria-label="icon-search"
                href="javascrip:void(0)"
              ></a>
              <a
                className="link icon-cart"
                aria-label="icon-cart"
                href="/"
              ></a>
              <a
                className="link icon-login"
                aria-label="icon-login"
                href="/category"
              ></a>
            </div>
          </nav>
        </header>
        </>
    );
}

export default Header;