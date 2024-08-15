const TopHeader = () => {
  return (
    <>
      <div id="page-wrapper" className="magazine-view feed-view">
        <div className="fbt-headline clearfix" id="headline">
          <div className="container">
            <div className="row align-items-center justify-content-between py-1 py-md-0">
              <div className="col-md-7 left-headline-content">
                <div className="fbt-left-headline" id="left-headline">
                  <ul className="nav justify-content-center justify-content-md-start">
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        About
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        Services
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        Contact
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-5 right-headline-content">
                <div className="fbt-right-headline" id="right-headline">
                  <ul className="nav justify-content-center justify-content-md-end social-icons">
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        <i className="fa fa-facebook" />
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        <i className="fa fa-twitter" />
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        <i className="fa fa-instagram" />
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        <i className="fa fa-linkedin" />
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        <i className="fa fa-youtube-play" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopHeader;
