import "./Footer.css";
import { Link } from "react-router-dom";

export const Footer = () => {
  const branchLoc =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28005.85109938202!2d77.07872926035046!3d28.667760496399243!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d04709a55ca61%3A0x733c78dcf34281ce!2sPaschim%20Vihar%2C%20Delhi!5e0!3m2!1sen!2sin!4v1708603602556!5m2!1sen!2sin";
  return (
    <>
      <div className="footer">
        <div className="fbox">
          <div className="aboutus">
            <h2>
              <span id="fdiff">A</span>bout us
            </h2>
            <p>
            CodeYatra simplifies travel planning with AI, addressing challenges for a quick, efficient, and personalized experience. Streamlining the journey seamlessly.
            </p>
          </div>
          <div className="branch">
            <h2>
              <span id="fdiff">B</span>ranch Location
            </h2>
            <iframe
              src={branchLoc}
              style={{ border: 0 }}
              id="map"
              allowFullScreen=""
              loading="lazy"
              title="Brach Location"
            ></iframe>
          </div>
          <div className="quicklinks">
            <h2>
              <span id="fdiff">Q</span>uick Links
            </h2>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/book">Book</Link>
              </li>
              <li>
                <Link to="/locations">Locations</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
          <div className="follow">
            <h2>
              <span id="fdiff">F</span>ollow us
            </h2>
            <ul>
              <li>
                <Link to="/" id="instagram">
                  <i className="fab fa-instagram"></i>
                </Link>
              </li>
              <li>
                <Link to="/" id="facebook">
                  <i className="fab fa-facebook"></i>
                </Link>
              </li>
              <li>
                <Link to="/" id="twitter">
                  <i className="fab fa-twitter"></i>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <hr />
        <div className="copy">
          <h2>
            Copyright &copy; <span id="fdiff">C</span>odeYatra 2024-25 | All
            Rights Reserved
          </h2>
        </div>
      </div>
    </>
  );
};
